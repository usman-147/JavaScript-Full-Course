let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked!");
    let a=25;
    a++;
    console.log(a);
};

let div1 = document.querySelector("#div1");

div1.onmouseover = () => {
    console.log("you are inside div1");
};

let evtobj = document.querySelector("#evtobj");

evtobj.onclick = (e) => {
    console.log(e);
    console.log(`Event Type: ${e.type}`);
    console.log(e.target);
    console.log(`Horizontal clicking position: ${e.clientX} Vertical clicking position: ${e.clientY}`);
};

let evtlst = document.querySelector("#evtlst");

evtlst.addEventListener("click", (e) => {
    console.log("Event listener was clicked - Handler1");
    console.log(e);
    console.log(e.type);
});

evtlst.addEventListener("click", (e) => {
    console.log("Event listener was clicked - Handler2");
});

const handler3 = () => {
    console.log("Event listener was clicked - Handler3");
}

evtlst.addEventListener("click", (e) => {
    console.log("Event listener was clicked - Handler4");
});

btn1.removeEventListener("click",handler3);

let toggleButton = document.querySelector("#toggleButton");
let body = document.querySelector("body");
let mode="light";

toggleButton.addEventListener("click", () => {
    if(mode==="light"){
        mode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.remove("light");
        body.classList.add("dark");
    }else{
        mode="light";
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.remove("dark");
        body.classList.add("light");
    }
    console.log(mode);
});

// Prototypes in JS
const student = {
    fullName:"Mohammed Usman",
    marks:85.76,
    printMarks:function (){
        console.log(`marks = ${this.marks}`) // this.marks refers to student.marks
    },
};
console.log(`Prototype toString : ${student.toString}`);