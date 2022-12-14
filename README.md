# Implement an ERC20 zk airdrop in 20 minutes with Polygon ID

Tutorial: https://0xpolygonid.github.io/tutorials/verifier/on-chain-verification/overview/

This tutorial uses [Hardhat](https://hardhat.org/) as a development environment and Polygon Mumbai testnet as the network.

## Polygon ID Wallet setup

1. Download the Polygon ID mobile app on the [Google Play](https://play.google.com/store/apps/details?id=com.polygonid.wallet) or [Apple app store](https://apps.apple.com/us/app/polygon-id/id1629870183)

2. Open the app and set a pin for security

3. Follow the [Issue a Polygon ID claim](https://youtu.be/VClUFjs8lh8) YT video to issue yourself a Proof Of Personhood attesting if you are a VerifiedPerson or not.


## Instructions to compile and deploy the smart contract

1. Create a .env file in the root of this repo. Copy in .env.sample to add keys
    `touch .env`

2. Install dependencies
    `npm i`

3. Compile smart contracts
    `npx hardhat compile`

4. Deploy smart contracts
    `npx hardhat run --network mumbai scripts/deploy.js`
 - results in x contract address: 0xDa486713DfFf7F4244465E34C1786FFbe6d85604
 - example contract creation: https://mumbai.polygonscan.com/address/0xDa486713DfFf7F4244465E34C1786FFbe6d85604

5. Update the `ERC20VerifierAddress` variable in scripts/set-request.js with your deployed contract address

6. Run set-request to send the zk request to the smart contract
    `npx hardhat run --network mumbai scripts/set-request.js`
    - Successful tx means the query has been set up: https://mumbai.polygonscan.com/tx/0x0aa557b705960e2bee1f17077389eddde168011bafc8e7cc3dd31ce6f1677f19


## Claim airdrop from a frontend

1. Design a proof request (see my example in qrValueProofRequestExample.json) and more info in the docs: [Query Based Requests](https://0xpolygonid.github.io/tutorials/wallet/proof-generation/types-of-auth-requests-and-proofs/#query-based-request)
    - Update the `contract_address` field to your deployed contract address

2. Create a frontend with a QR code to the proof request. [Codesandbox example](https://codesandbox.io/s/frontend-claim-an-erc20-zk-airdrop-on-polygon-mumbai-forked-n5mhds?file=/index.js) A user should be able to scan the QR code from the Polygon ID app and trustlessly prove that they a person to claim the ERC20 airdrop without revealing their actual personhood. 