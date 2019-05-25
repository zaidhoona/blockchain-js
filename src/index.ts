import { Blockchain } from "./blockchain/blockchain";
require('crypto-js/sha256');

const blockChain1: Blockchain = new Blockchain(1);
blockChain1.addBlock({amount: 10});
blockChain1.addBlock({amount: 20});
blockChain1.addBlock({amount: 30});
blockChain1.addBlock({amount: 40});

console.log("=====================================================");

const blockChain3: Blockchain = new Blockchain(3);
blockChain3.addBlock({amount: 10});
blockChain3.addBlock({amount: 20});
blockChain3.addBlock({amount: 30});
blockChain3.addBlock({amount: 40});

console.log("=====================================================");

const blockChain6: Blockchain = new Blockchain(5);
blockChain6.addBlock({amount: 10});
blockChain6.addBlock({amount: 20});
blockChain6.addBlock({amount: 30});
blockChain6.addBlock({amount: 40});

console.log("=====================================================");
console.log(`Block chain is valid? ${blockChain3.isValid()}`);
