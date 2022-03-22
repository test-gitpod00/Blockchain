const SHA256 = require("crypto-js/sha256")  // Import | Verweis





class Block{

    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
       return `Block -
       Timestamp:   ${this.timestamp}
       Last Hash:   ${this.lastHash.substring(0,10)}
       BigHash:     ${this.hash}
       Hash:        ${this.hash.substring(0,10)}
       Data         ${this.data}`; 
    }
    static genesis(){
        return new this("Genesis time", "-----","abcd1234",["data1,data2"]);
    }
   
static mineBlock(lastBlock,blockData){

    const timestamp = Date.now(); // Zeit in ms seit dem 01.01.1970
    const lastHash = lastBlock.hash; // Hash des vorhergehenden Blocks
    const hash = Block.hash(timestamp,lastHash,blockData); // hash; // Eigener Hash
    const data = blockData; // Daten des Blocks

    return new this(timestamp,lastHash,hash,data);
    }
    static hash(timestamp,lastHash,hash,data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
}

module.exports = Block;