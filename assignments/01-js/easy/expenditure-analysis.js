/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const ops = [];
    function updatePrice(op) {
        let isPresent = false;
        for (let i of ops) {
            if (i.category === op.category) {
                isPresent = true;
                i.totalSpent += op.price;
            }
        }
        if (!isPresent) {
            ops.push({
                category: op.category,
                totalSpent: op.price,
            });
        }
    }
    for (const transaction of transactions) {
        const op = {};
        op.category = transaction.category;
        op.price = transaction.price;
        updatePrice(op);
    }
    return ops;
}

module.exports = calculateTotalSpentByCategory;
