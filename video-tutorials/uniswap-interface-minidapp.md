## YouTube - Uniswap Decentralized MiniDapp

Youtube URL :

### Prerequisites

●	[Node js](https://nodejs.org/en)

●	[Java Development kit](https://www.oracle.com/java/technologies/downloads/)

●	[A Minima Node running locally](https://docs.minima.global/docs/runanode/selectplatform/manualnode)

### Introduction

This tutorial walks through how to host a decentralized applications front-end website, so that you do not have to trust a centralized authority to connect to the application. 

In this example we use Uniswap.org:

### Useful CLI Commands

####	1. Run the Minima Jar

Download the latest & greatest minima jar: https://github.com/minima-global/Minima/raw/master/jar/minima.jar

Startup command ([mainnet](https://docs.minima.global/docs/runanode/selectplatform/manualnode)) : 
```
java -jar minima.jar -mdsenable -data minidata -basefolder minidata
```

OR Startup command ([private test node](https://docs.minima.global/docs/buildonminima/startaprivatenode) : 

```
java -jar minima.jar -mdsenable -data minidata -basefolder minidata -genesis -nop2p -rpcenable
```

Once running, run the `mds` command in the Minima Terminal to get your password, then access your MiniDapp system via https://127.0.0.1:9003 and login

####	2. Clone the Uniswap project
```
git clone https://github.com/Uniswap/interface
```

### 4. Build Uniswap MiniDapp

Before you can upload the interface MiniDapp to Minima, make sure to run the following commands, and have yarn and nodejs v14 installed on your machine:

#### - Install yarn
```
npm install --global yarn
```

#### - Build the Uniswap interface

```
yarn
yarn build
```

#### - Create the dapp.conf file 

Inside the Uniswap build folder, create the MiniDapp configuration file - dapp.conf

Example:
```
{ "name": "UniswapV3", "icon": "favicon.png", "version": "1.0-test", "description": "Uniwap Frontend Minidapp", "browser": "internal" }
```

Open the build folder and zip the contents using winzip or similar.

### 5. Install the MiniDapp on your Minima node

Go to your MiniDapp hub https://127.0.0.1:9003 (make sure your Minima node is running, and you have typed the `mds` command to get your MiniDapp hub password.)

Install the zipped folder into your MiniDapp hub and open the MiniDapp to use Uniswap's interface without relying on a centralised server!

## Useful Resources

●	[mds.js](https://github.com/minima-global/Minima/blob/master/mds/mds.js)

●	[Minima’s Official docs](https://docs.minima.global/)

