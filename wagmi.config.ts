import { defineConfig } from '@wagmi/cli'
import { actions, etherscan, react } from '@wagmi/cli/plugins'
import 'dotenv/config'
import { mainnet, sepolia } from 'wagmi/chains'

export default defineConfig({
  out: 'src/contracts/index.ts',
  contracts: [],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: mainnet.id,
      contracts: [
        {
          name: 'LilNounsGovernor',
          address: {
            [mainnet.id]: '0x5d2c31ce16924c2a71d317e5bbfd5ce387854039',
            [sepolia.id]: '0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7',
          },
        },
        {
          name: 'LilNounsTreasury',
          address: {
            [mainnet.id]: '0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb',
            [sepolia.id]: '0xe54f098b1880c536e0083720922b8a365fb403dc',
          },
        },
        {
          name: 'LilNounsToken',
          address: {
            [mainnet.id]: '0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b',
            [sepolia.id]: '0x6e48e79f718776cf412a87e047722dbfda5b465d',
          },
        },
        {
          name: 'LilNounsAuction',
          address: {
            [mainnet.id]: '0xa2587b1e2626904c8575640512b987bd3d3b592d',
            [sepolia.id]: '0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c',
          },
        },
        {
          name: 'LilNounsDescriptor',
          address: {
            [mainnet.id]: '0xb2a47999b3117c7dd628920ed8e77ebdfb948b68',
            [sepolia.id]: '0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e',
          },
        },
        {
          name: 'LilNounsData',
          address: {
            [mainnet.id]: '0x8d59e1060464ddcd0367e2eabedf70b3e7422902',
            [sepolia.id]: '0x8d59e1060464ddcd0367e2eabedf70b3e7422902'
          }
        }
      ],
      tryFetchProxyImplementation: true,
    }),
    react(),
    actions(),
  ],
})
