const readline = require("readline-sync");

class Transaction {
  constructor(
    senderId,
    recieverId,
    senderName,
    recieverName,
    description,
    transactionDate
  ) {
    this.senderId = senderId;
    this.recieverId = recieverId;
    this.senderName = senderName;
    this.recieverName = recieverName;
    this.description = description;
    this.transactionDate = transactionDate;
  }

  getHash() {
    const totalBlockValue =
      this.senderId + this.recieverId + this.description + this.transactionDate;
    return totalBlockValue.split("").reduce((hash, char) => {
      hash = (hash << 5) - hash + char.charCodeAt(0);
      return hash & hash;
    }, 0);
  }
}

function getTransactionFromUser() {
  const transaction = new Transaction();

  // console.log("Enter transaction details:");
  transaction.senderId = readline.question("Enter sender id: ");
  transaction.recieverId = readline.question("Enter receiver id: ");
  transaction.senderName = readline.question("Enter sender name: ");
  transaction.recieverName = readline.question("Enter receiver name: ");
  transaction.description = readline.question("Enter description: ");
  transaction.transactionDate = readline.question("Enter date: ");

  return transaction;
}

class Block {
  constructor(previousHash, transactions = []) {
    this.previousHash = previousHash;
    this.transactions = transactions;
    this.blockHash = this.generateBlockHash();
  }

  generateBlockHash() {
    const transactionHash = this.transactions.reduce(
      (totalHash, transaction) => {
        const currentHash = transaction.getHash();
        totalHash = (totalHash << 5) - totalHash + currentHash;
        return totalHash & totalHash;
      },
      0
    );

    return (
      ((this.previousHash + transactionHash) << 5) -
      (this.previousHash + transactionHash)
    );
  }
}

class BlockNode {
  constructor(block) {
    this.block = block;
    this.next = null;
  }
}

function buildBlockList(head) {
  let temp = head;
  let choice;
  do {
    choice = parseInt(
      readline.question(
        "Enter 1 to add a new block\nEnter 0 to exit\nYour choice: "
      )
    );
    if (choice === 1) {
      const tList = [];
      let ch = 1;
      console.log("Enter transaction values:");
      while (ch != 0) {
        const cTransaction = getTransactionFromUser();
        tList.push(cTransaction);
        ch = parseInt(
          readline.question(
            "Enter 1 to add new transaction\nEnter 0 to complete\nYour choice: "
          )
        );
      }
      const newBlock = new Block(temp.block.blockHash, tList);
      console.log(newBlock);
      const nextBlock = new BlockNode(newBlock);
      temp.next = nextBlock;
      temp = temp.next;
    }
  } while (choice !== 0);
}

function printBlockList(head) {
  let temp = head;
  let i = 1;
  while (temp !== null) {
    console.log(`Details for block ${i}:`);
    console.log("Transactions:");
    temp.block.transactions.forEach((transaction, j) => {
      console.log(`${j + 1} -> ${transaction.description}`);
    });
    console.log(`Hash Value: ${temp.block.blockHash}`);
    temp = temp.next;
    i++;
  }
}

function verifyBlockChain(head) {
  let isValid = true;
  while (head.next !== null) {
    if (head.block.blockHash === head.next.block.previousHash) {
      head = head.next;
      continue;
    } else {
      isValid = false;
      break;
    }
  }
  return isValid;
}

const tr = [];
const t1 = new Transaction(
  "001",
  "010",
  "Shreyans",
  "Rudransh",
  "Shreyans sent 10 bitcoins to Rudransh",
  "08-03-2023"
);
tr.push(t1);
const genesisBlock = new Block(1, tr);
console.log("Hash =", genesisBlock.blockHash);
const genesisBlockNode = new BlockNode(genesisBlock);
buildBlockList(genesisBlockNode);
console.log("\nPrinting Details...\n");
printBlockList(genesisBlockNode);
console.log(verifyBlockChain(genesisBlockNode));
