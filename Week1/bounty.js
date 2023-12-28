let sum = 0;
for (let i = 1; i < 1000000000000; i++) sum += i;
console.log(sum);
// One thread of core goes to 100%, it can switch bw multiple cores
// see using htop: ubuntu version gives right readings
