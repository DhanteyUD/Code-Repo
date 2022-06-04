const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider(
  'https://mainnet.infura.io/v3/8414250e9b6e4e5ba9ee634ecd0525b2'
);
const web3 = new Web3(provider);

const getBalance = async () => {
  const result = await web3.eth.getBalance(
    '0x9b17D02Fc2e64e797aa052a6209eF8D1b85fC49D'
  );
  const balance = web3.utils.fromWei(result, 'ether');
  console.log(balance);
};

getBalance();
