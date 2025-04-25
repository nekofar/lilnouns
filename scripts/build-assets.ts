import { createConfig } from '@wagmi/core'
import 'dotenv/config'
import fs from 'fs'
import { find, mapToObj, pipe } from 'remeda'
import { http } from 'viem'
import { mainnet } from 'viem/chains'
import { sepolia } from 'wagmi/chains'
import {
  readLilNounsDescriptorAccessories,
  readLilNounsDescriptorAccessoryCount,
  readLilNounsDescriptorBodies,
  readLilNounsDescriptorBodyCount,
  readLilNounsDescriptorGlasses,
  readLilNounsDescriptorGlassesCount,
  readLilNounsDescriptorHeadCount,
  readLilNounsDescriptorHeads,
} from '../src/contracts'

// Read the image data from the JSON file
function readLocalImageData(): any {
  try {
    // Read the file synchronously
    const imageDataRaw = fs.readFileSync('./src/assets/image-data.json', 'utf8')

    // Parse the JSON data
    return JSON.parse(imageDataRaw)
  } catch (error) {
    console.error('Error reading image data:', error)
    throw error
  }
}

async function readRemoteImageData(): Promise<any> {
  const localImageData = readLocalImageData()

  const activeChainId = 1
  const alchemyApiKey = process.env.ALCHEMY_API_KEY

  const activeChain =
    pipe(
      [mainnet, sepolia],
      find((chain) => chain.id === activeChainId),
    ) ?? sepolia

  const chainNetworkMap: Record<number, string> = {
    [mainnet.id]: 'eth-mainnet',
    [sepolia.id]: 'eth-sepolia',
  }

  const transports = mapToObj([mainnet, sepolia], (chain) => [
    chain.id,
    http(
      `https://${chainNetworkMap[chain.id]}.g.alchemy.com/v2/${alchemyApiKey}`,
    ),
  ])

  try {
    const config = createConfig({
      chains: [activeChain],
      transports,
    })

    const bodyCount = await readLilNounsDescriptorBodyCount(config, {})
    console.log('Number of bodies: ', bodyCount.toString(), '')
    if (bodyCount !== localImageData.images.bodies.length) {
      for (let i = 0; i < bodyCount; i++) {
        localImageData.images.bodies[i].data =
          await readLilNounsDescriptorBodies(config, {
            args: [BigInt(i)],
          })
      }
      console.log('Bodies: ', localImageData.images.bodies)
    }

    const accessoryCount = await readLilNounsDescriptorAccessoryCount(
      config,
      {},
    )
    console.log('Number of accessories: ', accessoryCount.toString(), '')
    if (accessoryCount !== localImageData.images.accessories.length) {
      for (let i = 0; i < accessoryCount; i++) {
        localImageData.images.accessories[i].data =
          await readLilNounsDescriptorAccessories(config, {
            args: [BigInt(i)],
          })
      }
      console.log('Accessories: ', localImageData.images.accessories)
    }

    const headCount = await readLilNounsDescriptorHeadCount(config, {})
    console.log('Number of heads: ', headCount.toString(), '')
    if (headCount !== localImageData.images.heads.length) {
      for (let i = 0; i < headCount; i++) {
        localImageData.images.heads[i].data = await readLilNounsDescriptorHeads(
          config,
          {
            args: [BigInt(i)],
          },
        )
      }
      console.log('Heads: ', localImageData.images.heads)
    }

    const glassesCount = await readLilNounsDescriptorGlassesCount(config, {})
    console.log('Number of glasses: ', glassesCount.toString(), '')
    if (glassesCount !== localImageData.images.glasses.length) {
      for (let i = 0; i < glassesCount; i++) {
        localImageData.images.glasses[i].data =
          await readLilNounsDescriptorGlasses(config, {
            args: [BigInt(i)],
          })
      }
      console.log('Glasses: ', localImageData.images.glasses)
    }

    console.log('Successfully loaded image data')
  } catch (error) {
    console.error('Error reading image data:', error)
    throw error
  }
}

// Create an immediately invoked async function expression (IIFE) to use await
;(async () => {
  const remoteImageData = await readRemoteImageData()
  console.log('Image data stored in variable: remoteImageData')
})()
