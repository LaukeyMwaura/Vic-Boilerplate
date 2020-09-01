// 1.Prototypes and how to add new elements
function Bike(model, color) {
    this.model = model,
        this.color = color,
        this.getDetails = function() {
            return this.model + ' bike is ' + this.color;
        }
}
var bikeObj1 = new Bike('BMW', 'BLACK');
var bikeObj2 = new Bike('BMW', 'WHITE');
console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE

// 2.Get a random item from an array
var items = [12, 548, 'a', 2, 5478, 'foo', 8852, , 'Doe', 2145, 119];

var randomItem = items[Math.floor(Math.random() * items.length)];
console.log(randomItem)

// 3.const arrow function ES6
const x = (x, y) => x * y;

//4.Self Invoking 
(function() {
    var x = "Hello!!"; // I will invoke myself
    console.log(x)
})();

//5. Generate an array of numbers with numbers from 0 to max
var numbersArray = [],
    max = 100;

for (var i = 1; numbersArray.push(i++) < max;); // numbers = [1,2,3 ... 100]

console.log(numbersArray)

//6. Generate random sets of alphabets
function generateRandomAlphaNum(len) {
    var rdmString = "";
    for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);

}

//7. shuffle an array of items
var numbers = ["sisi", "mimi", 120, -215, 228, 400, 122205, -85411];
numbers = numbers.sort(function() { return Math.random() - 0.5 });
/* the array numbers will be equal for example to [120, 5, 228, -215, 400, 458, -85411, 122205]  */
console.log(numbers)

//8. append an array to others
var array1 = [12, "foo", { name: "Joe" }, -2458];
var array2 = ["Doe", 555, 100];
var combined = Array.prototype.push.apply(array1, array2);
console.log(combined)
    /* array1 will be equal to  [12 , "foo" , {name "Joe"} , -2458 , "Doe" , 555 , 100] */


// 9. Input a numbers and it MAPS and in this example it square roots
var numbers = [4, 9, 16, 25];
var square_rooted_values = numbers.map(Math.sqrt)
    /* document.getElementById("demo").innerHTML = square_rooted_values;*/
console.log(square_rooted_values)

// 10. Verify that a given argument is a number
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
// 11.Verify is an argument is an array
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
// 12.Max and  Min of an array
var numbers = [5, 268, 458, 120, -215, 228, 400, 122205, -85411];
var maxInNumbers = Math.max.apply(Math, numbers);
var minInNumbers = Math.min.apply(Math, numbers);
console.log(maxInNumbers);
console.log(minInNumbers);
// 13. Empty an array
var myArray = [12, 222, 1000];
myArray.length = 0; // myArray will be equal to [].
// 14.adds/removes items to/from an array, and returns the removed item(s).
var items = [12, 548, 'a', 2, 5478, 'foo', 8852, , 'Doe', 2154, 119];
items.length; // return 11 
items.splice(3, 1);
items.length; // return 10 
/* items will be equal to [12, 548, "a", 5478, "foo", 8852, undefined × 1, "Doe", 2154,       119]   */
// 15. Truncate an array using length
var myArray = [12, 222, 1000, 124, 98, 10];
myArray.length = 4; // myArray will be equal to [12 , 222 , 1000 , 124].
// 16.Logical AND/OR conditions
var foo = 10;
doSomething = "a value"
foo == 10 && doSomething; // is the same thing as if (foo == 10) doSomething(); 
foo == 5 || doSomething; // is the same thing as if (foo != 5) doSomething();
//17. Rounding number to N decimal place
var num = 2.443242342;
num = num.toFixed(4); // num will be equal to 2.4432 but a string
num = parseInt(num);
console.log(typeof(num));
// 18.for-in loop to check properties of an object
for (var name in object) {
    if (object.hasOwnProperty(name)) {
        // do something with name                    
    }
}
// 19.For loop
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
// 20.For/In Loop
var person = { fname: "John", lname: "Doe", age: 25 };

var text = "";
var value;
for (x in person) {
    text += person[x];
}
// 21. For/Of Loop in an array
var cars = ['BMW', 'Volvo', 'Mini'];
var value;

for (x of cars) {
    document.write(x + "<br >");
}
// 22.Looping over a String
var txt = 'JavaScript';
var value;

for (x of txt) {
    document.write(x + "<br >");
}
// 23.Storing in local storage
var myArray = [1, "word", 23, -12, "string"]; //your list of values, they can be strings or numbers

//SAVING
function save(a, b, c, d, e) { //the number of parameters you add is how many items you save
    var itemArray = [a, b, c, d, e]; //number of items here must be the same as number of parameters
    var keyArray = ["one", "two", "three", "four", "five"]; //must be same length as itemArray
    for (var i = 0; i < keyArray.length; i++) {
        if (typeof(itemArray[i]) === "number") {
            itemArray[i] = "+" + itemArray[i]; //leave a reminder that it was a number
        }
        if (typeof(itemArray[i]) !== undefined) {
            localStorage.setItem(keyArray[i], itemArray[i]); //only add a value to the current key if it's not undefined
        }
    }
}
//to use the function (whenever you want to save):
save.apply(this, myArray); //assuming that myArray is the array you want to set

//LOADING
function load() {
    var list = [];
    var keyArray = ["one", "two", "three", "four", "five"];
    for (var i = 0; i < keyArray.length; i++) {
        var item = localStorage.getItem(keyArray[i]);
        if (item.charAt(0) == "+") {
            item = parseFloat(item.substring(1));
        }
        list.push(item);
    }
    return list;
}
//to use the function
myArray = load(); //sets your array back to how it was when you saved it