const { Web3 } = require("web3");

// let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
const web3 = new Web3("HTTP://127.0.0.1:7545");

web3.eth
  .getBalance("0x812C697758A62AC33270419d49FB489da5B29d86")
  .then((data) => {
    /// get ether
    console.log(web3.utils.fromWei(data, "ether"));
  });

//// send ether

// web3.eth.sendTransaction({
//   from: "0x6AfEb991D8502ee3b7A72a33E8936FDdF1ca0678",
//   to: "0x812C697758A62AC33270419d49FB489da5B29d86",
//   value:web3.utils.toWei(5,'ether')
// });

// console.log(web3)
