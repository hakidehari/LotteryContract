const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile.js');
console.log('bytecode acquired');

const provider = new HDWalletProvider(
  'six pluck decide buzz defense pistol seek exit battle squeeze slow loud',
  'https://rinkeby.infura.io/RCLLrR0QMIvQSpkalzJi'
);
console.log('provider acquired');
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode })
    .send({ gas: '1000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};
deploy();
