# Hydro-chain

## By Team Black-Stallions

A Blockchain and IOT based system to decentralize the conventional water consumption analysis and billing process.

## Requirements

Node JS - [node](https://nodejs.org/en/download/)

An Ethereum wallet like [Metamask](https://metamask.io/) in your browser and set a custom RPC to https://rpc-mumbai.matic.today .

### Clone the repo

```
$ git clone https://github.com/UltimateRoman/Hydro-chain
$ cd Hydro-chain/'Hydro-chain DApp'
```

### Install dependencies

```
$ npm install -g truffle
$ npm install
```

### Run the Hydro-chain DApp

```
$ truffle migrate --network matic
$ npm run start
```

### Hydro-chain Layout
<br/>

![Hydro-chain diagram](1.jpg?raw=true)

<br/>

Initially the user logs into Hydro chain web app where he can see his water consumption rate. An IoT-based water consumption analysis device allows for complete insight and control over this procedure. The device sensors can dynamically record the water usage data on to the blockchain.It can also identify unusual water consumption trends by comparison with previous tamper-proof records and can help to immediately identify leaks in the household plumbing network.Our IoT module uses a ultrasonic sensor to calculate the water consumption and sends this data to Hydro-Chain web app.  After this he/she can pay the water bill in crypto using blockchain. Payment are then done directly to the Water Authority, powered by Matic's instant transactions. This ensures credible bill payments, avoiding intermediaries.The collaboration between Blockchain and IoT thus provides a secure, transparent and efficient mechanism. 


