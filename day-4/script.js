let arr=[10,"hello",332.14,"true"]
console.log(arr)
arr.push(45)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift()
console.log(arr)
console.log(arr.length)
let obj1= {
    id: 1,
    name:"srikala",
    age: 21,
    salary: 123456789,
    techStact: ["Python","HTML","CSS"]
}
console.log(obj1)
console.log(obj1.techStact[1])
let data=[
    {
        id: 1,
        name: "srikala",
        age: 21,
        salary: 123456789 
    },
    {
        id: 2,
        name: "jesmitha",
        age: 23,
        salary: 234567891
    }
]
console.log(data[0])

// Create an array of 5 student names and print them using a for loop.

// Add, remove, and update elements in an array using:
// push()
// pop()
// splice()


let arr1=["srikala","veda","tejaswi","jesmitha","geetha"];
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}
arr1.push()
arr1.pop()
console.log(arr1)
arr1.splice(1,0,"sri","kala")
console.log(arr1)

// Create an object for a mobile phone with properties:
// brand
// model
// price
// Print all values in the console.

let obj=[
    {
        brand:"Samsung",
        model:"A16",
        price:23000,
    },
    {
        brand:"iphone",
        model:"pro17",
        price:150000
    }
]
console.log(obj[1])


// Write a program using switch statement to display the day of the week.

let weekday = Number(prompt("enter the day number:")); 
switch (weekday) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Enter the valid input.");
}