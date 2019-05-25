const SHA = require('crypto-js/sha256');

export class Block {
    public index: number;
    public hash: string;
    public timeStamp: Date;
    private data: any;
    public previourHash: String;
    public nonce: number;

    constructor(index: number, data: any, previousHash: string) {
        this.nonce = 0;
        this.index = index;
        this.data = data;
        this.previourHash = previousHash;
        this.timeStamp = new Date();
        this.hash = this.calculateHash();
    }

    public calculateHash(): string {
        return SHA(`${this.index}${this.previourHash}${this.timeStamp}${this.data}${this.nonce}`).toString();
    }
}