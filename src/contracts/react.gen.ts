import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsAuction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const lilNounsAuctionAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_targetPrice', internalType: 'int256', type: 'int256' },
      { name: '_priceDecayPercent', internalType: 'int256', type: 'int256' },
      { name: '_perTimeUnit', internalType: 'int256', type: 'int256' },
      { name: '_wethAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'ADDRESS_ZERO' },
  {
    type: 'error',
    inputs: [{ name: 'impl', internalType: 'address', type: 'address' }],
    name: 'INVALID_UPGRADE',
  },
  { type: 'error', inputs: [], name: 'ONLY_CALL' },
  { type: 'error', inputs: [], name: 'ONLY_DELEGATECALL' },
  { type: 'error', inputs: [], name: 'ONLY_PROXY' },
  { type: 'error', inputs: [], name: 'ONLY_UUPS' },
  { type: 'error', inputs: [], name: 'UNSUPPORTED_UUID' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reservePrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AuctionReservePriceUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nounId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'winner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AuctionSettled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interval',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AuctionUpdateIntervalUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'descriptor',
        internalType: 'contract INounsDescriptorV2',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'DescriptorUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolSize',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolSizeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'seeder',
        internalType: 'contract INounsSeeder',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SeederUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'impl',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'function',
    inputs: [
      { name: 'expectedBlockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'expectedNounId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'buyNow',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fetchNextNoun',
    outputs: [
      { name: 'nounId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
      { name: 'svg', internalType: 'string', type: 'string' },
      { name: 'price', internalType: 'uint256', type: 'uint256' },
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'fetchNoun',
    outputs: [
      { name: 'nounId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
      { name: 'svg', internalType: 'string', type: 'string' },
      { name: 'price', internalType: 'uint256', type: 'uint256' },
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'blockNum', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentVRGDAPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSeederBlockNumber',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'sold', internalType: 'int256', type: 'int256' }],
    name: 'getTargetSaleTime',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'timeSinceStart', internalType: 'int256', type: 'int256' },
      { name: 'sold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getVRGDAPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_reservePrice', internalType: 'uint256', type: 'uint256' },
      { name: '_nextNounId', internalType: 'uint256', type: 'uint256' },
      { name: '_poolSize', internalType: 'uint256', type: 'uint256' },
      { name: '_nounsSoldAtAuction', internalType: 'uint256', type: 'uint256' },
      { name: '_nounsTokenAddress', internalType: 'address', type: 'address' },
      { name: '_nounsSeederAddress', internalType: 'address', type: 'address' },
      {
        name: '_nounsDescriptorAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lilNounderRewardNouns',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextNounId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextNounIdForCaller',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nounsDAORewardNouns',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nounsDescriptor',
    outputs: [
      {
        name: '',
        internalType: 'contract INounsDescriptorV2',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nounsSeeder',
    outputs: [
      { name: '', internalType: 'contract INounsSeeder', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nounsSoldAtAuction',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nounsToken',
    outputs: [
      { name: '', internalType: 'contract INounsToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'poolSize',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reservePrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'seederBlockNumber',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_nounsDescriptor',
        internalType: 'contract INounsDescriptorV2',
        type: 'address',
      },
    ],
    name: 'setNounsDescriptor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_nounsSeeder',
        internalType: 'contract INounsSeeder',
        type: 'address',
      },
    ],
    name: 'setNounsSeeder',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_poolSize', internalType: 'uint256', type: 'uint256' }],
    name: 'setPoolSize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_reservePrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setReservePrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_updateInterval', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setUpdateInterval',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetPrice',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'updateInterval',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_newImpl', internalType: 'address', type: 'address' }],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_newImpl', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'usedBlockNumbers',
    outputs: [{ name: 'used', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'wethAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const lilNounsAuctionAddress = {
  1: '0xA2587b1e2626904c8575640512b987Bd3d3B592D',
  11155111: '0x0d8c4d18765AB8808ab6CEE4d7A760e8b93AB20c',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const lilNounsAuctionConfig = {
  address: lilNounsAuctionAddress,
  abi: lilNounsAuctionAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsData
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const lilNounsDataAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  { type: 'error', inputs: [], name: 'AmountExceedsBalance' },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedCall' },
  {
    type: 'error',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'FailedWithdrawingETH',
  },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidProposalArrayLengths' },
  { type: 'error', inputs: [], name: 'InvalidSupportValue' },
  { type: 'error', inputs: [], name: 'MustBeNounerOrPaySufficientFee' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ProposalMustHaveAtLeastOneCall' },
  { type: 'error', inputs: [], name: 'ProposalTooLarge' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  { type: 'error', inputs: [], name: 'SlugAlreadyUsed' },
  { type: 'error', inputs: [], name: 'SlugDoesNotExist' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  { type: 'error', inputs: [], name: 'ZeroLengthString' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'msgSender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'slug', internalType: 'string', type: 'string', indexed: false },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'CandidateFeedbackSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldCreateCandidateCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newCreateCandidateCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CreateCandidateCostSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ETHWithdrawn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldFeeRecipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newFeeRecipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'FeeRecipientSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'FeedbackSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'msgSender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'slug', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'ProposalCandidateCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'msgSender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'slug', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'proposalIdToUpdate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'encodedProposalHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'ProposalCandidateCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'msgSender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'slug', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'proposalIdToUpdate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'encodedProposalHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCandidateUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldUpdateCandidateCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newUpdateCandidateCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'UpdateCandidateCostSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_PROPOSAL_CALLS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PRIOR_VOTES_BLOCKS_AGO',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'slug', internalType: 'string', type: 'string' }],
    name: 'cancelProposalCandidate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createCandidateCost',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'signatures', internalType: 'string[]', type: 'string[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'slug', internalType: 'string', type: 'string' },
      { name: 'proposalIdToUpdate', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createProposalCandidate',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeRecipient',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'initialCreateCost', internalType: 'uint256', type: 'uint256' },
      { name: 'initialUpdateCost', internalType: 'uint256', type: 'uint256' },
      {
        name: 'feeRecipientAddress',
        internalType: 'address payable',
        type: 'address',
      },
    ],
    name: 'initializeV2',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'propCandidates',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'slug', internalType: 'string', type: 'string' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'sendCandidateFeedback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'sendFeedback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newCreateCandidateCost',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setCreateCandidateCost',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newFeeRecipient',
        internalType: 'address payable',
        type: 'address',
      },
    ],
    name: 'setFeeRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newUpdateCandidateCost',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setUpdateCandidateCost',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [
      { name: '', internalType: 'contract LilNounsToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'updateCandidateCost',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'signatures', internalType: 'string[]', type: 'string[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'slug', internalType: 'string', type: 'string' },
      { name: 'proposalIdToUpdate', internalType: 'uint256', type: 'uint256' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'updateProposalCandidate',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawETH',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const lilNounsDataAddress = {
  1: '0x8d59e1060464DdCD0367e2EaBEDf70b3E7422902',
  11155111: '0x8d59e1060464DdCD0367e2EaBEDf70b3E7422902',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const lilNounsDataConfig = {
  address: lilNounsDataAddress,
  abi: lilNounsDataAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsDescriptor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const lilNounsDescriptorAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_art', internalType: 'contract INounsArt', type: 'address' },
      {
        name: '_renderer',
        internalType: 'contract ISVGRenderer',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'BadPaletteLength' },
  { type: 'error', inputs: [], name: 'EmptyPalette' },
  { type: 'error', inputs: [], name: 'IndexNotFound' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'art',
        internalType: 'contract INounsArt',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ArtUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'baseURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'BaseURIUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'DataURIToggled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'PartsLocked' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'renderer',
        internalType: 'contract ISVGRenderer',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'RendererUpdated',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'accessories',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'accessoryCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addAccessories',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addAccessoriesFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_background', internalType: 'string', type: 'string' }],
    name: 'addBackground',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addBodies',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addBodiesFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addGlasses',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addGlassesFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addHeads',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addHeadsFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_backgrounds', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'addManyBackgrounds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'arePartsLocked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'art',
    outputs: [
      { name: '', internalType: 'contract INounsArt', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'backgroundCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'backgrounds',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'bodies',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bodyCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
    name: 'dataURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
    name: 'generateSVGImage',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
    name: 'genericDataURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
    name: 'getPartsForSeed',
    outputs: [
      {
        name: '',
        internalType: 'struct ISVGRenderer.Part[]',
        type: 'tuple[]',
        components: [
          { name: 'image', internalType: 'bytes', type: 'bytes' },
          { name: 'palette', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'glasses',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'glassesCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'headCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'heads',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isDataURIEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockParts',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint8', type: 'uint8' }],
    name: 'palettes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renderer',
    outputs: [
      { name: '', internalType: 'contract ISVGRenderer', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_art', internalType: 'contract INounsArt', type: 'address' },
    ],
    name: 'setArt',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'descriptor', internalType: 'address', type: 'address' }],
    name: 'setArtDescriptor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'inflator', internalType: 'contract IInflator', type: 'address' },
    ],
    name: 'setArtInflator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_baseURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'paletteIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'palette', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setPalette',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'paletteIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'pointer', internalType: 'address', type: 'address' },
    ],
    name: 'setPalettePointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_renderer',
        internalType: 'contract ISVGRenderer',
        type: 'address',
      },
    ],
    name: 'setRenderer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'toggleDataURIEnabled',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const lilNounsDescriptorAddress = {
  1: '0xb2a47999b3117c7dD628920ED8e77eBDfB948B68',
  11155111: '0x852f20f0140A4B5Aa29C70bF39C9a85edc2B454E',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const lilNounsDescriptorConfig = {
  address: lilNounsDescriptorAddress,
  abi: lilNounsDescriptorAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsEnsMapper
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const lilNounsEnsMapperAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'AlreadyClaimed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedCall' },
  { type: 'error', inputs: [], name: 'InvalidENSRegistry' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidLabel' },
  { type: 'error', inputs: [], name: 'InvalidLegacyAddress' },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'NotAuthorised',
  },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'NotTokenOwner',
  },
  { type: 'error', inputs: [], name: 'OverrideAvatarKey' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'PreexistingENSRecord',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
  {
    type: 'error',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UnregisteredNode',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'a', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AddrChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'NameChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'registrar',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'label', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'SubnameClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'indexedKey',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'TextChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'indexedKey',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'TextChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'addr',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'label', internalType: 'string', type: 'string' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'claimSubname',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'emitAddrEvents',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'emitTextEvents',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ens',
    outputs: [{ name: '', internalType: 'contract ENS', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ensNameOf',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ensNodeOf',
    outputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
      { name: 'legacyAddr', internalType: 'address', type: 'address' },
      { name: 'ensRegistry', internalType: 'address', type: 'address' },
      { name: 'ensRoot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'labelRoot', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isLegacyNode',
    outputs: [{ name: 'isLegacy', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'legacy',
    outputs: [
      {
        name: '',
        internalType: 'contract ILilNounsEnsMapperV1',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'migrateLegacySubname',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nft',
    outputs: [{ name: '', internalType: 'contract IERC721', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'releaseLegacySubname',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'relinquishSubname',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'restoreResolver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rootLabel',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rootNode',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setText',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'text',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const lilNounsEnsMapperAddress = {
  1: '0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f',
  11155111: '0x20779E57C32AE340cb8671E5EafC9eB26e753D22',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const lilNounsEnsMapperConfig = {
  address: lilNounsEnsMapperAddress,
  abi: lilNounsEnsMapperAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsGovernor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const lilNounsGovernorAbi = [
  { type: 'error', inputs: [], name: 'AdminOnly' },
  { type: 'error', inputs: [], name: 'CantCancelExecutedProposal' },
  { type: 'error', inputs: [], name: 'CantVetoExecutedProposal' },
  { type: 'error', inputs: [], name: 'InvalidMaxQuorumVotesBPS' },
  { type: 'error', inputs: [], name: 'InvalidMinQuorumVotesBPS' },
  { type: 'error', inputs: [], name: 'MinQuorumBPSGreaterThanMaxQuorumBPS' },
  { type: 'error', inputs: [], name: 'PendingVetoerOnly' },
  { type: 'error', inputs: [], name: 'UnsafeUint16Cast' },
  { type: 'error', inputs: [], name: 'VetoerBurned' },
  { type: 'error', inputs: [], name: 'VetoerOnly' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldMaxQuorumVotesBPS',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
      {
        name: 'newMaxQuorumVotesBPS',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
    ],
    name: 'MaxQuorumVotesBPSSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldMinQuorumVotesBPS',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
      {
        name: 'newMinQuorumVotesBPS',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
    ],
    name: 'MinQuorumVotesBPSSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldImplementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newImplementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewImplementation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldPendingAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newPendingAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewPendingAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldPendingVetoer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newPendingVetoer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewPendingVetoer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldVetoer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newVetoer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewVetoer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ProposalCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'startBlock',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'endBlock',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'startBlock',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'endBlock',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'proposalThreshold',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'quorumVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreatedWithRequirements',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ProposalExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'eta', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ProposalQueued',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldProposalThresholdBPS',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newProposalThresholdBPS',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalThresholdBPSSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ProposalVetoed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldQuorumCoefficient',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'newQuorumCoefficient',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'QuorumCoefficientSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldQuorumVotesBPS',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newQuorumVotesBPS',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'QuorumVotesBPSSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'refundAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'refundSent',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'RefundableVote',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'votes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'VoteCast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldVotingDelay',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotingDelay',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'VotingDelaySet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldVotingPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotingPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'VotingPeriodSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'sent', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'Withdraw',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BALLOT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_PROPOSAL_THRESHOLD_BPS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_QUORUM_VOTES_BPS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_QUORUM_VOTES_BPS_UPPER_BOUND',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_REFUND_BASE_FEE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_REFUND_GAS_USED',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_REFUND_PRIORITY_FEE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_VOTING_DELAY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_VOTING_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_PROPOSAL_THRESHOLD_BPS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_QUORUM_VOTES_BPS_LOWER_BOUND',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_QUORUM_VOTES_BPS_UPPER_BOUND',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_VOTING_DELAY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_VOTING_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'REFUND_BASE_GAS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '_acceptAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: '_acceptVetoer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: '_burnVetoPower',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newMinQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
      { name: 'newMaxQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
      { name: 'newQuorumCoefficient', internalType: 'uint32', type: 'uint32' },
    ],
    name: '_setDynamicQuorumParams',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newMaxQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
    ],
    name: '_setMaxQuorumVotesBPS',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newMinQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
    ],
    name: '_setMinQuorumVotesBPS',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newPendingAdmin', internalType: 'address', type: 'address' },
    ],
    name: '_setPendingAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newPendingVetoer', internalType: 'address', type: 'address' },
    ],
    name: '_setPendingVetoer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newProposalThresholdBPS',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: '_setProposalThresholdBPS',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newQuorumCoefficient', internalType: 'uint32', type: 'uint32' },
    ],
    name: '_setQuorumCoefficient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newVotingDelay', internalType: 'uint256', type: 'uint256' },
    ],
    name: '_setVotingDelay',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newVotingPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: '_setVotingPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: '_withdraw',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'cancel',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'castRefundableVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'castRefundableVoteWithReason',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'castVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'castVoteBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'uint8', type: 'uint8' },
      { name: 'reason', internalType: 'string', type: 'string' },
    ],
    name: 'castVoteWithReason',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'againstVotes', internalType: 'uint256', type: 'uint256' },
      { name: 'totalSupply', internalType: 'uint256', type: 'uint256' },
      {
        name: 'params',
        internalType: 'struct NounsDAOStorageV2.DynamicQuorumParams',
        type: 'tuple',
        components: [
          { name: 'minQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
          { name: 'maxQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
          { name: 'quorumCoefficient', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    name: 'dynamicQuorumVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'execute',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'getActions',
    outputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'signatures', internalType: 'string[]', type: 'string[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'blockNumber_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getDynamicQuorumParamsAt',
    outputs: [
      {
        name: '',
        internalType: 'struct NounsDAOStorageV2.DynamicQuorumParams',
        type: 'tuple',
        components: [
          { name: 'minQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
          { name: 'maxQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
          { name: 'quorumCoefficient', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'voter', internalType: 'address', type: 'address' },
    ],
    name: 'getReceipt',
    outputs: [
      {
        name: '',
        internalType: 'struct NounsDAOStorageV1Adjusted.Receipt',
        type: 'tuple',
        components: [
          { name: 'hasVoted', internalType: 'bool', type: 'bool' },
          { name: 'support', internalType: 'uint8', type: 'uint8' },
          { name: 'votes', internalType: 'uint96', type: 'uint96' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'timelock_', internalType: 'address', type: 'address' },
      { name: 'nouns_', internalType: 'address', type: 'address' },
      { name: 'vetoer_', internalType: 'address', type: 'address' },
      { name: 'votingPeriod_', internalType: 'uint256', type: 'uint256' },
      { name: 'votingDelay_', internalType: 'uint256', type: 'uint256' },
      {
        name: 'proposalThresholdBPS_',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'dynamicQuorumParams_',
        internalType: 'struct NounsDAOStorageV2.DynamicQuorumParams',
        type: 'tuple',
        components: [
          { name: 'minQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
          { name: 'maxQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
          { name: 'quorumCoefficient', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'latestProposalIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxQuorumVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minQuorumVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nouns',
    outputs: [
      { name: '', internalType: 'contract NounsTokenLike', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingVetoer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalMaxOperations',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalThresholdBPS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'proposals',
    outputs: [
      {
        name: '',
        internalType: 'struct NounsDAOStorageV2.ProposalCondensed',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'proposer', internalType: 'address', type: 'address' },
          {
            name: 'proposalThreshold',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'quorumVotes', internalType: 'uint256', type: 'uint256' },
          { name: 'eta', internalType: 'uint256', type: 'uint256' },
          { name: 'startBlock', internalType: 'uint256', type: 'uint256' },
          { name: 'endBlock', internalType: 'uint256', type: 'uint256' },
          { name: 'forVotes', internalType: 'uint256', type: 'uint256' },
          { name: 'againstVotes', internalType: 'uint256', type: 'uint256' },
          { name: 'abstainVotes', internalType: 'uint256', type: 'uint256' },
          { name: 'canceled', internalType: 'bool', type: 'bool' },
          { name: 'vetoed', internalType: 'bool', type: 'bool' },
          { name: 'executed', internalType: 'bool', type: 'bool' },
          { name: 'totalSupply', internalType: 'uint256', type: 'uint256' },
          { name: 'creationBlock', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targets', internalType: 'address[]', type: 'address[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'signatures', internalType: 'string[]', type: 'string[]' },
      { name: 'calldatas', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'description', internalType: 'string', type: 'string' },
    ],
    name: 'propose',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'queue',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'quorumParamsCheckpoints',
    outputs: [
      { name: 'fromBlock', internalType: 'uint32', type: 'uint32' },
      {
        name: 'params',
        internalType: 'struct NounsDAOStorageV2.DynamicQuorumParams',
        type: 'tuple',
        components: [
          { name: 'minQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
          { name: 'maxQuorumVotesBPS', internalType: 'uint16', type: 'uint16' },
          { name: 'quorumCoefficient', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'quorumVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'quorumVotesBPS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'state',
    outputs: [
      {
        name: '',
        internalType: 'enum NounsDAOStorageV1Adjusted.ProposalState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'timelock',
    outputs: [
      { name: '', internalType: 'contract INounsDAOExecutor', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'veto',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'vetoer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDelay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const lilNounsGovernorAddress = {
  1: '0x5d2C31ce16924C2a71D317e5BbFd5ce387854039',
  11155111: '0xa7C37f79ff5E6F932147fC69724B6ED432CA6Aa7',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const lilNounsGovernorConfig = {
  address: lilNounsGovernorAddress,
  abi: lilNounsGovernorAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const lilNounsTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_lilnoundersDAO', internalType: 'address', type: 'address' },
      { name: '_nounsDAO', internalType: 'address', type: 'address' },
      { name: '_minter', internalType: 'address', type: 'address' },
      {
        name: '_descriptor',
        internalType: 'contract INounsDescriptor',
        type: 'address',
      },
      {
        name: '_seeder',
        internalType: 'contract INounsSeeder',
        type: 'address',
      },
      {
        name: '_proxyRegistry',
        internalType: 'contract IProxyRegistry',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'DescriptorLocked' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'descriptor',
        internalType: 'contract INounsDescriptor',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'DescriptorUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lilnoundersDAO',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LilNoundersDAOUpdated',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'MinterLocked' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'MinterUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'NounBurned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
        indexed: false,
      },
    ],
    name: 'NounCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nounsDAO',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NounsDAOUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'SeederLocked' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'seeder',
        internalType: 'contract INounsSeeder',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SeederUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DELEGATION_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'nounId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      { name: 'fromBlock', internalType: 'uint32', type: 'uint32' },
      { name: 'votes', internalType: 'uint96', type: 'uint96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'dataURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegator', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'descriptor',
    outputs: [
      { name: '', internalType: 'contract INounsDescriptor', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getCurrentVotes',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPriorVotes',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isDescriptorLocked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isMinterLocked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isSeederLocked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lilnoundersDAO',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockDescriptor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockSeeder',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nounsDAO',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxyRegistry',
    outputs: [
      { name: '', internalType: 'contract IProxyRegistry', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'seeder',
    outputs: [
      { name: '', internalType: 'contract INounsSeeder', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'seeds',
    outputs: [
      { name: 'background', internalType: 'uint48', type: 'uint48' },
      { name: 'body', internalType: 'uint48', type: 'uint48' },
      { name: 'accessory', internalType: 'uint48', type: 'uint48' },
      { name: 'head', internalType: 'uint48', type: 'uint48' },
      { name: 'glasses', internalType: 'uint48', type: 'uint48' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newContractURIHash', internalType: 'string', type: 'string' },
    ],
    name: 'setContractURIHash',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_descriptor',
        internalType: 'contract INounsDescriptor',
        type: 'address',
      },
    ],
    name: 'setDescriptor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_lilnoundersDAO', internalType: 'address', type: 'address' },
    ],
    name: 'setLilNoundersDAO',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_minter', internalType: 'address', type: 'address' }],
    name: 'setMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_nounsDAO', internalType: 'address', type: 'address' }],
    name: 'setNounsDAO',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_seeder',
        internalType: 'contract INounsSeeder',
        type: 'address',
      },
    ],
    name: 'setSeeder',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegator', internalType: 'address', type: 'address' }],
    name: 'votesToDelegate',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const lilNounsTokenAddress = {
  1: '0x4b10701Bfd7BFEdc47d50562b76b436fbB5BdB3B',
  11155111: '0x6e48e79f718776CF412a87e047722dBFda5B465D',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const lilNounsTokenConfig = {
  address: lilNounsTokenAddress,
  abi: lilNounsTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsTreasury
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const lilNounsTreasuryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'admin_', internalType: 'address', type: 'address' },
      { name: 'delay_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'signature',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'eta', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'CancelTransaction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'signature',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'eta', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ExecuteTransaction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'NewAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newDelay',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'NewDelay',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newPendingAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'NewPendingAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'signature',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'eta', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'QueueTransaction',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'GRACE_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAXIMUM_DELAY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINIMUM_DELAY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'eta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'cancelTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'delay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'eta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'executeTransaction',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'eta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'queueTransaction',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'queuedTransactions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delay_', internalType: 'uint256', type: 'uint256' }],
    name: 'setDelay',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingAdmin_', internalType: 'address', type: 'address' },
    ],
    name: 'setPendingAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const lilNounsTreasuryAddress = {
  1: '0xd5f279ff9EB21c6D40C8f345a66f2751C4eeA1fB',
  11155111: '0xE54f098b1880C536e0083720922b8a365FB403DC',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const lilNounsTreasuryConfig = {
  address: lilNounsTreasuryAddress,
  abi: lilNounsTreasuryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuction = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsAuctionAbi,
  address: lilNounsAuctionAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"fetchNextNoun"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionFetchNextNoun =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'fetchNextNoun',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"fetchNoun"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionFetchNoun =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'fetchNoun',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"getCurrentVRGDAPrice"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionGetCurrentVrgdaPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'getCurrentVRGDAPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"getSeederBlockNumber"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionGetSeederBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'getSeederBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"getTargetSaleTime"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionGetTargetSaleTime =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'getTargetSaleTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"getVRGDAPrice"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionGetVrgdaPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'getVRGDAPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"lilNounderRewardNouns"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionLilNounderRewardNouns =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'lilNounderRewardNouns',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"nextNounId"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionNextNounId =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'nextNounId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"nextNounIdForCaller"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionNextNounIdForCaller =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'nextNounIdForCaller',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"nounsDAORewardNouns"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionNounsDaoRewardNouns =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'nounsDAORewardNouns',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"nounsDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionNounsDescriptor =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'nounsDescriptor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"nounsSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionNounsSeeder =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'nounsSeeder',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"nounsSoldAtAuction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionNounsSoldAtAuction =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'nounsSoldAtAuction',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"nounsToken"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionNounsToken =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'nounsToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionOwner = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsAuctionAbi,
  address: lilNounsAuctionAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"paused"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionPaused = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'paused',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"poolSize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionPoolSize =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'poolSize',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"reservePrice"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionReservePrice =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'reservePrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"seederBlockNumber"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionSeederBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'seederBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"startTime"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionStartTime =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'startTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"targetPrice"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionTargetPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'targetPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"updateInterval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionUpdateInterval =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'updateInterval',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"usedBlockNumbers"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionUsedBlockNumbers =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'usedBlockNumbers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"wethAddress"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useReadLilNounsAuctionWethAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'wethAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuction = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsAuctionAbi,
  address: lilNounsAuctionAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"buyNow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionBuyNow =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'buyNow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"pause"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionPause =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"setNounsDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionSetNounsDescriptor =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'setNounsDescriptor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"setNounsSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionSetNounsSeeder =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'setNounsSeeder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"setPoolSize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionSetPoolSize =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'setPoolSize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"setReservePrice"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionSetReservePrice =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'setReservePrice',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"setUpdateInterval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionSetUpdateInterval =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'setUpdateInterval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"unpause"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionUnpause =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWriteLilNounsAuctionUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"buyNow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionBuyNow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'buyNow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"pause"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"setNounsDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionSetNounsDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'setNounsDescriptor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"setNounsSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionSetNounsSeeder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'setNounsSeeder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"setPoolSize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionSetPoolSize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'setPoolSize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"setReservePrice"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionSetReservePrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'setReservePrice',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"setUpdateInterval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionSetUpdateInterval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'setUpdateInterval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"unpause"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useSimulateLilNounsAuctionUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"AuctionReservePriceUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionAuctionReservePriceUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'AuctionReservePriceUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"AuctionSettled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionAuctionSettledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'AuctionSettled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"AuctionUpdateIntervalUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionAuctionUpdateIntervalUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'AuctionUpdateIntervalUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"DescriptorUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionDescriptorUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'DescriptorUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"Paused"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"PoolSizeUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionPoolSizeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'PoolSizeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"SeederUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionSeederUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'SeederUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"Unpaused"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsData = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsDataAbi,
  address: lilNounsDataAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"MAX_PROPOSAL_CALLS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataMaxProposalCalls =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'MAX_PROPOSAL_CALLS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"PRIOR_VOTES_BLOCKS_AGO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataPriorVotesBlocksAgo =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'PRIOR_VOTES_BLOCKS_AGO',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataUpgradeInterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'UPGRADE_INTERFACE_VERSION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"createCandidateCost"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataCreateCandidateCost =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'createCandidateCost',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"feeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataFeeRecipient =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'feeRecipient',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataOwner = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsDataAbi,
  address: lilNounsDataAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'pendingOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"propCandidates"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataPropCandidates =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'propCandidates',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"token"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataToken = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsDataAbi,
  address: lilNounsDataAddress,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"updateCandidateCost"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useReadLilNounsDataUpdateCandidateCost =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'updateCandidateCost',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsData = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsDataAbi,
  address: lilNounsDataAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"cancelProposalCandidate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataCancelProposalCandidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'cancelProposalCandidate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"createProposalCandidate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataCreateProposalCandidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'createProposalCandidate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"initializeV2"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataInitializeV2 =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'initializeV2',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"sendCandidateFeedback"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataSendCandidateFeedback =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'sendCandidateFeedback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"sendFeedback"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataSendFeedback =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'sendFeedback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"setCreateCandidateCost"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataSetCreateCandidateCost =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'setCreateCandidateCost',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"setFeeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataSetFeeRecipient =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'setFeeRecipient',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"setUpdateCandidateCost"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataSetUpdateCandidateCost =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'setUpdateCandidateCost',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"updateProposalCandidate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataUpdateProposalCandidate =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'updateProposalCandidate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"withdrawETH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWriteLilNounsDataWithdrawEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'withdrawETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsData = /*#__PURE__*/ createUseSimulateContract({
  abi: lilNounsDataAbi,
  address: lilNounsDataAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"cancelProposalCandidate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataCancelProposalCandidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'cancelProposalCandidate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"createProposalCandidate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataCreateProposalCandidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'createProposalCandidate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"initializeV2"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataInitializeV2 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'initializeV2',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"sendCandidateFeedback"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataSendCandidateFeedback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'sendCandidateFeedback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"sendFeedback"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataSendFeedback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'sendFeedback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"setCreateCandidateCost"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataSetCreateCandidateCost =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'setCreateCandidateCost',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"setFeeRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataSetFeeRecipient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'setFeeRecipient',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"setUpdateCandidateCost"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataSetUpdateCandidateCost =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'setUpdateCandidateCost',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"updateProposalCandidate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataUpdateProposalCandidate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'updateProposalCandidate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDataAbi}__ and `functionName` set to `"withdrawETH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useSimulateLilNounsDataWithdrawEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    functionName: 'withdrawETH',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"CandidateFeedbackSent"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataCandidateFeedbackSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'CandidateFeedbackSent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"CreateCandidateCostSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataCreateCandidateCostSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'CreateCandidateCostSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"ETHWithdrawn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataEthWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'ETHWithdrawn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"FeeRecipientSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataFeeRecipientSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'FeeRecipientSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"FeedbackSent"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataFeedbackSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'FeedbackSent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"ProposalCandidateCanceled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataProposalCandidateCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'ProposalCandidateCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"ProposalCandidateCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataProposalCandidateCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'ProposalCandidateCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"ProposalCandidateUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataProposalCandidateUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'ProposalCandidateUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"UpdateCandidateCostSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataUpdateCandidateCostSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'UpdateCandidateCostSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDataAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x8d59e1060464ddcd0367e2eabedf70b3e7422902)
 */
export const useWatchLilNounsDataUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDataAbi,
    address: lilNounsDataAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptor = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsDescriptorAbi,
  address: lilNounsDescriptorAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"accessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorAccessories =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'accessories',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"accessoryCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorAccessoryCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'accessoryCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"arePartsLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorArePartsLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'arePartsLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"art"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorArt = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'art',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"backgroundCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorBackgroundCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'backgroundCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"backgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorBackgrounds =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'backgrounds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"baseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorBaseUri =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'baseURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"bodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorBodies =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'bodies',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"bodyCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorBodyCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'bodyCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"dataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorDataUri =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'dataURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"generateSVGImage"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorGenerateSvgImage =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'generateSVGImage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"genericDataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorGenericDataUri =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'genericDataURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"getPartsForSeed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorGetPartsForSeed =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'getPartsForSeed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"glasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorGlasses =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'glasses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"glassesCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorGlassesCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'glassesCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"headCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorHeadCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'headCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"heads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorHeads =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'heads',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"isDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorIsDataUriEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'isDataURIEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"palettes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorPalettes =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'palettes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"renderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorRenderer =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'renderer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"tokenURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptor = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsDescriptorAbi,
  address: lilNounsDescriptorAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddAccessories =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addAccessories',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddAccessoriesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addAccessoriesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBackground"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddBackground =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBackground',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddBodies =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBodies',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddBodiesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBodiesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddGlasses =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addGlasses',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddGlassesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addGlassesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddHeads =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addHeads',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddHeadsFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addHeadsFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addManyBackgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddManyBackgrounds =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addManyBackgrounds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"lockParts"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorLockParts =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'lockParts',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetArt =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArtDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetArtDescriptor =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArtDescriptor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArtInflator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetArtInflator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArtInflator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setPalette"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetPalette =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setPalette',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setPalettePointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetPalettePointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setPalettePointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setRenderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetRenderer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setRenderer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"toggleDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorToggleDataUriEnabled =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'toggleDataURIEnabled',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddAccessories =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addAccessories',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddAccessoriesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addAccessoriesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBackground"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddBackground =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBackground',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddBodies =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBodies',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddBodiesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBodiesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddGlasses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addGlasses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddGlassesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addGlassesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddHeads =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addHeads',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddHeadsFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addHeadsFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addManyBackgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddManyBackgrounds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addManyBackgrounds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"lockParts"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorLockParts =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'lockParts',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetArt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArtDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetArtDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArtDescriptor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArtInflator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetArtInflator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArtInflator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setPalette"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetPalette =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setPalette',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setPalettePointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetPalettePointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setPalettePointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setRenderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetRenderer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setRenderer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"toggleDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorToggleDataUriEnabled =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'toggleDataURIEnabled',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"ArtUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorArtUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'ArtUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"BaseURIUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorBaseUriUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'BaseURIUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"DataURIToggled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorDataUriToggledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'DataURIToggled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"PartsLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorPartsLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'PartsLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"RendererUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorRendererUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'RendererUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapper = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsEnsMapperAbi,
  address: lilNounsEnsMapperAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperUpgradeInterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'UPGRADE_INTERFACE_VERSION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"addr"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperAddr = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'addr',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"ens"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperEns = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsEnsMapperAbi,
  address: lilNounsEnsMapperAddress,
  functionName: 'ens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"ensNameOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperEnsNameOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'ensNameOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"ensNodeOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperEnsNodeOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'ensNodeOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"isLegacyNode"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperIsLegacyNode =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'isLegacyNode',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"legacy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperLegacy =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'legacy',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperName = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'name',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"nft"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperNft = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsEnsMapperAbi,
  address: lilNounsEnsMapperAddress,
  functionName: 'nft',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"rootLabel"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperRootLabel =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'rootLabel',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"rootNode"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperRootNode =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'rootNode',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"text"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useReadLilNounsEnsMapperText = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'text',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapper = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsEnsMapperAbi,
  address: lilNounsEnsMapperAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"claimSubname"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperClaimSubname =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'claimSubname',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"emitAddrEvents"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperEmitAddrEvents =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'emitAddrEvents',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"emitTextEvents"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperEmitTextEvents =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'emitTextEvents',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"migrateLegacySubname"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperMigrateLegacySubname =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'migrateLegacySubname',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"releaseLegacySubname"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperReleaseLegacySubname =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'releaseLegacySubname',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"relinquishSubname"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperRelinquishSubname =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'relinquishSubname',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"restoreResolver"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperRestoreResolver =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'restoreResolver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"setText"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperSetText =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'setText',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWriteLilNounsEnsMapperUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapper =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"claimSubname"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperClaimSubname =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'claimSubname',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"emitAddrEvents"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperEmitAddrEvents =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'emitAddrEvents',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"emitTextEvents"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperEmitTextEvents =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'emitTextEvents',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"migrateLegacySubname"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperMigrateLegacySubname =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'migrateLegacySubname',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"releaseLegacySubname"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperReleaseLegacySubname =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'releaseLegacySubname',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"relinquishSubname"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperRelinquishSubname =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'relinquishSubname',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"restoreResolver"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperRestoreResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'restoreResolver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"setText"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperSetText =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'setText',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useSimulateLilNounsEnsMapperUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWatchLilNounsEnsMapperEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `eventName` set to `"AddrChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWatchLilNounsEnsMapperAddrChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    eventName: 'AddrChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWatchLilNounsEnsMapperInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `eventName` set to `"NameChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWatchLilNounsEnsMapperNameChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    eventName: 'NameChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWatchLilNounsEnsMapperOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `eventName` set to `"SubnameClaimed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWatchLilNounsEnsMapperSubnameClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    eventName: 'SubnameClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `eventName` set to `"TextChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWatchLilNounsEnsMapperTextChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    eventName: 'TextChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsEnsMapperAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5D8E3A1991AC7d97fd813FC6367ec5c5E399A36f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x20779E57C32AE340cb8671E5EafC9eB26e753D22)
 */
export const useWatchLilNounsEnsMapperUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsEnsMapperAbi,
    address: lilNounsEnsMapperAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernor = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsGovernorAbi,
  address: lilNounsGovernorAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"BALLOT_TYPEHASH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorBallotTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'BALLOT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"DOMAIN_TYPEHASH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorDomainTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'DOMAIN_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MAX_PROPOSAL_THRESHOLD_BPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMaxProposalThresholdBps =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MAX_PROPOSAL_THRESHOLD_BPS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MAX_QUORUM_VOTES_BPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMaxQuorumVotesBps =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MAX_QUORUM_VOTES_BPS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MAX_QUORUM_VOTES_BPS_UPPER_BOUND"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMaxQuorumVotesBpsUpperBound =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MAX_QUORUM_VOTES_BPS_UPPER_BOUND',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MAX_REFUND_BASE_FEE"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMaxRefundBaseFee =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MAX_REFUND_BASE_FEE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MAX_REFUND_GAS_USED"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMaxRefundGasUsed =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MAX_REFUND_GAS_USED',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MAX_REFUND_PRIORITY_FEE"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMaxRefundPriorityFee =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MAX_REFUND_PRIORITY_FEE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MAX_VOTING_DELAY"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMaxVotingDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MAX_VOTING_DELAY',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MAX_VOTING_PERIOD"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMaxVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MAX_VOTING_PERIOD',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MIN_PROPOSAL_THRESHOLD_BPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMinProposalThresholdBps =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MIN_PROPOSAL_THRESHOLD_BPS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MIN_QUORUM_VOTES_BPS_LOWER_BOUND"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMinQuorumVotesBpsLowerBound =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MIN_QUORUM_VOTES_BPS_LOWER_BOUND',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MIN_QUORUM_VOTES_BPS_UPPER_BOUND"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMinQuorumVotesBpsUpperBound =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MIN_QUORUM_VOTES_BPS_UPPER_BOUND',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MIN_VOTING_DELAY"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMinVotingDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MIN_VOTING_DELAY',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"MIN_VOTING_PERIOD"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMinVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'MIN_VOTING_PERIOD',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"REFUND_BASE_GAS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorRefundBaseGas =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'REFUND_BASE_GAS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorAdmin = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'admin',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"dynamicQuorumVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorDynamicQuorumVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'dynamicQuorumVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"getActions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorGetActions =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'getActions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"getDynamicQuorumParamsAt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorGetDynamicQuorumParamsAt =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'getDynamicQuorumParamsAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"getReceipt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorGetReceipt =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'getReceipt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"latestProposalIds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorLatestProposalIds =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'latestProposalIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"maxQuorumVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMaxQuorumVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'maxQuorumVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"minQuorumVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorMinQuorumVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'minQuorumVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorName = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsGovernorAbi,
  address: lilNounsGovernorAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"nouns"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorNouns = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'nouns',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"pendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorPendingAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'pendingAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"pendingVetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorPendingVetoer =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'pendingVetoer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"proposalCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorProposalCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'proposalCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"proposalMaxOperations"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorProposalMaxOperations =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'proposalMaxOperations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"proposalThreshold"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorProposalThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'proposalThreshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"proposalThresholdBPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorProposalThresholdBps =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'proposalThresholdBPS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"proposals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorProposals =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'proposals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"quorumParamsCheckpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorQuorumParamsCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'quorumParamsCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"quorumVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorQuorumVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'quorumVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"quorumVotesBPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorQuorumVotesBps =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'quorumVotesBPS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"state"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorState = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'state',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"timelock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorTimelock =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'timelock',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"vetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorVetoer =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'vetoer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"votingDelay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorVotingDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'votingDelay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"votingPeriod"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorVotingPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'votingPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernor = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsGovernorAbi,
  address: lilNounsGovernorAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_acceptAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorAcceptAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_acceptAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_acceptVetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorAcceptVetoer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_acceptVetoer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_burnVetoPower"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorBurnVetoPower =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_burnVetoPower',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setDynamicQuorumParams"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorSetDynamicQuorumParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setDynamicQuorumParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setMaxQuorumVotesBPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorSetMaxQuorumVotesBps =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setMaxQuorumVotesBPS',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setMinQuorumVotesBPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorSetMinQuorumVotesBps =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setMinQuorumVotesBPS',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorSetPendingAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setPendingAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setPendingVetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorSetPendingVetoer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setPendingVetoer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setProposalThresholdBPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorSetProposalThresholdBps =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setProposalThresholdBPS',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setQuorumCoefficient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorSetQuorumCoefficient =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setQuorumCoefficient',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setVotingDelay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorSetVotingDelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setVotingDelay',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setVotingPeriod"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorSetVotingPeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setVotingPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_withdraw',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"cancel"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorCancel =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"castRefundableVote"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorCastRefundableVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'castRefundableVote',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"castRefundableVoteWithReason"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorCastRefundableVoteWithReason =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'castRefundableVoteWithReason',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"castVote"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorCastVote =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorCastVoteBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorCastVoteWithReason =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"execute"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"propose"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorPropose =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"queue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorQueue =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"veto"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorVeto =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'veto',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_acceptAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorAcceptAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_acceptAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_acceptVetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorAcceptVetoer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_acceptVetoer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_burnVetoPower"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorBurnVetoPower =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_burnVetoPower',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setDynamicQuorumParams"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorSetDynamicQuorumParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setDynamicQuorumParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setMaxQuorumVotesBPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorSetMaxQuorumVotesBps =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setMaxQuorumVotesBPS',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setMinQuorumVotesBPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorSetMinQuorumVotesBps =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setMinQuorumVotesBPS',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorSetPendingAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setPendingAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setPendingVetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorSetPendingVetoer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setPendingVetoer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setProposalThresholdBPS"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorSetProposalThresholdBps =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setProposalThresholdBPS',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setQuorumCoefficient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorSetQuorumCoefficient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setQuorumCoefficient',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setVotingDelay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorSetVotingDelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setVotingDelay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setVotingPeriod"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorSetVotingPeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setVotingPeriod',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"cancel"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"castRefundableVote"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorCastRefundableVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'castRefundableVote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"castRefundableVoteWithReason"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorCastRefundableVoteWithReason =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'castRefundableVoteWithReason',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"castVote"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorCastVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'castVote',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"castVoteBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorCastVoteBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'castVoteBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"castVoteWithReason"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorCastVoteWithReason =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'castVoteWithReason',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"execute"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"propose"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorPropose =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"queue"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorQueue =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'queue',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"veto"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorVeto =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'veto',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"MaxQuorumVotesBPSSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorMaxQuorumVotesBpsSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'MaxQuorumVotesBPSSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"MinQuorumVotesBPSSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorMinQuorumVotesBpsSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'MinQuorumVotesBPSSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"NewAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorNewAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'NewAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"NewImplementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorNewImplementationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'NewImplementation',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"NewPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorNewPendingAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'NewPendingAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"NewPendingVetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorNewPendingVetoerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'NewPendingVetoer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"NewVetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorNewVetoerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'NewVetoer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalCanceled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalCreatedWithRequirements"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalCreatedWithRequirementsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalCreatedWithRequirements',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalQueued"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalQueuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalThresholdBPSSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalThresholdBpsSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalThresholdBPSSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalVetoed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalVetoedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalVetoed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"QuorumCoefficientSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorQuorumCoefficientSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'QuorumCoefficientSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"QuorumVotesBPSSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorQuorumVotesBpsSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'QuorumVotesBPSSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"RefundableVote"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorRefundableVoteEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'RefundableVote',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"VoteCast"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorVoteCastEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"VotingDelaySet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorVotingDelaySetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'VotingDelaySet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"VotingPeriodSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorVotingPeriodSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'VotingPeriodSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"Withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsToken = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"DELEGATION_TYPEHASH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDelegationTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'DELEGATION_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"DOMAIN_TYPEHASH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDomainTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'DOMAIN_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'checkpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"contractURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenContractUri =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'contractURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"dataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDataUri = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'dataURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDecimals = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'decimals',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDelegates =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'delegates',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"descriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDescriptor =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'descriptor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"getApproved"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"getCurrentVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenGetCurrentVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'getCurrentVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"getPriorVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenGetPriorVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'getPriorVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"isDescriptorLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenIsDescriptorLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'isDescriptorLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"isMinterLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenIsMinterLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'isMinterLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"isSeederLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenIsSeederLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'isSeederLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lilnoundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenLilnoundersDao =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lilnoundersDAO',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"minter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenMinter = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'minter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenName = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"nounsDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenNounsDao = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'nounsDAO',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenOwner = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"ownerOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"proxyRegistry"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenProxyRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'proxyRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"seeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenSeeder = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'seeder',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"seeds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenSeeds = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'seeds',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"tokenByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"tokenURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenTokenUri = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'tokenURI',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"votesToDelegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenVotesToDelegate =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'votesToDelegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsToken = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenLockDescriptor =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockDescriptor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenLockMinter =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockMinter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenLockSeeder =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockSeeder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setContractURIHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetContractUriHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setContractURIHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetDescriptor =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setDescriptor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setLilNoundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetLilNoundersDao =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setLilNoundersDAO',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetMinter =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setMinter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setNounsDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetNounsDao =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setNounsDAO',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetSeeder =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setSeeder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsToken = /*#__PURE__*/ createUseSimulateContract(
  { abi: lilNounsTokenAbi, address: lilNounsTokenAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenLockDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockDescriptor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenLockMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenLockSeeder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockSeeder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setContractURIHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetContractUriHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setContractURIHash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setDescriptor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setLilNoundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetLilNoundersDao =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setLilNoundersDAO',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setNounsDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetNounsDao =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setNounsDAO',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetSeeder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setSeeder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"DescriptorLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenDescriptorLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'DescriptorLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"DescriptorUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenDescriptorUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'DescriptorUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"LilNoundersDAOUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenLilNoundersDaoUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'LilNoundersDAOUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"MinterLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenMinterLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'MinterLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"MinterUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenMinterUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'MinterUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"NounBurned"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenNounBurnedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'NounBurned',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"NounCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenNounCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'NounCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"NounsDAOUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenNounsDaoUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'NounsDAOUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"SeederLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenSeederLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'SeederLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"SeederUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenSeederUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'SeederUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasury = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTreasuryAbi,
  address: lilNounsTreasuryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"GRACE_PERIOD"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryGracePeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'GRACE_PERIOD',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"MAXIMUM_DELAY"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryMaximumDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'MAXIMUM_DELAY',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"MINIMUM_DELAY"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryMinimumDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'MINIMUM_DELAY',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryAdmin = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'admin',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"delay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryDelay = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'delay',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"pendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryPendingAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'pendingAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"queuedTransactions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryQueuedTransactions =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'queuedTransactions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasury = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsTreasuryAbi,
  address: lilNounsTreasuryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"acceptAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasuryAcceptAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'acceptAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"cancelTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasuryCancelTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'cancelTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"executeTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasuryExecuteTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'executeTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"queueTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasuryQueueTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'queueTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"setDelay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasurySetDelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'setDelay',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"setPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasurySetPendingAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'setPendingAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasury =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"acceptAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasuryAcceptAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'acceptAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"cancelTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasuryCancelTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'cancelTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"executeTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasuryExecuteTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'executeTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"queueTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasuryQueueTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'queueTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"setDelay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasurySetDelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'setDelay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"setPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasurySetPendingAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'setPendingAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"CancelTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryCancelTransactionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'CancelTransaction',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"ExecuteTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryExecuteTransactionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'ExecuteTransaction',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"NewAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryNewAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'NewAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"NewDelay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryNewDelayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'NewDelay',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"NewPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryNewPendingAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'NewPendingAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"QueueTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryQueueTransactionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'QueueTransaction',
  })
