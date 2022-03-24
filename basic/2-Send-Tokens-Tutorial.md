------------------------------------------------------------
### **Tutorial 2**: Learning how to send tokens, before you need to ask for some tokens
------------------------------------------------------------
- 1: **Execute** command ` balance ` and you will see if you have tokens something like that:
```
"token":{
      "name":"JOSUA"
    },
    "tokenid":"0x5BA68CC3968CD2EC458C1832ADD1F9796952DD88A305079566CA6E73AE6D138C",
    "confirmed":"944.22",
    "unconfirmed":"0",
    "sendable":"944.22",
    "total":1000
  }]

```
- 2: **You need** to look for the ` tokenid ` that long number is what you will need to send the token-
- 3: **Follow** the first tutorial on this link to create an address wallet: <https://github.com/josua-j/Tutorials-3/blob/main/basic/1-UTXO-create-send-Tutorial.md>
- 4: **Add** to the last part of the command after the ` amount ` part ` tokenid: ` and paste the tokenid on the step 2
- 5: **Thats it**, the amount selected of the tokenid will be sent to the address you selected.
------------------------------------------------------------
**Example command**
```
tokencreate name:JOSUA amount:1000 decimals:4
send address:0xB468DFB25129817205BF33772379648837FC9E2483C9280EE8A666145530B426 amount:55.78 tokenid:0x5BA68CC3968CD2EC458C1832ADD1F9796952DD88A305079566CA6E73AE6D138C
```
------------------------------------------------------------
##### Ask for some tokens on minima discord "#app-chat" channel and someone DM you and ask for your address to send 1 minima, once finished the tutorial, do the same to help other people to learn, that's the minima community philosophy, help each other.
------------------------------------------------------------

- Go back to tutorials page: <https://github.com/josua-j/Tutorials-3>

by @JOSUA
