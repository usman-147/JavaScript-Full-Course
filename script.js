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