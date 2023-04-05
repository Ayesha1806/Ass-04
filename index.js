// Define an array called "shoppingList"
let shoppingList = ["apples", "bananas", "milk", "bread", "eggs"];

// Use forEach() to loop through the array and display each item
shoppingList.forEach(item => console.log(item));

// Use push() to add another item to the end of the array
shoppingList.push("cheese");

// Use pop() to remove the last item from the array
shoppingList.pop();

// Use shift() to remove the first item from the array
shoppingList.shift();

// Use unshift() to add a new item to the beginning of the array
shoppingList.unshift("tomatoes");

// Use filter() to create a new array called "shortList"
let shortList = shoppingList.filter(item => item.length < 6);

// Use map() to create a new array called "capitalList"
let capitalList = shoppingList.map(item => item.charAt(0).toUpperCase() + item.slice(1));

// Use reduce() to calculate the total number of characters in all the items
let totalChars = shoppingList.reduce((acc, item) => acc + item.length, 0);

// Use slice() to create a new array called "partialList"
let partialList = shoppingList.slice(0, 3);

// Use splice() to remove the second and third items from the original list
shoppingList.splice(1, 2);

// Use sort() to sort the remaining items in alphabetical order
shoppingList.sort();

// Display the sorted list in the console
console.log(shoppingList);
