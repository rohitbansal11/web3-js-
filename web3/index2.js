const { Web3 } = require("web3");

// let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
const web3 = new Web3("HTTP://127.0.0.1:7545");

 // Rmix ABI , remix contract 
let contract = new web3.eth.Contract(
  [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_x",
          type: "uint256",
        },
      ],
      name: "set",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "x",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  "0xa603e321244c685C09EDE7a5189BacE88cbDD63f"
);


// set x value form remix
contract.methods.set(50).send({from:'0x812C697758A62AC33270419d49FB489da5B29d86'})


// get x value form remix == 
contract.methods.x().call().then((www)=>console.log(www))
