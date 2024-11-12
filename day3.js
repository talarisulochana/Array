
var fruits=["mango", "apple", "grapes","orange"]
var lengthOffruits=fruits.length;
console.log(lengthOffruits)
console.log(fruits)

var fruits=["mango", "apple", "grapes","orange"]
fruits.push("banana","cherry","green apple")
console.log(fruits)

fruits.pop();
fruits.pop();
console.log(fruits)

fruits.unshift("pineapple","dragon fruit")
console.log(fruits)

fruits.shift();
console.log(fruits)

var Str="Hello World"
var split=Str.split(" ");
console.log(split.reverse());

var fruits=["mango", "apple", "grapes","orange","pineapple","dragon fruit"]
console.log(fruits.indexOf("mango"))
console.log(fruits.indexOf("pineapple"))

var Num=["one","two","three","four","five"]
console.log(Num.includes("two"));
console.log(Num.includes("ten"));

var array=[3,1,2,4,5,6]
array.sort()
console.log(array);

var joinwords=split.join(" ")
console.log(split)
var joinwords=split.join(" ")
console.log(joinwords);

var vegetables = ["potato", "tomato", "onion", "carrot"];
vegetables.push("cabbage")
vegetables.shift()
console.log(vegetables)

var arr = [ "ramesh", "rohit", "nithish"];
var rev_arr = arr.reverse();
var joinwords = arr.join("   ")
console.log(joinwords)


var nuts = [ "almonds", "walnuts", "cashews", "pistachios"];
nuts.sort()
nuts.pop()
console.log(nuts)


var tools = [ "tester", "bolts", "hammer"];
tools.unshift("plaster", "nuts")
tools.shift()
var tools = tools.length;
console.log(tools)


var arr = [ "banana", "apple", "watermelon", "grapes"];
var arr1 = ["orange", "blackberry"];
var concatPart = arr.concat(arr1);
concatPart.sort()
concatPart.pop()
console.log(concatPart)
