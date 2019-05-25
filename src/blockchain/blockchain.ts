import { Block } from "./block";

export class Blockchain {
    public blocks: Block[];
    
    constructor(private difficulty: number) {
        this.blocks = [];
        this.blocks.push(this.createGenesis())
    }

    private getLatestBlock(): Block {
        return this.blocks[this.blocks.length - 1];
    }

    public addBlock(data: any): Block {
        const latestBlock = this.getLatestBlock();
        const index = latestBlock.index + 1;
        const newBlock = new Block(index, data, latestBlock.hash);
        const minnedBlock = this.mineBlock(newBlock);
        this.blocks.push(minnedBlock);
        return minnedBlock;
    }

    public isValid(): boolean {        
        for (let i = 1; i < this.blocks.length; i++) {
            let currentBlock = this.blocks[i];
            let previousBlock = this.blocks[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previourHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }

    private mineBlock(newBlock: Block): Block {
        let hash = newBlock.calculateHash();
        const startTime = process.hrtime();
        while (hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join("0")) {
            newBlock.nonce++;
            hash = newBlock.calculateHash();
        }
        const endTime = process.hrtime(startTime);
        console.log(`Block minned: ${newBlock.hash}`);
        console.log(`Time to mine: ${endTime[0]}s ${endTime[1] / 1000000}ms`);
        return newBlock;
    }

    private createGenesis(): Block {
        return new Block(0, 'GenesisData', '0');
    }
}