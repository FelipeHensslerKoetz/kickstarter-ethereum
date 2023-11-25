import Web3 from "web3";

let web3; 

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    web3 = new Web3(window.web3.currentProvider);
} else {
    console.log('process.env.INFURA_URL', process.env['INFURA_URL']);
    const provider = new Web3.providers.HttpProvider(
     'https://sepolia.infura.io/v3/dfe173168bbb4f1298c13cafed95c8c1'
    );
    web3 = new Web3(provider);
}

export default web3;