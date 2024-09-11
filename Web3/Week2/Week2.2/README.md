# week2.2

```js
new Uint8Array(12) // Store value into bytes (8 bit)
```

#### Encoding 
Representation of binary into different form like base 2, 16, 64, 58

take how many byte at a time

string s = "hello": base 2 -> 01101000 01100101 01101100 01101100 01101111 

1. Uint8Array take 8 bit(1 byte) at a time, => s = [ 104, 101, 108, 108, 111 ] => 5 character

2. Hex encoding: Base 16 : 4 bit at a time => s = 6 8 6 5 6 c 6 c 6 f => 10 character



Hex encoding take 4 bit at at time