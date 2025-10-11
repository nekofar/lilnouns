# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0-alpha.29] - 2025-10-11

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.28] - 2025-10-09

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.26] - 2025-10-07

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

### ⚙️ Miscellaneous Tasks

- *(subgraphs)* Update generated subgraph types

## [1.0.0-alpha.25] - 2025-10-03

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.24] - 2025-10-02

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.23] - 2025-09-22

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.22] - 2025-09-19

### 🚀 Features

- *(config)* Add LilNounsEnsMapper to wagmi config
- *(contracts)* Add LilNounsEnsMapper actions and config
- *(contracts)* Add comprehensive LilNounsEnsMapper exports

## [1.0.0-alpha.21] - 2025-09-19

### 🚀 Features

- *(contracts)* Add LilNounsAuction and LilNounsData
- *(contracts)* Consolidate and expand LilNouns utilities
- *(config)* Validate subgraph URL and update schema generation
- *(subgraphs)* Add generated types for LilNouns
- *(subgraphs)* Standardize exports for LilNouns utilities

### 🚜 Refactor

- *(config)* Split wagmi config output

### 🎨 Styling

- *(subgraphs)* Remove redundant line breaks in exports

## [1.0.0-alpha.20] - 2025-09-17

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.19] - 2025-09-17

### ⚙️ Miscellaneous Tasks

- *(build)* Simplify pnpm caching in workflows
- *(package)* Specify minimum Node.js version

## [1.0.0-alpha.18] - 2025-09-17

### 💼 Other

- *(pnpm)* Remove `pnpm-workspace.yaml`

### ⚙️ Miscellaneous Tasks

- *(gitignore)* Remove `pnpm-lock.yaml` from ignored files

## [1.0.0-alpha.17] - 2025-09-10

### 💼 Other

- *(pnpm)* Remove `onlyBuiltDependencies` from `pnpm-workspace.yaml`

## [1.0.0-alpha.16] - 2025-09-08

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.15] - 2025-09-02

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.14] - 2025-08-15

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.13] - 2025-07-22

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.12] - 2025-07-22

### ⚙️ Miscellaneous Tasks

- *(scripts)* Update commands to use `biome` for formatting and linting
- *(config)* Add `biome` configuration file
- *(style)* Replace semicolons with new code style conventions
- *(config)* Add `typedoc` configuration
- *(scripts)* Add `docs` script for generating documentation
- *(config)* Update `typedoc` configuration
- *(config)* Update `typedoc` configuration
- *(gitignore)* Update ignored documentation files
- *(config)* Update `biome` configuration
- *(scripts)* Add `postbuild` script to run format
- *(build)* Add pnpm workspace config
- *(scripts)* Fix typo in `postbuild` script

## [1.0.0-alpha.11] - 2025-07-03

### 🚀 Features

- *(subgraphs)* Add `CandidateFeedback` and `ProposalCandidate`
- *(contracts)* Enhance `lilNounsDataAbi` with new errors and events

## [1.0.0-alpha.10] - 2025-05-17

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.9] - 2025-05-10

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.8] - 2025-04-25

### 🧪 Testing

- *(index)* Add unit tests for `version`

### ⚙️ Miscellaneous Tasks

- *(build)* Exclude test files from build entry

## [1.0.0-alpha.7] - 2025-04-24

### 💼 Other

- *(tsup)* Simplify and enhance build configuration

### ⚙️ Miscellaneous Tasks

- *(tsconfig)* Enable `emitDeclarationOnly` option
- *(build)* Increase memory allocation in `build` script

## [1.0.0-alpha.6] - 2025-04-15

### 🚀 Features

- *(subgraphs)* Add `ProposalFeedback` entity and queries

## [1.0.0-alpha.5] - 2025-04-15

### 🚀 Features

- *(config)* Add `LilNounsData` contract addresses
- *(contracts)* Add support for `LilNounsData` contract

## [1.0.0-alpha.4] - 2025-04-12

### 🚀 Features

- *(exports)* Add type exports for module resolution

### 🚜 Refactor

- *(contracts)* Streamline subgraph and contract types

### ⚙️ Miscellaneous Tasks

- *(tsup)* Update `dts` configuration for build

## [1.0.0-alpha.3] - 2025-04-02

### ⚙️ Miscellaneous Tasks

- *(workflows)* Remove `guard` job from build workflow

## [1.0.0-alpha.2] - 2025-04-01

### ⚙️ Miscellaneous Tasks

- *(ci)* Add GitHub issue templates
- *(workflows)* Add build, test, and release pipeline
- *(git-flow)* Add Git Flow workflow for branch PR creation
- *(dependabot)* Add configuration for dependency updates
- *(ci)* Add funding configuration
- *(stale)* Add GitHub Actions config for stale issues
- *(build)* Add env vars for `SUBGRAPH_URL` and `ETHERSCAN_API_KEY`
- *(package)* Update metadata in `package.json`
- *(package)* Update metadata fields in `package.json`

## [1.0.0-alpha.1] - 2025-04-01

### 🚀 Features

- *(contracts)* Add LilNouns contract abstractions
- *(wagmi)* Add wagmi config with etherscan integration
- *(tsup)* Add entry point for `contracts`
- *(contracts)* Add new utility methods for LilNouns

### 🐛 Bug Fixes

- *(tsup)* Disable `splitting` in the build config

### 📚 Documentation

- *(readme)* Add project overview and badges

### ⚙️ Miscellaneous Tasks

- *(scripts)* Update build scripts for improved code generation

## [1.0.0-alpha.0] - 2025-04-01

### 🚀 Features

- *(index)* Add initial implementation
- *(subgraphs)* Add schema types and resolvers for GraphQL
- *(index)* Export `version` from package.json
- *(build)* Enhance build configuration with splitting

### ⚙️ Miscellaneous Tasks

- Add `.gitignore` for project-wide exclusions
- *(package)* Set `private` to false
- Add `.editorconfig` to standardize code formatting
- *(build)* Add `tsconfig.json` for TypeScript configuration
- *(build)* Add `tsup` config for bundling
- Add Apache 2.0 license
- *(scripts)* Add build, format, lint, and clean commands
- *(scripts)* Update build and cleanup scripts
- *(tsconfig)* Enable `resolveJsonModule` in config

<!-- generated by git-cliff -->
