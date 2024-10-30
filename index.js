// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
  const amtNumbers = this.data.length;
  return amtNumbers;
  }
  printNumbers() {
  console.log(this.data);
    //print the numbers in data
  }
  odds() {
    let count = 0;
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i] %2 !== 0){
        count++;
      }
    }
    return count;
}
    //return the odd numbers in data
  
  evens() {
    let count = 0;
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i] %2 === 0){
        count++;
      }
    }
    return count;
    //return the even numbers in data
  }
  sum() {
    let sum = 0;
    for (let num of this.data) {
      sum += num;
    }
    return sum;
    //return the sum of the numbers
  }
  product() {
    let product = 1;
    for (let num of this.data) {
      product *= num;
    }
    return product;
    //return the product of the numbers
  }
  greaterThan(target) {
    const result = [3];
    for (const num of this.data) {
      if (num > target) {
        result.push(num);
      }
    }
    return result;
  
    //return the numbers greater than the target
  }
  howMany(target) {
    let count = 0;
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i] === 3){
        count++;
      }
    }
    return count;
    //return the count of a given number
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
