# Minima-tutorials
A series of Minima blockchain tutorials, from basic to complex

- **Tutorial 1: Understand UTXO model**
  - This tutorial will show you how the UTXO model works on minima, you will be able to create a wallet address and send minima coins between two nodes on their wallet addresses using terminal minima command line console.
  - It can be done using one computer running two nodes, two different comupters running one node each one or two mobiles.
  - You need 1 minima to do the tutorial, so ask someone to send 1 minima to you on the channel minima discord channel "#app-chat", to your wallet address.
  - <https://github.com/elledaniels/Minima-tutorials/blob/main/tutorials/basic/1-UTXO-create-send-Tutorial.md>

- **Tutorial 2: Send Tokens**
  - This tutorial will show you how to send tokens, you will be able to locate the _tokenid_  ,needed to send tokens between two nodes on their wallet addresses using terminal minima command line console.
  - It can be done using one computer running two nodes, two different comupters running one node each one or two mobiles.
  - You need some tokens to do the tutorial, so ask someone to send some tokens to you on the channel minima discord channel "#app-chat", to your wallet address.
  - <https://github.com/elledaniels/Minima-tutorials/blob/main/tutorials/basic/2-Send-Tokens-Tutorial.md>

- **Tutorial 3: Create Token  part 1**
  - This is the first part of two on how to use minima terminal commands to teach and explain how to create Tokens using minima coins, and also the first part to introduce what transaction are and how to check and understand the console output response to the create token command.
  - <https://github.com/elledaniels/Minima-tutorials/blob/main/tutorials/basic/3-Create_token-tutorial-1.md>

- **Tutorial 4: Create Token  part 2**
  - This is the second part on how to use **tokencreate** minima terminal command to teach and explain how to create Tokens using minima coins, but using extra parameters to add more info to the Token using the JSON structure to give more info than a simple name.
  - We are going to create 1 token that will represent power token in a very simple game, a game made with **GODOT engine** that will react when the node where the game is running receive one of those power tokens in the wallet address of the node, making the game react and changing the color and the size of the player with the properties of the token's power received.
  - We will use a new terminal command: **coins relevant:true**
  - we will use a new termimal command on a mobile devices: **rpc enable:true**
  - We will user transactions but not directly to avoid UTXO "problems" that we saw on the tutorial-1.
  - The app-game we are going to use has:
    - **A Game** where we will see how to change the player's color and size when a token it is send to the minima node, where a player can collect gems, the game steals you a 0.01 minima or 0.1 minima depending on the collected gem.
    - **A Terminal** like minima terminal where you can execute any minima command like(tokencreate) and copy the results of the execution of the commands.
    - **A Splitter** function that will split 1 minima into small units of 0.1 or 0.01 units with only one transaction to avoid UTXO "problems", as every time you collect a gem a terminal send command is executed with an amount of 0.1 or 0.01 minimas.
  - <https://github.com/elledaniels/Minima-tutorials/blob/main/tutorials/basic/4-Create_token-tutorial-2.md>

- **Tutorial 5: Create Simple DAO**
  - This is the first part of several where we try to build a simpleDAO (People with a governance token) will have the power to vote a proposal (First part will be a fixed proposal).
  - We will use Tokens, smart contracts, some html, javascript or GODOT prefixed environment to test it.
    - **--------->  UNDER CONSTRUCTION  <-------------**
{}
- by @JOSUA
