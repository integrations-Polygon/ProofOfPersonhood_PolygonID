import React from "react"
import { render } from "react-dom"
import { QRCode } from "react-qr-svg"

const styles = {
  root: {
    color: "#2C1752",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  title: {
    color: "#7B3FE4",
  },
}

// update with your contract address
const deployedContractAddress = "0xDa486713DfFf7F4244465E34C1786FFbe6d85604"

const qrProofRequestJson = {
  id: "c811849d-6bfb-4d85-936e-3d9759c7f105",
  typ: "application/iden3comm-plain-json",
  type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
  body: {
    transaction_data: {
      contract_address: deployedContractAddress,
      method_id: "b68967e2",
      chain_id: 80001,
      network: "polygon-mumbai",
    },
    reason: "airdrop participation",
    scope: [
      {
        id: 1,
        circuit_id: "credentialAtomicQuerySig",
        rules: {
          query: {
            allowed_issuers: ["*"],
            req: {
              VerifiedPerson: {
                $eq: 1,
              },
            },
            schema: {
              url: "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/9fe70c03-ea4a-432c-a64d-ee8783549713.json-ld",
              type: "ProofOfPersonhood",
            },
          },
        },
      },
    ],
  },
}

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={styles.root}>
        <h2 style={styles.title}>
          Claim an ERC20 zk airdrop on Polygon Mumbai
        </h2>
        <p>
          Personhood verification: You must prove that you are a person to
          claim.
        </p>
        <p>
          Complete personhood verification by issuing yourself a Polygon ID
          claim via{" "}
          <a
            href="https://polygontechnology.notion.site/Issue-yourself-a-KYC-Age-Credential-claim-a06a6fe048c34115a3d22d7d1ea315ea"
            target="_blank"
          >
            Proof Of Personhood
          </a>{" "}
          then scan QR code within Polygon ID app to claim tokens
        </p>

        <div>
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify(qrProofRequestJson)}
          />
        </div>
        <br />
        <p>
          Github:{" "}
          <a
            href="https://github.com/integrations-Polygon/ProofOfPersonhood_PolygonID"
            target="_blank"
          >
            On-chain verification tutorial
          </a>
        </p>
        <p>
          Polygonscan:{" "}
          <a
            href={`https://mumbai.polygonscan.com/token/${deployedContractAddress}`}
            target="_blank"
          >
            Token ERC20zkAirdrop
          </a>
        </p>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"))
