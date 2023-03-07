# Offside Toolkit

This repository is a monorepo manage with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://lerna.js.org/).

## Packages

- [offside-uikit](https://github.com/offsideswap/offside-toolkit/tree/master/packages/offside-uikit) : React components used to build the Offside UI.
**Moved to [offside-frontend](https://github.com/offsideswap/offside-frontend)**
- [eslint-config-offside](https://github.com/offsideswap/offside-toolkit/tree/master/packages/eslint-config-offside) : An ESLint config for offside, with Typescript and Prettier support. **Moved to [offside-frontend](https://github.com/offsideswap/offside-frontend)**
- [offside-profile-sdk](https://github.com/offsideswap/offside-toolkit/tree/master/packages/offside-profile-sdk) : Handy functions to retrieve data for Offsideswap Profile system
- [token-lists](https://github.com/offsideswap/offside-toolkit/tree/master/packages/token-lists) : Main OffsideSwap token list and tools to validate it. **Moved to [token-list](https://github.com/offsideswap/token-list)**

## How to use

Clone the repository

```
git clone git@github.com:offsideswap/offside-toolkit.git
```

Run yarn at the root of the workspace

```
cd offside-toolkit
yarn
```

Then, refer to the readme of each project.
