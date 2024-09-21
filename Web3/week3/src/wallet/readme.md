# In Blockchain

1. Make a transaction
2. Get info of account

> Done be JSON_RPC (RPC -> remote procedure call)

### Companies provide json rpc server

> Light server that interact with miners on Blockchain to fetch req data

1. Quicknode
2. Alchemy (provide free JSON RPC server)
3. Helius
4. Infura

### Some common Solana RPC server

1. Get account info

Retrieves information about a specific account.

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getAccountInfo",
  "params": ["Eg4F6LW8DD3SvFLLigYJBFvRnXSBiLZYYJ3KEePDL95Q"]
}
```

2. Get Balance

Gets the balance for a given account

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getBalance",
  "params": ["Eg4F6LW8DD3SvFLLigYJBFvRnXSBiLZYYJ3KEePDL95Q"]
}
```

3. Get Transaction count

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "getTransactionCount"
}
```

### Common RPC calls on ETH

1. Get balance

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_getBalance",
  "params": ["0xaeaa570b50ad00377ff8add27c50a7667c8f1811", "latest"]
}
```

2. Get latest block

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_blockNumber"
}
```

3. Get block by number

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_getBlockByNumber",
  "params": ["0x1396d66", true]
}
```

### Wei, Lamports

#### ETH

> Wei:

Wei is the smallest unit of cryptocurrency in the Ethereum network. It's similar to how a cent is to a dollar.

Value: 1 Ether (ETH) = 10^18 Wei.

> Gwei

A larger unit of Ether commonly used in the context of gas prices.

Value: 1 Ether = 10^9 gwei

#### Solana

> Lamports

In the Solana blockchain, the smallest unit of currency is called a lamport. Just as wei is to Ether in Ethereum, lamports are to SOL (the native token of Solana).

1 SOL = 10 ^ 9 Lamports

```js
const { LAMPORTS_PER_SOL } = require("@solana/web3.js");

console.log(LAMPORTS_PER_SOL);
```
