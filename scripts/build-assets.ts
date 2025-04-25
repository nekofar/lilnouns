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

// Function to write the image data back to the JSON file
function writeLocalImageData(imageData: any): void {
  try {
    // Convert the data to a JSON string with proper formatting
    const jsonData = JSON.stringify(imageData, null, 2)

    // Write the data back to the file
    fs.writeFileSync('./src/assets/image-data.json', jsonData, 'utf8')

    console.log('Successfully wrote image data to file')
  } catch (error) {
    console.error('Error writing image data:', error)
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
      let bodies: { filename: string; data: string }[] = []
      for (let i = 0; i < bodyCount; i++) {
        bodies[i] = {
          filename: localImageData.images.bodies[i].filename ?? `body-${i}`,
          data: await readLilNounsDescriptorBodies(config, {
            args: [BigInt(i)],
          }),
        }
      }
      localImageData.images.bodies = bodies
    }

    const accessoryCount = await readLilNounsDescriptorAccessoryCount(
      config,
      {},
    )
    console.log('Number of accessories: ', accessoryCount.toString(), '')
    if (accessoryCount !== localImageData.images.accessories.length) {
      let accessories: { filename: string; data: string }[] = []
      for (let i = 0; i < accessoryCount; i++) {
        accessories[i] = {
          filename:
            localImageData.images.accessories[i].filename ?? `accessory-${i}`,
          data: await readLilNounsDescriptorAccessories(config, {
            args: [BigInt(i)],
          }),
        }
      }
      localImageData.images.accessories = accessories
    }

    const headCount = await readLilNounsDescriptorHeadCount(config, {})
    console.log('Number of heads: ', headCount.toString(), '')
    if (headCount !== localImageData.images.heads.length) {
      let heads: { filename: string; data: string }[] = []
      for (let i = 0; i < headCount; i++) {
        heads[i] = {
          filename: localImageData.images.heads[i].filename ?? `head-${i}`,
          data: await readLilNounsDescriptorHeads(config, {
            args: [BigInt(i)],
          }),
        }
      }
      localImageData.images.heads = heads
    }

    const glassesCount = await readLilNounsDescriptorGlassesCount(config, {})
    console.log('Number of glasses: ', glassesCount.toString(), '')
    if (glassesCount !== localImageData.images.glasses.length) {
      let glasses: { filename: string; data: string }[] = []
      for (let i = 0; i < glassesCount; i++) {
        glasses[i] = {
          filename: localImageData.images.glasses[i].filename ?? `glasses-${i}`,
          data: await readLilNounsDescriptorGlasses(config, {
            args: [BigInt(i)],
          }),
        }
      }
      localImageData.images.glasses = glasses
    }

    console.log('Successfully loaded image data')
  } catch (error) {
    console.error('Error reading image data:', error)
    throw error
  }

  // After all updates are complete, write the data back to the file
  writeLocalImageData(localImageData)

  return localImageData
}

;(async () => {
  await readRemoteImageData()
})()
