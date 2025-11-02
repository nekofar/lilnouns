export {
  type Account, // GraphQL object type for Account entity
  type AccountFilter, // GraphQL filter input for Account entity
  type AccountNounsArgs, // GraphQL arguments type for Account.nouns
  // Enums from lilnouns.gen.ts
  AccountOrderBy, // GraphQL enum for ordering Account results
  AggregationInterval, // GraphQL enum for Aggregation Interval
  type Auction, // GraphQL object type for Auction entity
  type AuctionBidsArgs, // GraphQL arguments type for Auction.bids
  type AuctionFilter, // GraphQL filter input for Auction entity
  AuctionOrderBy, // GraphQL enum for ordering Auction results
  type Bid, // GraphQL object type for Bid entity
  type BidFilter, // GraphQL filter input for Bid entity
  BidOrderBy, // GraphQL enum for ordering Bid results
  type Block, // GraphQL block metadata representation
  type BlockChangedFilter, // GraphQL filter input for block change tracking
  type BlockHeight, // GraphQL block height selector input
  type CandidateFeedback, // GraphQL object type for Candidate Feedback entity
  type CandidateFeedbackFilter, // GraphQL filter input for Candidate Feedback entity
  CandidateFeedbackOrderBy, // GraphQL enum for ordering Candidate Feedback results
  type Delegate, // GraphQL object type for Delegate entity
  type DelegateFilter, // GraphQL filter input for Delegate entity
  type DelegateNounsRepresentedArgs, // GraphQL arguments type for Delegate.nounsRepresented
  DelegateOrderBy, // GraphQL enum for ordering Delegate results
  type DelegateProposalsArgs, // GraphQL arguments type for Delegate.proposals
  type DelegateTokenHoldersRepresentedArgs, // GraphQL arguments type for Delegate.tokenHoldersRepresented
  type DelegateVotesArgs, // GraphQL arguments type for Delegate.votes
  type DelegationEvent, // GraphQL object type for Delegation Event entity
  type DelegationEventFilter, // GraphQL filter input for Delegation Event entity
  DelegationEventOrderBy, // GraphQL enum for ordering Delegation Event results
  type DynamicQuorumParams, // GraphQL object type for Dynamic Quorum Params entity
  type DynamicQuorumParamsFilter, // GraphQL filter input for Dynamic Quorum Params entity
  DynamicQuorumParamsOrderBy, // GraphQL enum for ordering Dynamic Quorum Params results
  type Exact, // GraphQL mapped type preserving property modifiers
  type Governance, // GraphQL object type for Governance entity
  type GovernanceFilter, // GraphQL filter input for Governance entity
  GovernanceOrderBy, // GraphQL enum for ordering Governance results
  // Functions from lilnouns.gen.ts
  getSdk, // GraphQL SDK factory
  type Incremental, // GraphQL helper for incremental fragments
  type InputMaybe, // GraphQL helper wrapping nullable inputs
  type MakeEmpty, // GraphQL helper creating empty selection sets
  type MakeMaybe, // GraphQL helper making selected fields nullable
  type MakeOptional, // GraphQL helper making selected fields optional
  // Types from lilnouns.gen.ts
  type Maybe, // GraphQL helper wrapping nullable values
  type Meta, // GraphQL subgraph metadata payload
  type Noun, // GraphQL object type for Noun entity
  type NounFilter, // GraphQL filter input for Noun entity
  NounOrderBy, // GraphQL enum for ordering Noun results
  type NounVotesArgs, // GraphQL arguments type for Noun.votes
  OrderDirection, // GraphQL enum for sort direction values
  type Proposal, // GraphQL object type for Proposal entity
  type ProposalCandidate, // GraphQL object type for Proposal Candidate entity
  type ProposalCandidateContent, // GraphQL object type for Proposal Candidate Content entity
  type ProposalCandidateContentFilter, // GraphQL filter input for Proposal Candidate Content entity
  ProposalCandidateContentOrderBy, // GraphQL enum for ordering Proposal Candidate Content results
  type ProposalCandidateFilter, // GraphQL filter input for Proposal Candidate entity
  ProposalCandidateOrderBy, // GraphQL enum for ordering Proposal Candidate results
  type ProposalCandidateVersion, // GraphQL object type for Proposal Candidate Version entity
  type ProposalCandidateVersionFilter, // GraphQL filter input for Proposal Candidate Version entity
  ProposalCandidateVersionOrderBy, // GraphQL enum for ordering Proposal Candidate Version results
  type ProposalCandidateVersionsArgs, // GraphQL arguments type for Proposal.candidateVersions
  type ProposalFeedback, // GraphQL object type for Proposal Feedback entity
  type ProposalFeedbackFilter, // GraphQL filter input for Proposal Feedback entity
  ProposalFeedbackOrderBy, // GraphQL enum for ordering Proposal Feedback results
  type ProposalFeedbackPostsArgs, // GraphQL arguments type for Proposal.feedbackPosts
  type ProposalFilter, // GraphQL filter input for Proposal entity
  ProposalOrderBy, // GraphQL enum for ordering Proposal results
  ProposalStatus, // GraphQL enum for proposal lifecycle states
  type ProposalVersion, // GraphQL object type for Proposal Version entity
  type ProposalVersionFilter, // GraphQL filter input for Proposal Version entity
  ProposalVersionOrderBy, // GraphQL enum for ordering Proposal Version results
  type ProposalVotesArgs, // GraphQL arguments type for Proposal.votes
  type Query, // GraphQL object type for Query entity
  type QueryAccountArgs, // GraphQL arguments type for Query.account
  type QueryAccountsArgs, // GraphQL arguments type for Query.accounts
  type QueryAuctionArgs, // GraphQL arguments type for Query.auction
  type QueryAuctionsArgs, // GraphQL arguments type for Query.auctions
  type QueryBidArgs, // GraphQL arguments type for Query.bid
  type QueryBidsArgs, // GraphQL arguments type for Query.bids
  type QueryCandidateFeedbackArgs, // GraphQL arguments type for Query.candidateFeedback
  type QueryCandidateFeedbacksArgs, // GraphQL arguments type for Query.candidateFeedbacks
  type QueryDelegateArgs, // GraphQL arguments type for Query.delegate
  type QueryDelegatesArgs, // GraphQL arguments type for Query.delegates
  type QueryDelegationEventArgs, // GraphQL arguments type for Query.delegationEvent
  type QueryDelegationEventsArgs, // GraphQL arguments type for Query.delegationEvents
  type QueryDynamicQuorumParamsArgs, // GraphQL arguments type for Query.dynamicQuorumParams
  type QueryDynamicQuorumParamsCollectionArgs, // GraphQL arguments type for Query.dynamicQuorumParamsCollection
  type QueryGovernanceArgs, // GraphQL arguments type for Query.governance
  type QueryGovernancesArgs, // GraphQL arguments type for Query.governances
  type QueryMetaArgs, // GraphQL arguments type for Query.meta
  type QueryNounArgs, // GraphQL arguments type for Query.noun
  type QueryNounsArgs, // GraphQL arguments type for Query.nouns
  type QueryProposalArgs, // GraphQL arguments type for Query.proposal
  type QueryProposalCandidateArgs, // GraphQL arguments type for Query.proposalCandidate
  type QueryProposalCandidateContentArgs, // GraphQL arguments type for Query.proposalCandidateContent
  type QueryProposalCandidateContentsArgs, // GraphQL arguments type for Query.proposalCandidateContents
  type QueryProposalCandidatesArgs, // GraphQL arguments type for Query.proposalCandidates
  type QueryProposalCandidateVersionArgs, // GraphQL arguments type for Query.proposalCandidateVersion
  type QueryProposalCandidateVersionsArgs, // GraphQL arguments type for Query.proposalCandidateVersions
  type QueryProposalFeedbackArgs, // GraphQL arguments type for Query.proposalFeedback
  type QueryProposalFeedbacksArgs, // GraphQL arguments type for Query.proposalFeedbacks
  type QueryProposalsArgs, // GraphQL arguments type for Query.proposals
  type QueryProposalVersionArgs, // GraphQL arguments type for Query.proposalVersion
  type QueryProposalVersionsArgs, // GraphQL arguments type for Query.proposalVersions
  type QuerySeedArgs, // GraphQL arguments type for Query.seed
  type QuerySeedsArgs, // GraphQL arguments type for Query.seeds
  type QueryTransferEventArgs, // GraphQL arguments type for Query.transferEvent
  type QueryTransferEventsArgs, // GraphQL arguments type for Query.transferEvents
  type QueryVoteArgs, // GraphQL arguments type for Query.vote
  type QueryVotesArgs, // GraphQL arguments type for Query.votes
  type Scalars, // GraphQL scalar type mappings
  type Sdk, // GraphQL SDK type alias
  type SdkFunctionWrapper, // GraphQL SDK wrapper callback signature
  type Seed, // GraphQL object type for Seed entity
  type SeedFilter, // GraphQL filter input for Seed entity
  SeedOrderBy, // GraphQL enum for ordering Seed results
  SubgraphErrorPolicy, // GraphQL enum for subgraph error handling
  type TransferEvent, // GraphQL object type for Transfer Event entity
  type TransferEventFilter, // GraphQL filter input for Transfer Event entity
  TransferEventOrderBy, // GraphQL enum for ordering Transfer Event results
  type Vote, // GraphQL object type for Vote entity
  type VoteFilter, // GraphQL filter input for Vote entity
  type VoteNounsArgs, // GraphQL arguments type for Vote.nouns
  VoteOrderBy, // GraphQL enum for ordering Vote results
} from './lilnouns.gen'
