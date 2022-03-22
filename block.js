class Block{
    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }



    toString(){        // für Debugging-Zwecke
        return `Block -
                Timestamp: ${this.timestamp}
                Last Hash: ${this.lastHash.substring(0,10)}
                Hash:      ${this.hash.substring(0,10)}
                Data:      ${this.data}`;
                

    }
    static genesis(){

        return new this("Genesis time", "-----", "abcd1234", ["data1", "data2"]);

    }

    static mineBlock(lastBlock,data) {
        const timestamp = Date.now()
        const lastHash = lastBlock.hash;
        const hash = hash;  // Eigener hash
        const data = data;  //Eigene Daten
    }
}

module.exports = Block;