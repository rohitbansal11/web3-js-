const { Web3 } = require("web3");
var solc = require("solc");
var fs = require("fs");
const web3 = new Web3("HTTP://127.0.0.1:7545");

let fileContect = fs.readFileSync("demo.sol").toString();

// console.log(fileContect)

/// input for solidity compliler

var input = {
  language: "Solidity",
  sources: {
    "demo.sol": {
      content: fileContect,
    },
  },

  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

// console.log(output)



let ABI = output.contracts['demo.sol']['demo'].abi;
let bytcode = output.contracts['demo.sol']['demo'].evm.bytecode.object;

// console.log(ABI)

// console.log(bytcode)















