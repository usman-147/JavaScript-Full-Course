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
// Comparison Operators returns boolean value
let c=5;
let c1=4;
console.log("5 > 4",c>c1);
console.log("5 >= 4",c>=c1);
console.log("5 < 4",c<c1);
console.log("5 <= 4",c<=c1);
let eq=5;
let eq1=5;
console.log("5 == 5",eq==eq1);
let neq=5;
let neq1=2;
console.log("5 != 2",neq!=neq1);
let tc_num=5;
let tc_str="5"; // string 5 get's typecasted to num 5
console.log("Typecasting num to str: ",tc_num==tc_str);
// Stricter version doesn't typecast
let sv=5;
let sv1="5";
console.log("Doesn't typecast: ",sv===sv1);
// Logical Operators
let lo=6;
let lo1=5;
let cond1 = lo!==lo1; // true
let cond2 = lo>lo1; // true
console.log("6 !== 5 && 6>5 ", cond1 && cond2); // true
let cond3 = lo===lo1; // false
let cond4 = lo>=lo1; // true
console.log("6===5 && 6>=5", cond3 || cond4);
console.log("Inverting cond3 ", !(cond3));
// Ternary Operators
let age2 = 25;
let result = age2>=18 ? "adult" : "not adult";
console.log(result);
age2<=18 ? console.log("adult") : console.log("not adult");
// Conditional Statements
// if statement 
let mode = "dark";
let color;
if(mode === "dark"){
    color="black";
}
if(mode === "light"){
    color="white";
}
console.log(color);
// if-else statement
let num=7;
if(num%2 === 0){
    console.log(num, "is even");
}else{
    console.log(num,"is odd");
}
// else-if statement
console.log(age);
if(age<18){
    console.log("junior");
}else if(age>60){
    console.log("senior");
}else{
    console.log("middle");
}
// switch statement from MDN Docs
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
// Practice Set 2
let number = prompt("Enter a number:");
if(number%5 === 0){
    console.log(number, "is a multiple 0f 5!");
}else{
    console.log(number, "is not a multiple of 5!");
}
// My solution - Not Feasible
// let grade=85;
// console.log("Grade: ",grade);
// if(grade>90 || grade===100){
//     console.log("A");
// }else if(grade>70 || grade===89){
//     console.log("B");
// }else if(grade>60 || grade===69){
//     console.log("C");
// }else if(grade>50 || grade===59){
//     console.log("D");
// }else{
//     console.log("F");
// }
// Shradha Khapra's Solution - Feasible
let score=prompt("Enter your score(0-100):");
let grade;
if(score>=90 && score<=100){
    grade="A";
}else if(score>=80 && score<=89){
    grade="B";
}else if(score>=70 && score<=79){
    grade="C";
}else if(score>=60 && score<=69){
    grade="D";
}else{
    grade="F";
}
console.log("According to your score, your Grade is:",grade);
// Loops in JS
for(let count=1;count<=5;count++){
    console.log("Hello! NooB Usman");
}
// Calculate sum of 1 to 5
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum = ",sum);
// Print 1 to 5
for(var i=0;i<=5;i++){ // prefer using let
    console.log("i = ",i);
}
console.log(i); //var would print 6, bcoz it's a global variable, whereas let would give ERROR bcoz it's a block-scope
// while loop
let i1=1;
while(i1<=10){
     console.log("While = For");
     i1++;
}
// do-while loop
let i2=20;
do{
     console.log("Runs atleast 1 time");
     i2++;
}while(i2<=10); // bcoz checks the condition later
// for-of loop
let str="Mohammed Usman";
let size=0; // so that when 1 character prints the count is 1
// same as for-each loop in Java : is replaced by of
for(let val of str){ //iterator -> character
    console.log("Value = ",val);
    size++;
}
console.log("Size of string = ",size);
// for-in loop
// previously used example
// const student = {
//     name : "Mohammed Usman",
//     age : 21,
//     cgpa : 8.3,
//     isPass : true,
// };
for(let key in student){
    console.log("Key = ",key,"and Value = ",student[key]); //student["key"] will try to find actual key named key in student object
}
// Practice Set 3
for(let ps3=0;ps3<=100;ps3++){
    if(ps3%2===0){ // === even !== odd
        console.log("Even = ",ps3);
    }
}
// Guessing random game number
let gameNum=25; // in order to match with prompt make gameNum="25";
let userNum=prompt("Guess the game number:");
while(userNum!=gameNum){ // why !== bcoz prompt takes string, so it won't match with int
    userNum = prompt("You guessed the wrong number. Guess again!"); // let can be updated
}
console.log("Congratulations! You guessed the correct number.");
// String in JS
// let str="Mohammed Usman";
console.log(str.length);
console.log("First Character of First Name is:",str[0]);
console.log("First Character of Last Name is:",str[9]);
// Template Literals in JS
let speacialString = `This is a template literal`;
console.log(speacialString);
let obj = {
    item:'pen',
    price:10,
};
// console.log("The cost of", obj.item, "is", obj.price, "rupees.");
let output=`${1+2+3}The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);
// Escape Characters
let slashN=`Next\nLine`;
console.log(slashN);
console.log(`Length = ${slashN.length}`); // \n counted as 1 character
let slashT=`Tab\tSpace`;
console.log(slashT);
console.log(`Length = ${slashT.length}`); // \t counted as 1 character
// String Methods in JS
// toUpperCase()
let stuc="mohammedusman"
// stuc.toUpperCase(); will not tamper
stuc=stuc.toUpperCase(); //will modify as let variable could be updated
console.log(`Coverted from Lower to Upper: ${stuc}`);
// toLowerCase()
let stlc="MOHAMMED USMAN";
stlc=stlc.toLowerCase();
console.log(`Coverted from Lower to Upper: ${stlc}`);
// trim() - removes whitespaces only at the start and end of a string not in between the string
let trim="      Testing Trim    in JS   ";
console.log(`Trimmed String: ${trim.trim()}`);
// slice(starting,ending) // ending index is a non-inclusive sequence means it doesn't get printed
let numslice="0123456789";
console.log(`Sliced version: ${numslice.slice(2,7)}`); // starting index is mandatory
let strslice="EStarting";
console.log(`Sliced version with only starting: ${strslice.slice(1)}`); // slicing 0 from 1 prints the complete string
// concat()
let con1="Mohammed";
let cat2="Usman";
console.log(`Concatenating str2 to str1: ${con1.concat(cat2)}`);
// let result=con1+cat2; this is also string concatenation
// replace(searchVal,newVal)
let replace="hello";
console.log(`Replaced String: ${replace.replace("h","m")}`);
let replaceAll="helololo";
console.log(`All Replaced Version: ${replaceAll.replaceAll("lo","lp")}`);
let charAt="ILoveJS";
console.log(`Feasible Method: ${charAt[0]}`);
console.log(`Functional Method: ${charAt.charAt(0)}`);
// Practice Set 4
let userName=prompt("Enter your Full Name:");
let attherate="@";
let count=userName.length;
console.log(`Generated username is ${attherate.concat(userName,count)}`);
// Arrays in JS
let marks=[97,82,75,64,36];
console.log(marks);
console.log(marks.length);
console.log(typeof marks); // object
let info=["Usman",21,"Bangalore"]; // mixing of types not preferred
// Array Indices
console.log(marks);
marks[0]=86;
console.log(marks);
console.log(marks[100]); // undefined: if value at the index doesn't exist
// Looping over an Array
for(let i=0;i<marks.length;i++){ //marks.length = index+1;
    console.log(marks[i]);
}
// for(let i=1;i<=marks.length;i++){ 
//     console.log(marks[i-1]); why i-1?? it skips first index so 1-1=0, 2-1=1; 3-1=2; 4-1=3; 5-1=4; prints all 0-4: 5 values
// }
// for-of loop
for(let mark of marks){
    console.log(mark);
}