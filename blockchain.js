// Import
const Block = require("./block");

class Blockhain{

    constructor(){
        this.chain = [Block.genesis()];
    }
    addBlock(data){
        // index = arr.lenght -1
        const lastBlock = this.chain[this.chain.lenght-1]
        const block = Block.mineBlock(lastBlock, data);
        this.chain.push(block);
    }
}

module.exports = Blockhain;