// ************** Logging
// console.log("hello world");
// console.error("hello world");
// console.warn("hello world");
// alert("hello world")
// prompt("Please enter your name")
// console.log(prompt("Please enter your name"));
// var confirm = confirm("Hello world")
// console.log(confirm);

// ************** Declaring variables
// var firstname = "Rafik";
// var age = "32";
// firstname = "Mohamed";
// age = 20;

// console.log(age, firstname);

// ************** Data types
// ************** Primitive types
// var name = "Ahmed" //String
// var age1 = "20" //String
// var age2 = 20 //Number
// var rating = 3.5 //Number
// var isPerson = true //boolean
// var x = null; //null
// var z; //undefined

// console.log(typeof z);

// ************** Complex types
// ************** Arrays
// var numbers = [1, 2, 3, 4, 5];
// var fruits = ["apples", "oranges", "pears"];
// var array = ["sleep", 33, true];
// console.log(array);

// var arrayOfObjects = [
//     {name: "Ahmed"}, {name: "Halima"}
// ]
// console.log(arrayOfObjects);

// ************** Objects
// var person = {
//     name: "Wael",
//     age: 32,
//     isPerson: true,
//     hobbies: ["sleep", "gaming"]
// }
// console.log(person);

// ************** Functions
// function greet() {
//     return "Hello Ahmed"
// }
// console.log(greet());

// function greetName(name) {
//     return "Hello " + name
// }
// console.log(greetName("Mohamed"));

// function addition(a, b) {
//     var sum = a+b;
//     return sum
// }
// console.log(addition(5, 2));

// ************** String concatination
// var name = "Ahmed";
// var age = 19;

// console.log("My name is " + name + " and I'am " + age + " years old.");

// ************** String methods
// var s = "Hello World";
// var val;
// console.log(s);

// // get length
// val = s.length;
// console.log(val);

// // get value of index
// console.log(s[0]);

// // change case
// val = s.toUpperCase();
// console.log(val);
// val = s.toLowerCase();
// console.log(val);

// // get sub string
// val = s.substring(0, 7);
// console.log(val);

// // split into array
// val = s.split("");
// console.log(val);

// // join
// val = val.join(".");
// console.log(val);

// ************** Array methods
// var colors = ["black", "white", "yellow", "green"];
// console.log(colors);

// // length
// console.log(colors.length);

// // get one value
// console.log(colors[1]);

// // add value using push
// colors.push("blue");
// console.log(colors);

// // add using unshift
// colors.unshift("orange");
// console.log(colors);

// // remove last value
// colors.pop();
// console.log(colors);

// // remove first value
// colors.shift();
// console.log(colors);

// // change a value
// colors[2] = "orange";
// console.log(colors);

// // check if array
// console.log(typeof colors);
// console.log(Array.isArray(colors));

// // get index
// console.log(colors.indexOf("green"));

// ************** Arithmetic operators
// console.log(13 + 2);
// console.log("13" + 2);
// console.log(13 - 2);
// console.log("13" - 2);
// console.log(3 * 2);
// console.log("3" * "2");
// console.log(typeof ("3" * "2"));
// console.log(3 * "text");
// console.log("10" / "2");
// console.log(10 % 2);
// console.log(10 % 3);
// console.log(3 ** 2);
// console.log("3" ** "2");

// var i = 0;
// console.log(i);
// // Prefix increment (++i)
// console.log(++i);
// console.log(i);

// var i = 0;
// console.log(i);
// // Postfix increment (i++)
// console.log(i++);
// console.log(i);

// ************** Comparison operators
// console.log(5 == 5);
// console.log("5" == 5);
// console.log(5 != 10);
// console.log("5" != 10);
// console.log(5 === 5);
// console.log("5" === 5);
// console.log(5 !== 10);
// console.log(5 !== 5);
// console.log(5 < 10);
// console.log(5 <= 10);
// console.log(5 > 10);
// console.log(5 >= 10);

// ************** Object Literals
// var person = {
//     // an object is a collection of key-value pairs
//     name: "Wael",
//     age: 32,
//     isPerson: true,
//     hobbies: ["sleep", "gaming"],
//     address: {
//         city: "nabeul",
//         code: 8000
//     }
// }
// console.log(person);

// // get single value (obj.key)
// console.log(person.name);
// console.log(person.address.code);

// // add property
// person.email = "wael@gmail.com"
// console.log(person);

// // update property
// person.name = "Mohamed";
// console.log(person);

// // delete property
// delete person.email;
// console.log(person);

// ************** Array of objects
// var arrayOfObjects = [
//     {name: "Ahmed", age: 19}, {name: "Halima"}
// ]
// console.log("Array of Objects: ", arrayOfObjects);
// console.table(arrayOfObjects);

// ************** Truthy & Falsy
// 6 falsy values in javascript: undefined, null, NaN, "", 0, false
// console.log(Boolean(undefined));

// ************** Logical operators
// ************** X && Y
// returns first value IF falsy else returns second value if truthy
// console.log(0 && 5);
// console.log(5>0 && 5<10); //true && true
// console.log(5>0 && 5>10); //true && false
// console.log(5<0 && 5<10); //false && true

// ************** X || Y
// returns first value IF truthy else returns second value if falsy
// console.log(0 || 5);
// console.log(5>0 || 5<10); //true || true
// console.log(5>0 || 5>10); //true || false
// console.log(5<0 || 5<10); //false || true

// ************** Loops
// ************** For
// for(var i = 0; i <=10; i++) {
//     console.log(i);
// }

// var array = [10, 20, 30];
// for(var i=0; i<array.length; i++) {
//     console.log(array[i]);
// }

// ************** For .. in
// var array = [10, 20, 30];
// for(var i in array) {
//     console.log(array[i]);
// }

// ************** For .. of
// var array = [10, 20, 30];
// for(var value of array) {
//     console.log(value);
// }

// ************** While
// var array = [10, 20, 30];
// var sum = 0;
// var i = 0;
// while (i<array.length) {
//     sum = sum + array[i];
//     i++;
//     console.log("sum inside:", sum);
// }
// console.log("sum outside:", sum);

// ************** Do ... While
// var array = [10, 20, 30];
// var sum = 0;
// var i = 0;
// do {
//     sum = sum + array[i];
//     i++
//     console.log("sum inside:", sum);
// } while (i<array.length)
// console.log("sum outside:", sum);

// ************** Conditionals
// ************** If..Else
// var x = "10";
// if (x === 10) {
//     console.log("x is equal to 10");
// } else if (x > 10) {
//     console.log("x is greater than 10");
// } else if (x < 10) {
//     console.log("x is less than 10");
// } else {
//     console.log("x is not a number");
// }

// ************** switch
// var color = "green";
// switch (color) {
//     case "red":
//         console.log("color is red");
//         break;
//     case "blue":
//         console.log("color is blue");
//         break;
//     default:
//         console.log("color is neither red nor blue");
// }

// function testColor(color) {
//     switch (color) {
//         case "red":
//             return "color is red";
//         case "blue":
//             return "color is blue";
//         default:
//             return "color is neither red nor blue";
//     }
// }

// console.log(testColor("red"));

// ************** Break / Continue
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// var sum = 0;
// for (var i in numbers) {
//     if (i % 2 == 0) continue;
//     sum += numbers[i]
//     // sum = sum + numbers[i]
//     console.log(sum);
// }
// console.log(sum);

// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// var sum = 0;
// for (var i in numbers) {
//     sum += numbers[i];
//     console.log(sum);
//     if (sum >= 100) {
//         break;
//     }
// }
// console.log(sum)