// 1st JS Code
console.log("Hello, Mohammed Usman!");
// Variables in JS
fullName="Mohammed Usman";
age=21;
NULL=null;
UNDEFINED=undefined;
isFollow=true;
console.log(fullName);
console.log(age);
console.log(NULL);
console.log(UNDEFINED);
console.log(isFollow);
// Variable Rules
caseSensitive=null;
CaseSensitive=null;
onlyLettersDigitsUnderscore$=null;
letterAtStarting=null;
_AtStarting=null;
$AtStarting=null;
// 1Notvalid=null;
// Keyword: var
var age=24;
var age=59;
var age=86;
console.log(age);
// Keyword: let
let age1=24;
age1=59;
age1=86;
console.log(age1);
// Initialized Later
let a;
console.log(a); // prints undefined
let a1;
a1=10;
console.log(a1);
// Block Scope Variable
{
    let a=5;
    console.log(a);
}
{
    let a=10;
    console.log(a);
}
// Keyword: const
const PI=3.14;
console.log(PI);
// Block Scope Variable
{
    const a=5;
    console.log(a);
}
{
    const a=10;
    console.log(a);
}
// Primitive Data Types in JS
let nul=null;
console.log(typeof(nul)); // object
let x=BigInt("123");
console.log(typeof(x));
let y=Symbol("Hello!");
console.log(typeof(y));
// Non-Primitive Data Types in JS
const student = {
    name : "Mohammed Usman",
    age : 21,
    cgpa : 8.3,
    isPass : true,
};
console.log(student);
console.log(student.age);
console.log(student["age"]);
//Update variables of objects
student["age"]=student["age"]+1;
student["name"]="Mohammed-Usman";
// Practice Set 1
const product = {
    title:"Ball Pen",
    rating:5,
    isDeal:true,
    price:270,
    offer:50,
}
console.log(product);
//Arithmetic Operators
let a2=5;
let b2=2;
// let c=a+b;
console.log("a =",a2,"& b =",b2);
console.log("a + b = ",a2+b2);
console.log("a - b = ",a2-b2);
console.log("a * b = ",a2*b2);
console.log("a / b = ",a2/b2);
console.log("a % b = ",a2%b2);
console.log("a ** b = ",a2**b2);
// Unary Operators
console.log("Unary Operators:");
console.log("Post-Increment:");
a2++;
console.log("a++ = ",a2);
console.log("Post-Decrement:");
b2--;
console.log("b-- = ",b2);
console.log("Pre-Increment:")
++a2;
console.log("++a = ",a2);
console.log("Pre-Decrement:")
--b2;
console.log("--b = ",b2);
// Assignment Operators
let ao=7;
console.log("Assignment Operator: ",ao);
console.log("a+=1",ao+=1);
console.log("a-=2",ao-=2);
console.log("a*=3",ao*=3);
console.log("a/=4",ao/=4);
console.log("a%=5",ao%=5);
console.log("a**=6",ao**=6);