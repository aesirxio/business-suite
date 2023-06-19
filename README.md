# AesirX Business Suite

## About

AesirX Business Suiteis our Open-Source for all solutions

## Development setup

1. This project is using Monorepos with git submodule. You need to run `git submodule update --init --recursive` then cloned the project.
2. Run `yarn install` to install the dependencies.
3. Run `yarn prepage` to build the dependencies.
2. Rename the `.env.dist` file to `.env` on `packages/business-suite` folder.
3. Replace license keys in the `.env` file with the one provided in your profile account.
   1. `REACT_APP_SSO_CLIENT_ID` replace this with the provided `REACT_APP_SSO_CLIENT_ID` from https://dapp.web3id.aesirx.io
   2. `REACT_APP_SSO_CLIENT_SECRET` replace this with the provided `REACT_APP_SSO_CLIENT_SECRET` from https://dapp.web3id.aesirx.io
   3. `PORT` change the port. Default is 3000

5. Run  `yarn dev`
6. Open [http://localhost:3000](http://localhost:3000) - 3000 is `PORT` to view it in the browser.

## Production

Run on a webserver:
1. Run `yarn build` after changed `.env` file.
2. Upload `packages/business-suite/build` folder to webserver.

