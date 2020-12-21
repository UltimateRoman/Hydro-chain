# Hydro-chain

## By Team Black-Stallions

![poster](poster.png?raw=true)

A Blockchain and IOT based system to decentralize the conventional water consumption analysis and billing process.

## Hydro-chain Layout

<br/>

   Hydro-chain essentially consists of an IOT based water consumption meter and a decentralized application, deployed on Matic Testnet. The IOT water meter dynamically determines the water usage and these records are stored on the blockchain. The device allows for complete insight and control over the consumption analysis process. It can also identify unusual water consumption trends by comparison with previous tamper-proof records and can help to immediately identify leaks in the household plumbing network. An ESP8266 WiFi module is used for the meter and though we had originally intended to use a rate-flow meter or a Hall effect sensor for the purpose, we had to make do with a proximity sensor due to lack of appropriate hardware at hand.

![Hydro-chain diagram](Hydro-chain_Layout.png?raw=true)

<br/>
   
   Users can then login to the Hydro-chain decentralized application to view their consumption records. The bill is also calculated accordingly and this can be paid in crypto to the respective Water Authority, powered by Matic's instant transactions. This ensures credible bill payments, avoiding intermediaries.The collaboration between Blockchain and IoT thus provides a secure, transparent and efficient mechanism to decentralize water bills. 


## Requirements

Node JS - [node](https://nodejs.org/en/download/)

An Ethereum wallet like [Metamask](https://metamask.io/) in your browser and set a custom RPC to https://rpc-mumbai.matic.today .

### Clone the repo

```
$ git clone https://github.com/UltimateRoman/Hydro-chain
$ cd Hydro-chain/Hydro-chain-DApp
```

### Install dependencies

```
$ npm install -g truffle
$ npm install
```

- Add the Admin(Water Authority) account address in the [smart-contract](Hydro-chain-DApp/src/contracts/Hydrochain.sol) .

- Add the deployer account seedphrase in [secret](Hydro-chain-DApp/.secret) file.


### Run the Hydro-chain DApp

```
$ truffle migrate --network matic
$ npm run start
```

Enjoy the Hydro-chain experience!
