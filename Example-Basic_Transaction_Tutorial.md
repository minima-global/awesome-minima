# How to construct a simple transaction
 
## Purpose
The purpose of this tutorial is to demonstrate how to manually construct a simple transaction on Minima.

I recommend going through it a couple of times to make sure you understand the process and before moving onto more complicated tutorials.
 
## You will learn
In this tutorial you will learn:
- How to manually construct a valid transaction
- How to add inputs and outputs to a transaction
- How to add a burn to a transaction
- How to sign and post a transaction on-chain

## Pre-requisites
You should have an understanding of:
- How the UTxO model works
- How the `send` command works

You will need:
- The latest [minima.jar](https://github.com/minima-global/Minima/raw/master/jar/minima.jar) downloaded
- Two test nodes - one to send coins and one to receive coins. <br/>
One of these nodes should be started from Genesis so you have 1 billion coins to play with.

There are no other dependencies.

## Tutorial

### 1. Start two test nodes
To set up your two test nodes, open two new command prompt sessions and change directory into the folder where your minima.jar file is.

Follow the guidance [here](https://docs.minima.global/docs/buildonminima/startaprivatenode) to start the nodes.

### 2. Create a transaction

> To get more detail on any of the commands used in this tutorial, you can use `help command:` e.g. `help command:txncreate`. <br/>
> The coinids and addresses in this tutorial will differ to yours.

On node 1, create a transaction called `simpletxn`.

```
txncreate id:simpletxn
```

You will see the following output: 
```
txncreate id:simpletxn
{
  "command":"txncreate",
  "params":{
    "id":"simpletxn"
  },
  "status":true,
  "pending":false,
  "response":{
    "id":"simpletxn",
    "transaction":{
      "inputs":[],
      "outputs":[],
      "state":[],
      "linkhash":"0x00",
      "transactionid":"0xAB728B0D4A215A520DAA3DB2A618CBD24AB3A3A36293B07FA2EF55CBBD765613"
    },
    "witness":{
      "signatures":[],
      "mmrproofs":[],
      "scripts":[]
    },
    "outputcoindata":[]
  }
}
```
We have created the shell of a transaction. As you can see there are no inputs or outputs for this transaction yet. 

### 3. Add an input to the transaction

We need a coin to use as an input to the transaction. The coin must be greater than or equal to the value you wish to send. 

If you don't have a single coin which is enough to cover the amount you wish to send, you will need to add more than one coin as an input. 

To see which coins you have available, use the `coins` command. 

Doing this on node 1, we get the following output:
```
coins
{
  "command":"coins",
  "status":true,
  "pending":false,
  "response":[{
    "coinid":"0x9ADD6E64E7D4DE63F4472C730ECEDDA8BC37C2F1A906E126F81C584EF172CF3A",
    "amount":"1000000000",
    "address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2",
    "miniaddress":"MxG083BHZRQW4DW3ZS0GSM19Z4VM7P5M53JP3C6JCGAPJ16J9ZTKEGCZA4GJAEZ",
    "tokenid":"0x00",
    "token":null,
    "storestate":true,
    "state":[],
    "spent":false,
    "mmrentry":"1",
    "created":"1"
  }]
}
```

We have one coin, the Genesis coin, worth 1 billion Minima. 

The coinid is the unique identifier for the coin and this is what we will use to add this coin as the input to our transaction. 

On node 1, add this coin as an input to our `simpletxn`:

```
txninput id:simpletxn coinid:0x9ADD6E64E7D4DE63F4472C730ECEDDA8BC37C2F1A906E126F81C584EF172CF3A
```

We get the following output:
```
{
  "command":"txninput",
  "params":{
    "id":"simpletxn",
    "coinid":"0x9ADD6E64E7D4DE63F4472C730ECEDDA8BC37C2F1A906E126F81C584EF172CF3A"
  },
  "status":true,
  "pending":false,
  "response":{
    "id":"simpletxn",
    "transaction":{
      "inputs":[{
        "coinid":"0x9ADD6E64E7D4DE63F4472C730ECEDDA8BC37C2F1A906E126F81C584EF172CF3A",
        "amount":"1000000000",
        "address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2",
        "miniaddress":"MxG083BHZRQW4DW3ZS0GSM19Z4VM7P5M53JP3C6JCGAPJ16J9ZTKEGCZA4GJAEZ",
        "tokenid":"0x00",
        "token":null,
        "storestate":true,
        "state":[],
        "spent":false,
        "mmrentry":"1",
        "created":"1"
      }],
      "outputs":[],
      "state":[],
      "linkhash":"0x00",
      "transactionid":"0xFFF38373DE1EA1FAD6B427F8536FCCA0C3CBF81CB26EDA2F66A48D2ADB84CF86"
    },
    "witness":{
      "signatures":[],
      "mmrproofs":[],
      "scripts":[]
    },
    "outputcoindata":[]
  }
}
```

As you can see, we have one input now and no outputs.

### 4. Add outputs to the transaction

Obviously each transaction needs at least 1 output. 

Unless you have a coin which is the exact amount you wish to send, a simple transaction would usually take 2 outputs, one to the recipient and one back to the sender with the change (when the value of the input coin is greater than the amount you want to send).

Let's send 10 Minima to node 2. 

We need to know a wallet address of node 2, so on node 2 do:
```
getaddress
```

You will see the output:
```
{
  "command":"getaddress",
  "status":true,
  "pending":false,
  "response":{
    "script":"RETURN SIGNEDBY(0x69BF3B984241BB4ADC48517A9F4A94DF25007D7F69E2A376CE939FC45E6A9D0C)",
    "address":"0x1577381B2E4E160BD058F73692A73BBF585B9A68383AD8A55979E7C614A17095",
    "miniaddress":"MxG080YESS1MBWE2Z5T0M7N6Q9AEETVB1DPKQ1Z7BCAAMBPSV3198BGWNB9DRW8",
    "simple":true,
    "default":true,
    "publickey":"0x69BF3B984241BB4ADC48517A9F4A94DF25007D7F69E2A376CE939FC45E6A9D0C",
    "track":true
  }
}
```

This is one of node 2's default wallet addresses (of which each node has 64). 

Each address has a 0x format (`address`) and an Mx format (`miniaddress`), either can be used to send coins to.

Each address also has a script and public key. 

When we send our 10 Minima to this address `MxG080YESS1MBWE2Z5T0M7N6Q9AEETVB1DPKQ1Z7BCAAMBPSV3198BGWNB9DRW8`, node 2 will get a new coin, worth 10 Minima, at this address.

The `script` simply means - for any coins at this address, the coin can only be spent if this script returns `true`. 

#### 4a. Output to recipient
Let's add an output to our transaction, sending 10 Minima to this address. 

Back on node 1, do:
```
txnoutput id:simpletxn amount:10 address:MxG080YESS1MBWE2Z5T0M7N6Q9AEETVB1DPKQ1Z7BCAAMBPSV3198BGWNB9DRW8
```

Note, we also could have used `address:0x1577381B2E4E160BD058F73692A73BBF585B9A68383AD8A55979E7C614A17095`.

My command output:
```
{
  "command":"txnoutput",
  "params":{
    "id":"simpletxn",
    "amount":"10",
    "address":"MxG080YESS1MBWE2Z5T0M7N6Q9AEETVB1DPKQ1Z7BCAAMBPSV3198BGWNB9DRW8"
  },
  "status":true,
  "pending":false,
  "response":{
    "id":"simpletxn",
    "transaction":{
      "inputs":[{
        "coinid":"0x9ADD6E64E7D4DE63F4472C730ECEDDA8BC37C2F1A906E126F81C584EF172CF3A",
        "amount":"1000000000",
        "address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2",
        "miniaddress":"MxG083BHZRQW4DW3ZS0GSM19Z4VM7P5M53JP3C6JCGAPJ16J9ZTKEGCZA4GJAEZ",
        "tokenid":"0x00",
        "token":null,
        "storestate":true,
        "state":[],
        "spent":false,
        "mmrentry":"1",
        "created":"1"
      }],
      "outputs":[{
        "coinid":"0x9AA61717A9190419F4C617AF10FC5A014621E860767841118342ABEA9F7F8D4E",
        "amount":"10",
        "address":"0x1577381B2E4E160BD058F73692A73BBF585B9A68383AD8A55979E7C614A17095",
        "miniaddress":"MxG080YESS1MBWE2Z5T0M7N6Q9AEETVB1DPKQ1Z7BCAAMBPSV3198BGWNB9DRW8",
        "tokenid":"0x00",
        "token":null,
        "storestate":true,
        "state":[],
        "spent":false,
        "mmrentry":"0",
        "created":"0"
      }],
      "state":[],
      "linkhash":"0x00",
      "transactionid":"0x210C3C216C12F59C3BDDB9F166F05C25B58178BFC4FB15FCFB464533056EFB57"
    },
    "witness":{
      "signatures":[],
      "mmrproofs":[],
      "scripts":[]
    },
    "outputcoindata":["0x000000209AA61717A9190419F4C617AF10FC5A014621E860767841118342ABEA9F7F8D4E000000201577381B2E4E160BD058F73692A73BBF585B9A68383AD8A55979E7C614A1709500010A00000001000100010000000001000000010000010000"]
  }
}
```

As you can see, we now have 1 input and 1 output.

You can check the transaction using
```
txncheck id:simpletxn
```
Command output:
```
Minima @ ... : Wrong Number of MMR Proofs Inputs:1 MMRProofs:0 @ 0x00
{
  "command":"txncheck",
  "params":{
    "id":"simpletxn"
  },
  "status":true,
  "pending":false,
  "response":{
    "coins":[{
      "tokenid":"0x00",
      "input":"1000000000",
      "output":"10",
      "difference":"999999990"
    }],
    "tokens":1,
    "inputs":1,
    "outputs":1,
    "burn":"999999990",
    "validamounts":true,
    "signatures":0,
    "valid":{
      "basic":false,
      "signatures":true,
      "mmrproofs":true,
      "scripts":true
    }
  }
}
```

You will notice the burn amount - 999999990! 

The burn is calculated as the difference between the inputs and outputs, so if we don't specify what to do with the remaining 999999990 Minima from the input coin, it will be burned!

#### 4b. Change Output
In this tutorial we won't include a burn (we will assume there is plenty of block space available), so we need to define a second output to return the 999999990 Minima to the sender (node 1).

We can either send it back to the same address that the input coin came from on node 1 i.e. `0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2` or send it back to a different wallet address (which you may want to do for increased privacy). 

To find a different wallet address, you can do `getaddress` on node 1. 

For this example, I will send the change back to the same address. The miniaddress (Mx format) would also work.

Add the change output on node 1:
```
txnoutput id:simpletxn amount:999999990 address:0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2
```

My command output:
```
{
  "command":"txnoutput",
  "params":{
    "id":"simpletxn",
    "amount":"999999990",
    "address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2"
  },
  "status":true,
  "pending":false,
  "response":{
    "id":"simpletxn",
    "transaction":{
      "inputs":[{
        "coinid":"0x9ADD6E64E7D4DE63F4472C730ECEDDA8BC37C2F1A906E126F81C584EF172CF3A",
        "amount":"1000000000",
        "address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2",
        "miniaddress":"MxG083BHZRQW4DW3ZS0GSM19Z4VM7P5M53JP3C6JCGAPJ16J9ZTKEGCZA4GJAEZ",
        "tokenid":"0x00",
        "token":null,
        "storestate":true,
        "state":[],
        "spent":false,
        "mmrentry":"1",
        "created":"1"
      }],
      "outputs":[{
        "coinid":"0x9AA61717A9190419F4C617AF10FC5A014621E860767841118342ABEA9F7F8D4E",
        "amount":"10",
        "address":"0x1577381B2E4E160BD058F73692A73BBF585B9A68383AD8A55979E7C614A17095",
        "miniaddress":"MxG080YESS1MBWE2Z5T0M7N6Q9AEETVB1DPKQ1Z7BCAAMBPSV3198BGWNB9DRW8",
        "tokenid":"0x00",
        "token":null,
        "storestate":true,
        "state":[],
        "spent":false,
        "mmrentry":"0",
        "created":"0"
      },
      {
        "coinid":"0xF25DFF89E78E12926C83E91C64279380BF2C34C4EE5971F015A43614214A6FF8",
        "amount":"999999990",
        "address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2",
        "miniaddress":"MxG083BHZRQW4DW3ZS0GSM19Z4VM7P5M53JP3C6JCGAPJ16J9ZTKEGCZA4GJAEZ",
        "tokenid":"0x00",
        "token":null,
        "storestate":true,
        "state":[],
        "spent":false,
        "mmrentry":"0",
        "created":"0"
      }],
      "state":[],
      "linkhash":"0x00",
      "transactionid":"0x43D318ACFD77B898DEB7C8F7FEACA3A46BEED0FF35A07B99125238358FEF8B47"
    },
    "witness":{
      "signatures":[],
      "mmrproofs":[],
      "scripts":[]
    },
    "outputcoindata":["0x000000209AA61717A9190419F4C617AF10FC5A014621E860767841118342ABEA9F7F8D4E000000201577381B2E4E160BD058F73692A73BBF585B9A68383AD8A55979E7C614A1709500010A00000001000100010000000001000000010000010000",
    "0x00000020F25DFF89E78E12926C83E91C64279380BF2C34C4EE5971F015A43614214A6FF8000000206B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC200043B9AC9F600000001000100010000000001000000010000010000"]
  }
}
```

Now we have 1 input (1 billion Minima) and 2 outputs, one to node 2 (10 Minima) and one back to node 1 (999999990 Minima). 

If we do `txncheck id:simpletxn` again, we now have no Burn:

```
txncheck id:simpletxn
Minima @ ... : Wrong Number of MMR Proofs Inputs:1 MMRProofs:0 @ 0x00
{
  "command":"txncheck",
  "params":{
    "id":"simpletxn"
  },
  "status":true,
  "pending":false,
  "response":{
    "coins":[{
      "tokenid":"0x00",
      "input":"1000000000",
      "output":"1000000000",
      "difference":"0"
    }],
    "tokens":1,
    "inputs":1,
    "outputs":2,
    "burn":"0",
    "validamounts":true,
    "signatures":0,
    "valid":{
      "basic":false,
      "signatures":true,
      "mmrproofs":true,
      "scripts":true
    }
  }
}
```
You will also see after we added the second output that the `Witness` data is empty:
```
    "witness":{
      "signatures":[],
      "mmrproofs":[],
      "scripts":[]
    },
 ```

The Witness holds the signatures, coin proofs and scripts for a transaction - proving a transaction's validity.

Let's complete the Witness data.

### 5. Sign the transaction

Since this is a simple transaction (no custom scripts) we can sign the transaction using 
```
txnsign id:simpletxn publickey:auto
```
Command output:
```
{
  "command":"txnsign",
  "params":{
    "id":"simpletxn",
    "publickey":"auto"
  },
  "status":true,
  "pending":false,
  "response":{
    "keys":["0x188A3462BDF4E4238C7097337B6F897ECF806655884FE00D3CFBEEF0C47C6AFD"]
  }
}
```

The key shown here is the public key used to sign the transaction. 

Earlier, I mentioned that each address also has a script and public key.

Let's check the script associated with our input coin address using:

```
scripts address:0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2
```
Command output:
```
{
  "command":"scripts",
  "params":{
    "address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2"
  },
  "status":true,
  "pending":false,
  "response":{
    "script":"RETURN SIGNEDBY(0x188A3462BDF4E4238C7097337B6F897ECF806655884FE00D3CFBEEF0C47C6AFD)",
    "address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2",
    "miniaddress":"MxG083BHZRQW4DW3ZS0GSM19Z4VM7P5M53JP3C6JCGAPJ16J9ZTKEGCZA4GJAEZ",
    "simple":true,
    "default":true,
    "publickey":"0x188A3462BDF4E4238C7097337B6F897ECF806655884FE00D3CFBEEF0C47C6AFD",
    "track":true
  }
}
```
You can see the `publickey` here matches what our `txnsign` command returned.

This tells us that when sending a coin which has this address, the script 
```
RETURN SIGNEDBY(0x188A3462BDF4E4238C7097337B6F897ECF806655884FE00D3CFBEEF0C47C6AFD)
``` 
must return `TRUE`.

This script reads:<br/>
> If this transaction is SIGNEDBY the public key `0x188A3462BDF4E4238C7097337B6F897ECF806655884FE00D3CFBEEF0C47C6AFD`, then return TRUE. Otherwise, return FALSE.

If you do `txncheck id:simpletxn` again, you will see there is now 1 signature.

If you do `txnlist id:simpletxn`, you will see a signature is now populated in the `Witness` section.

However the mmrproofs and scripts are still empty.

Command output from `txnlist id:simpletxn`:
```
...
      "mmrproofs":[],
      "scripts":[]
...
```

Let's add these now.

### 6. Add the Coin proofs and Scripts

Again, as this is a simple transaction, we can easily add the MMR proof for the input coin and the script using:
```
txnbasics id:simpletxn
```
The command output will show you the full transaction and complete Witness, including the mmrproofs and scripts:
```
...
      "mmrproofs":[{
        "coin":{
          "coinid":"0x9ADD6E64E7D4DE63F4472C730ECEDDA8BC37C2F1A906E126F81C584EF172CF3A",
          "amount":"1000000000",
          "address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2",
          "miniaddress":"MxG083BHZRQW4DW3ZS0GSM19Z4VM7P5M53JP3C6JCGAPJ16J9ZTKEGCZA4GJAEZ",
          "tokenid":"0x00",
          "token":null,
          "storestate":true,
          "state":[],
          "spent":false,
          "mmrentry":"1",
          "created":"1"
        },
        "proof":{
          "blocktime":"235",
          "proof":[{
            "left":true,
            "data":{
              "data":"0xA53AD6A229F11DAD05FD0D9164F8EEE96501FA67ED9FEF7087EEA5C43E293357",
              "value":"0"
            }
          }],
          "prooflength":1
        }
      }],
      "scripts":[{
        "script":"RETURN SIGNEDBY(0x188A3462BDF4E4238C7097337B6F897ECF806655884FE00D3CFBEEF0C47C6AFD)",
        "address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2",
        "proof":{
          "blocktime":"0",
          "proof":[],
          "prooflength":0
        }
      }]
    },
    "outputcoindata":["0x000000209AA61717A9190419F4C617AF10FC5A014621E860767841118342ABEA9F7F8D4E000000201577381B2E4E160BD058F73692A73BBF585B9A68383AD8A55979E7C614A1709500010A00000001000100010000000001000000010000010000",
    "0x00000020F25DFF89E78E12926C83E91C64279380BF2C34C4EE5971F015A43614214A6FF8000000206B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC200043B9AC9F600000001000100010000000001000000010000010000"]
  }
}
```

By adding the coin's MMR proof, when all other nodes in the network receive this transaction, they will be able to verify that our input coin is valid and unspent (i.e. We are not attempting a double spend!)

By adding the script, they will be able to execute the script and verify that it returns TRUE - since we have signed the transaction with the right public key.

Now when you do `txncheck id:simpletxn`, you won't get the `Wrong number of MMR Proofs` message and you will see everything is now valid! 

```
...
    "valid":{
      "basic":true,
      "signatures":true,
      "mmrproofs":true,
      "scripts":true
...
```

### 7. Post the transaction

We are ready to post the transaction! 

All the hard work is done, now we just need to post the transaction - this will propagate it to the entire Minima network who will validate it and then add it to a block!

Still on node 1:
```
txnpost id:simpletxn
```
Command output (node 1):
```
ASYNC Transaction Mined : 0x00004D96A2FFDC5BFC00868627B6A9085ECDE489A83B5CD9A6B76A5FA58DFB3F
You found a block! 530 0x00004D96A2FFDC5BFC00868627B6A9085ECDE489A83B5CD9A6B76A5FA58DFB3F
NEW Spent Coin : {"coinid":"0x9ADD6E64E7D4DE63F4472C730ECEDDA8BC37C2F1A906E126F81C584EF172CF3A","amount":"1000000000","address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2","miniaddress":"MxG083BHZRQW4DW3ZS0GSM19Z4VM7P5M53JP3C6JCGAPJ16J9ZTKEGCZA4GJAEZ","tokenid":"0x00","token":null,"storestate":true,"state":[],"spent":true,"mmrentry":"1","created":"1"}
NEW Unspent Coin : {"coinid":"0xF25DFF89E78E12926C83E91C64279380BF2C34C4EE5971F015A43614214A6FF8","amount":"999999990","address":"0x6B8E37A911B21E380872C14E09FB1F25B1473C8D869B20ACCC269A71DA3A0CC2","miniaddress":"MxG083BHZRQW4DW3ZS0GSM19Z4VM7P5M53JP3C6JCGAPJ16J9ZTKEGCZA4GJAEZ","tokenid":"0x00","token":null,"storestate":true,"state":[],"spent":false,"mmrentry":"3","created":"530"}
```

On node 2, we can see it has received the Minima:
```
NEW Unspent Coin : {"coinid":"0x9AA61717A9190419F4C617AF10FC5A014621E860767841118342ABEA9F7F8D4E","amount":"10","address":"0x1577381B2E4E160BD058F73692A73BBF585B9A68383AD8A55979E7C614A17095","miniaddress":"MxG080YESS1MBWE2Z5T0M7N6Q9AEETVB1DPKQ1Z7BCAAMBPSV3198BGWNB9DRW8","tokenid":"0x00","token":null,"storestate":true,"state":[],"spent":false,"mmrentry":"2","created":"530"}
```

So you can see the process:
 1. node 1 created a txpow unit containing the transation
 2. node 1 mined the txpow unit 
 3. the txpow unit became a block*
 4. node 1 spent the 1 billion coin and received a new coin of 999999990
 5. node 2 received a new coin of 10

\* It is important to note here that step 3 is not a given and in the main network, the block would most likely be found by a different node.

Well done, you just manually constructed a transaction and sent it!

### Notes

Alternative methods in this tutorial could have been:

1. Instead of using `txnbasics id:simpletxn`, you could add the MMR proofs and script at the same time as adding the coin as an input with 
```
txninput id:simpletxn coinid:0x9ADD6E64E7D4DE63F4472C730ECEDDA8BC37C2F1A906E126F81C584EF172CF3A scriptmmr:true
```
2. Instead of using `txnbasics id:simpletxn`, you could do it in one step with:
```
txnpost id:simpletxn auto:true
```
3. If you had more than one coin on node 1, you could add a burn at the `txnpost` step with:
```
txnpost id:simpletxn burn:1
```

#### Tags
Beginner; On-chain; Minima (Layer 1); Transaction
