------------------------------------------------------------
### **Tutorial 3**: Learning how to create Tokens, before, **you need one 1 minima** (in fact a very low fraction of it)
#### The important part here, is to watch for the console's prompt results when executing the command to create the tokens.
------------------------------------------------------------
- 1: **Execute** the command ` tokencreate name:JOSUA amount:1000 decimals:4 `
  - This command creates 1000 token units called "JOSUA" with 4 decimals, and what really will happen is that a transaction will be created.
  - Transactions have **inputs** and **outputs** , in that case, **inputs** will contain the coin used to generate de Tokens and the amount of them, while **outputs** will contain the amount of spended(sended)coins/token.
  - There is a rule a transaction must satisfy: **Inputs must be lower or equal than outputs**
  - It has 2 outputs, one for the exact amount of minima coins used to create the tokens and the other for the amount that needs to be returned as change back (the amount of minima not used to create the tokens, as UTXO works that way).

- 2: **Look at status** if it shows **true** it means the tokens have been created.
- 3: **Look at inputs** and check for **amount** that is the total amount choosen to create the token(not all of them, only a part of them will be used).
- 4: **Look at inputs** and check for **address** this is where the minima coins are (wallet address)
- 5: **Look at inputs** and check for **tokenid** this is **0x00** that is the standrad tokenid for a minima coin.
- 6: **Look at outputs** and check for **coinid and tokenid** if they are different check for **amount** that will indicate the exact amount of minimas used to create the tokens and also you see the **address** where the tokens will be sent and also you could see the tokenid that identify the created tokens and all info related to that tokens.
- 7: **Look at outputs** and check for **coindid and tokenid** if both are **0x00** that indicates this output is the change back that needs to be returned to the orginal source(The amounts of minima not spended) , **address** indicates where the change will be send back (a node has a lot of addresses).
- 8: **That's all** now check the response it was generated on my node, in your node maybe it can be different.

```
{
  "command":"tokencreate",
  "params":{
    "name":"JOSUA",
    "amount":"1000",
    "decimals":"4"
  },
  "status":true,       <--------------
  "response":{
    "inputs":[{        <--------------
      "coinid":"0x800B818B4B19A4AB05F8DD716CFFBCA37A3D605284172E562AA4424D869A17E9",
      "amount":"100",  <--------------
      "address":"0xF1DF557D3B68D62509CFA34DE7ED44C6A14470106DEF1278BA901102BEB67B66",          <-------------
      "tokenid":"0x00",     <---------------
      "token":null,
      "floating":false,
      "storestate":true,
      "state":[],
      "mmrentry":"490",
      "spent":false,
      "created":"181732"
    }],
    "outputs":[{            <------------------
      "coinid":"0x00",      <------------------
      "amount":"0.0000000000000000000000000000000000001",                                    <-----------------------
      "address":"0xE91BB4485D69CBBAABC432E5AF713923D6FF19A6FD30A13BED2C7AF91D30E5D7",        <-----------------------
      "tokenid":"0xFF",     <------------------
      "token":{
        "name":{
          "name":"JOSUA"
        },
        "tokenid":"0xB4133431C0D1B7CB08EFBDEE8CD1C133994F1F620E9FFD4D0D4DDAF357CBEFC0",
        "coinid":"0x00",
        "total":"1000",
        "decimals":4,
        "script":"RETURN TRUE",
        "totalamount":"0.0000000000000000000000000000000000001",
        "scale":40
      },
      "tokenamount":"1000",
      "floating":false,
      "storestate":true,
      "state":[],
      "mmrentry":"0",
      "spent":false,
      "created":"0"
    },
    {
      "coinid":"0x00",        <----------------
      "amount":"99.9999999999999999999999999999999999999",                                          <----------------
      "address":"0xA7B324EDE6DB0FE255530B4E27BDE92C4D0BB6E9A63874093EC5A2E4182E919E",               <----------------
      "tokenid":"0x00",       <----------------
      "token":null,
      "floating":false,
      "storestate":true,
      "state":[],
      "mmrentry":"0",
      "spent":false,
      "created":"0"
    }],
    "state":[],
    "linkhash":"0x00",
    "transactionid":"0xD02745DC36EF24D21ED847EDFCA3AFD741C84E21FEBE0A88981C8583D98E058E"
  }
}

```
------------------------------------------------------------
##### Ask for 1 minima on minima discord "#app-chat" channel and someone DM you and ask for your address to send 1 minima, once finished the tutorial, do the same to help other people to learn, that's the minima community philosophy, help each other.
------------------------------------------------------------

- Go back to tutorials page: <https://github.com/josua-j/Tutorials-3>

by @JOSUA
