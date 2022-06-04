const Web3 = require('web3');
const dotenv = require('dotenv');
dotenv.config();
const provider = new Web3.providers.HttpProvider(process.env.INFURA_URL);
const web3 = new Web3(provider);

const getBalance = async () => {
  const result = await web3.eth.getBalance(process.env.WALLET_ADDRESS);
  const balance = web3.utils.fromWei(result, 'ether');
  console.log(balance);
};

getBalance();
