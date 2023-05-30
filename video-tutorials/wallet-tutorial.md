# YouTube - Wallet MiniDapp

[Youtube - Wallet Walkthrough](https://www.youtube.com/watch?v=jZELfpCYbtg&list=PLut-fF0yR_xWr3sKmPL14GQwNzzJW4b16&index=2)

## Prerequisites

- [Node js](https://nodejs.org/en)
- [Java Development kit](https://www.oracle.com/java/technologies/downloads/)
- [A genesis Minima Node running locally](https://docs.minima.global/docs/runanode/get_started)
- Wallet MiniDapp v2.0.19
    
    [wallet-2.19.0.mds.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d628c49-9671-49eb-9585-9feb0781eaa4/wallet-2.19.0.mds.zip)
  
## Introduction

Wallet is a MiniDapp, a Minima Decentralized Application. Its main features are to allow you:

- to view the balance of your Minima token
- create custom tokens and NFTs
- send coins and split your coins into more coins
- view and validate your node’s wallet address

## Useful CLI Commands

- Run a private Minima Jar

`java -jar minima.jar -mdsenable -rpcenable -mdspassword 123 -nop2p -genesis`

- Create a new react project

`npx create-react-app app_name --template typescript`

- dapp.conf example

```jsx
{ "name": "Wallet", "icon": "favicon.ico", "version": "2.19.0", "description": "Exchange tokens with Minimalists", "browser": "internal" }
```

### Useful Resources

- [Latest & Greatest minima jar](https://github.com/minima-global/Minima/tree/master/jar)
- [MDS.js](https://github.com/minima-global/Minima/blob/master/mds/mds.js)
- [React Redux](https://react-redux.js.org/)
- [React](https://react.dev/)
- [Minima’s Official docs](https://docs.minima.global/)
