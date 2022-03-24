------------------------------------------------------------
### **Tutorial 4**: Learning how to create Tokens part 2, before, **you will need 2 minimas**
#### The important part of this tutorial is to open your mind to realise how powerful tokens can be and diffent ways to use and apply on several use cases.

#### Another important part of this tutorial is to realise that when you execute **balance** command, what terminal prompts is the sum of all your minimas that you have on the several addresses of your node and a list of tokens that your node has with some properties prompt, to see that a **balance** shows the sum of all your minimas we are going to use the commmand **coins relevant:true** that will show you every wallet address of your node that has minimas or tokens and their quantity on every address and this is important part when you use the **splitter** function of the app-game provided.
-----------------------------------------------------------
-1: **Download** the app-game:
  - **Linux version**: <https://mega.nz/file/svZGGRIL#e2qixE5EEZa_wSqqqOcnFuwpXiYM4SlGY9oNW5tJttY>
  - **Windows version**: <https://mega.nz/file/pu4DVYrD#OrgdxLsvzjrHpq7VDAmiMstp38z6sHu1D7pe0veqn2s>
  - **Android version** (not playable): <https://mega.nz/file/h6xgRaIb#KONVzl7Q05zpuVBS1fFqji7YyZ2bnfQwIRlOxpDYn50>
  The android version is not playable as it doesn't have pads to move the player and it is only to show that if your node receive a power token, the player will change accordingly to what the token properties are.
- Note: If you download the mobile version, you first need to run this command on the minima terminal, otherwise the app-game it won't work, execute command: ` rpc enable:true ` this command it lets your node to receive commands at port 9002, so if you know your wifi IP you could send the commands via webpage also.

-2: **Execute** the app-game and click **New Game** but don't play the game yet, just watch the color and the size of the player, becouse if you only have the two minimas required then you can have problems following the tutorial on the next steps, now quit the game but not from the app.
  - Option 1: create the power token using the terminal provided in the app, if you are on a mobile this terminal it will let you copy values as in the minima terminal it dosen't work.
  - Option 2: create the power token using the usual way you send commands to your minima node.

-3: **Create the power token** executing the following command: ` tokencreate name:{"name":"POWER_1","color":"#FF0000","size":2} amount:1 decimals:0 `
  - We are only interested in 1(amount) token and 0 (decimals)
  - If you look at the help about "tokencreate" it finished with "name can be a JSON Object"
  - What is a JSON Object ?
    - A JSON Object is a structure that let you define "things" with a set of properties and values separated them by ` : `
    - A JSON Object must start and end with ` {} `
    - Every property defined must have a value and the every ` property:value ` group must be separated by ` , `
    - So, in our example we have **three properties** defined on the Token we created.
      - The **name** the requirement in the game is that it needs to begin with "POWER_" and whatever you wants, the game only checks for that requirement.
      - The **color** it must be a valid RGB color and will be the player color, the one provided is RED color, here there is a link where you can find RGB color values to experiment: <https://www.rapidtables.com/web/color/RGB_Color.html>
      - The **size** is the size/scale of the player and the values should be between 0.2 and less than 3, values under 1 makes the player smaller and values over 1 makes the player bigger.The values are not checked so if you introduce other values will produce unexpected results that could be solved simply sending away the token you created to another node or create a new token (Theoretically the new token received/created should be taken than the older, but is not checked, it is the order on how "balance" command prompts the results )
    - There is no socket listener for events on the actual minima version as it was deleted from the previous one, so the balance is checked every 30 seconds, so when you receive/create a token, you will have to wait a time for the transaction to be publish thru the network and the changes to be reflected on the player will not be instant due to those explained reasons.
    - **Once the token is created** just go to the game, without playing yet, and observe how the player change when the token is received, you could check your "balance" and you will see the token received and remember that it can take a few minutes to receive/create the token and be publish to the network.
    - Executing command: ` balance ` to show the info of the token created, you should see something like that:
```
  {
    "token":{
      "name":"POWER_1",
      "color":"#FF0000",
      "size":2
    },
    "tokenid":"0xC18122B724055D1BF76CBDD6F862F1E2FACD13C02F39A9ABE5D5A330987AF594",
    "confirmed":"0",
    "unconfirmed":"1",
    "sendable":"0",
    "total":1
  },
```
-4: **SPLITTER function** make the game play be smooth without UTXO problems.
  - So as we already talked and verified how UTXO system works on the Tutorial 1, and the "problems" that can cause if you want to send minimas or tokens before your receive the change back, we made a splitter function in order the game can be played smoothly without worrying about UTXO.
  - What does **Splitter** function do?
    - The splitter function uses transactions commands to split an amount of minimas in less minimal units, so lets give you an easy example: suppose somebody send you 100 minimas in whole single unit, but you want those 100 minimas in 4 separated units of 25 minimas each one,
    if you should have to do it manually you should have to send yourself 25 minimas, wait for the send(uses transactions internally) command is done and your change is back(75) to yourself, and this 4 times more, so that is what splitter function does but with only one transaction.

  - Lets going to define the fields and their meaning of the Splitter function, some of they are very important, **and you need to be carefully and pay attention on what you do !!**.
  The Splitter function uses transactions internally, that means that the change back have to be managed by yourself instead of when you use "send" command, it does all this automatically for you.
   - **Coind ID** this field identify which coin of all you coins you have (minimal unit) are you going to use to split in smaller units.
   How can we know the minimal units of coins we have as the command "balance" only shows the sum of them?
    - The solution, a new minima command: ` coins relevant:true ` , a minima node keeps track of all coins, tokens or scripts related to your node, so this command shows precisely that, all coins you have and their wallet addresses and more info, but we are only interested in four fields **("coinid, amount,tokenid and address")**, in our case, the goal is to split 1 minima into smaller units, so we need to focus on find a coinid which amount is 1 or bigger and his tokenid is 0x00(means is a Minima token).
    So after executing the command if we look for the output we can find something like the following output, we are going to choose the second one as the first one only have "0.33" minimas and we need more, so the second one has "91.815999" minimas.
    So thats it, we need the **coinid** and the **amount**(It will be used to calculate the change back internally) and the **address** (Later will be the origin field)
    **coinid: 0x59AE319984F247716E7D10F4AD981D95BEECC7BE536667F9B2BE7B3E8DA583C4**
```
    coins relevant:true
    {
      "command":"coins",
      "params":{
        "relevant":"true"
      },
      "status":true,
      "response":[{
        "coinid":"0x9E10E5023CC9ED66B7B712CA0943EF6928035CDD5A13DAE643396F30D9275BFD",
        "amount":"0.33999999999999999999999999999999999999999999",
        "address":"0xE84F3B42F468C93106DAEDAAA9D0E733DD2A6225EE81D448931F227D1C06976B",
        "tokenid":"0x00",
        "token":null,
        "floating":false,
        "storestate":false,
        "state":[],
        "mmrentry":"734",
        "spent":false,
        "created":"203729"
      },
      {
        "coinid":"0x59AE319984F247716E7D10F4AD981D95BEECC7BE536667F9B2BE7B3E8DA583C4", <---------------
        "amount":"91.815999",                      <------------------
        "address":"0xE278554F3843D7DD8CDD8AA5E9556C0DC2D7B07C37A8403CE0AFDDE56E8A5EFC", <--------- Origin
        "tokenid":"0x00",                          <------------------
        "token":null,
        "floating":false,
        "storestate":false,
        "state":[],
        "mmrentry":"728",
        "spent":false,
        "created":"203728"
      },
```

   - **Coin Amount** as we talk before it it is about to the amount of minimas we have on the coind we are going to use for split into smaller units so we choose **Coin Amount:91.815999** (note, only choose 8 decimals max)

   - **Minimal Unit** this field is the smaller unit that we are going to use to split the 1 minima into, the only values allowed are 0.1 and 0.01 other values than that will not trigger the function, as the game only use **0.1** and **0.01** units for sending minimas when a gemm is collected.

   - **Receiver** this field is the wallet address who will receive the small units of 1 minima, it can be your own node if you have the game installed on it or it has to be the node where the game is installed.
   - **Origin** this field is the wallet address where the Minimas to split are located, explained on the first field **Coin ID**
   **origin: 0xE278554F3843D7DD8CDD8AA5E9556C0DC2D7B07C37A8403CE0AFDDE56E8A5EFC**
   - So now that all parameters are set press **RUN** and if everything is right you should see a very long results like this :
```
   [ {
"command": "txncreate",
"params": {
"id": "303657912"
},
"response": {
"id": "303657912",
"transaction": {
"inputs": [  ],
"linkhash": "0x00",
"outputs": [  ],
"state": [  ],
"transactionid": "0x00"
},
"witness": {
"mmrproofs": [  ],
"scripts": [  ],
"signatures": [  ]
}
},
"status": true
}, {
"command": "txninput",
"params": {
"coinid": "0x0A54066F3B7B3E18E09D63A00E4E7FBF4C0350E6E8FCF6EFBB5823518FC91DE9",
"id": "303657912"
},
"response": {
"id": "303657912",
"transaction": {
"inputs": [ {
"address": "0xF9039E7221240901EF5232A65CFBFD87995FC1E329559E7E5668BCA4DC743864",
"amount": "87.393999",
"coinid": "0x0A54066F3B7B3E18E09D63A00E4E7FBF4C0350E6E8FCF6EFBB5823518FC91DE9",
"created": "203728",
"floating": false,
"mmrentry": "730",
"spent": false,
"state": [  ],
"storestate": false,
"token": null,
"tokenid": "0x00"
} ],
"linkhash": "0x00",
"outputs": [  ],
"state": [  ],
"transactionid": "0x00"
},
"witness": {
"mmrproofs": [  ],
"scripts": [  ],
"signatures": [  ]
}
},
"status": true
}, {
"command": "txnoutput",
"params": {
"address": "0x5EC92829DC40F6FECBAEA1DC8530AD480CCF6A97959082F3400C281A4B2A0668",
"amount": "0.1",
"id": "303657912"
},
"response": {
"id": "303657912",
"transaction": {
"inputs": [ {
"address": "0xF9039E7221240901EF5232A65CFBFD87995FC1E329559E7E5668BCA4DC743864",
"amount": "87.393999",
"coinid": "0x0A54066F3B7B3E18E09D63A00E4E7FBF4C0350E6E8FCF6EFBB5823518FC91DE9",
"created": "203728",
"floating": false,
"mmrentry": "730",
"spent": false,
"state": [  ],
"storestate": false,
"token": null,
"tokenid": "0x00"
} ],
"linkhash": "0x00",
"outputs": [ {
"address": "0x5EC92829DC40F6FECBAEA1DC8530AD480CCF6A97959082F3400C281A4B2A0668",
"amount": "0.1",
"coinid": "0x00",
"created": "0",
"floating": false,
"mmrentry": "0",
"spent": false,
"state": [  ],
"storestate": true,
"token": null,
"tokenid": "0x00"
} ],
"state": [  ],
"transactionid": "0x00"
},
"witness": {
"mmrproofs": [  ],
"scripts": [  ],
"signatures": [  ]
}
},
"status": true
}, {
"command": "txnoutput",
"params": {
"address": "0x5EC92829DC40F6FECBAEA1DC8530AD480CCF6A97959082F3400C281A4B2A0668",
"amount": "0.1",
"id": "303657912"
},
"response": {
"id": "303657912",
"transaction": {
"inputs": [ {
"address": "0xF9039E7221240901EF5232A65CFBFD87995FC1E329559E7E5668BCA4DC743864",
"amount": "87.393999",
"coinid": "0x0A54066F3B7B3E18E09D63A00E4E7FBF4C0350E6E8FCF6EFBB5823518FC91DE9",
"created": "203728",
"floating": false,
"mmrentry": "730",
"spent": false,
"state": [  ],
"storestate": false,
"token": null,
"tokenid": "0x00"
} ],
"linkhash": "0x00",
"outputs": [ {
"address": "0x5EC92829DC40F6FECBAEA1DC8530AD480CCF6A97959082F3400C281A4B2A0668",
"amount": "0.1",
"coinid": "0x00",
"created": "0",
"floating": false,
"mmrentry": "0",
"spent": false,
"state": [  ],
"storestate": true,
"token": null,
"tokenid": "0x00"
}, {
"address": "0x5EC92829DC40F6FECBAEA1DC8530AD480CCF6A97959082F3400C281A4B2A0668",
"amount": "0.1",
"coinid": "0x00",
"created": "0",
"floating": false,
"mmrentry": "0",
"spent": false,
"state": [  ],
"storestate": true,
"token": null,
"tokenid": "0x00"
} ],
"state": [  ],
"transactionid": "0x00"
},
"witness": {
"mmrproofs": [  ],
"scripts": [  ],
"signatures": [  ]
}
},
"status": true
}, {
"command": "txnoutput",
"params": {
"address": "0x5EC92829DC40F6FECBAEA1DC8530AD480CCF6A97959082F3400C281A4B2A0668",
"amount": "0.1",
"id": "303657912"

...... and so on...........
```
- 5: **Thats it** now if you run the command ` coins relevant:true ` you should see lots of **coinid** with "0.1" or "0.01" in the response, that means , it all went successfully and now you can play the game fluently without interruptions becouse of UTXO system has been tricked.

- **Conclusion** this example is only a proof of concept to show you how powerfull can be the tokens created by yourself and the amazing things that can be done with them, and this is only the begining, becouse  we even have started to forsee the powerful of tokens so there is a part we haven't studied yet, that are scripts, every token can have a smart contract (script) that has his own and powerful language so imagine the amazing thing that can be done.
Just one, imagine that the game received a publicity token and that publicity were embbeded into the game when the token was received ................

------------------------------------------------------------
##### Ask for 2 minima on minima discord "#app-chat" channel and someone DM you and ask for your address to send 2 minima, once finished the tutorial, do the same to help other people to learn, that's the minima community philosophy, help each other.
------------------------------------------------------------

- Go back to tutorials page: <https://github.com/josua-j/Tutorials-3>

by @JOSUA
