let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
  console.log("btn1 was clicked!");
  let a = 25;
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
  console.log(
    `Horizontal clicking position: ${e.clientX} Vertical clicking position: ${e.clientY}`
  );
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
};

evtlst.addEventListener("click", (e) => {
  console.log("Event listener was clicked - Handler4");
});

btn1.removeEventListener("click", handler3);

let toggleButton = document.querySelector("#toggleButton");
let body = document.querySelector("body");
let mode = "light";

toggleButton.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    // document.querySelector("body").style.backgroundColor="black";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    mode = "light";
    // document.querySelector("body").style.backgroundColor="white";
    body.classList.remove("dark");
    body.classList.add("light");
  }
  console.log(mode);
});

// Prototypes in JS
const student = {
  fullName: "Mohammed Usman",
  marks: 85.76,
  printMarks: function () {
    console.log(`marks = ${this.marks}`); // this.marks refers to student.marks
  },
};
console.log(student);
console.log(`Prototype toString : ${student.toString}`);

// Prototypes in Arrays
let arr = ["apple", "mango", "banana"];
console.log(arr);
console.log(`Prototype push : ${arr.push("litchi")}`);
console.log(arr);

// Creating our own prototype
const employee = {
  calcTax() {
    console.log(`The tax rate is 10%`);
  },
};
console.log(employee);
const karanArjun = {
  salary: 50000,
};
console.log(karanArjun);
karanArjun.__proto__ = employee;

// Classes in JS
class ToyotaCar {
  constructor(brand, mileage) {
    console.log(`creating new object`);
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log(`start`);
  }
  stop() {
    console.log(`stop`);
  }
}
let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12); // if nothings pass gives undefined rather throwing an error
console.log(lexus);

// Inheritance in JS
class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log(`eat`);
  }
  sleep() {
    console.log(`sleep`);
  }
  work() {
    console.log(`do nothing`);
  }
}
class Engineer extends Person {
  work() {
    console.log(`solve problems, build something`);
  }
}
class Doctor extends Person {
  work() {
    console.log(`treat patients`);
  }
}
let usman = new Engineer();
console.log(usman);
let imran = new Doctor();
console.log(imran);

// super keyword
class Person1 {
  constructor() {
    console.log(`enter parent constructor`);
    this.species = "homo sapiens";
  }
}
class Engineer1 extends Person1 {
  constructor(branch) {
    console.log(`enter child constructor`);
    super(); // to invoke parent class constructor
    this.branch = branch;
    console.log(`exit child constructor`);
  }
}
let engObj = new Engineer1("chemical engineering");
console.log(engObj);

class Person2 {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log(`eat`);
  }
}
class Engineer2 extends Person2 {
  constructor(name) {
    super(name);
  }
  work() {
    super.eat();
    console.log(`solve problems, build something`);
  }
}
let engObj1 = new Engineer2("usman");
console.log(engObj1);

// Practice Set 10
let DATA = "secret infromation";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log(`Data = ${DATA}`);
  }
}
class Admin extends User {
  constructor(name, email) {
    super(name, email);
    // this.name=name;
    // this.email=email;
  }
  editData() {
    DATA = "some new value";
  }
}
let student1 = new User("usman", "usman@email.com");
let student2 = new User("imran", "imran@email.com");

let teacher1 = new User("ramesh", "ramesh@email.com");

let admin1 = new Admin("suresh", "suresh@email.com");

// Error Handling
let a = 10;
let b = 15;
let c;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`a+b = ${a + b}`);
try {
  console.log(`a+c = ${a + c}`);
} catch (err) {
  console.log(err);
}
console.log(`a+b = ${a + b}`);

// Synchronous programming in JS
console.log("testing sp 1");
console.log("testing sp 2");
console.log("testing sp 3");

// Asynchronous programming in JS
function hello() {
  console.log("hello");
}
setTimeout(hello, 4000);

console.log("testing asp 1");
console.log("testing asp 2");

setTimeout(() => {
  console.log("hello");
}, 4000);

console.log("doesn't wait for setTimeout, testing asp 3");
console.log("doesn't wait for setTimeout, testing asp 4");

// Callbacks in JS
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
// calculator(1, 2, sum);
calculator(1, 2, (a, b) => {
  console.log(a + b);
});

const hello1 = () => {
  console.log("hello");
};
setTimeout(hello1, 3000);

// Callback Hell
function getData(dataID, getNextData) {
  setTimeout(() => {
    console.log(`data: ${dataID}`);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  console.log("getting data2...");
  getData(2, () => {
    console.log("getting data3...");
    getData(3, () => {
      console.log("getting data4...");
      getData(4);
    });
  });
});

// Promises
let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
  resolve("success");
  // reject("error occured!");
});

function getData1(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`data: ${dataID}`);
      // resolve("success");
      reject("failed");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

// .then() & .catch()
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Second Promise");
    resolve("success");
  });
};

let promise2 = getPromise();
promise2.then((res) => {
  console.log(`promise fulfilled: ${res}`);
});

promise2.catch((err) => {
  console.log(`promise unfulfiled: ${err}`);
});

// Promise Chaining
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1...");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
  console.log("fetching data2...");
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
  });
});

function getData2(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data: ${dataID}`);
      resolve("success");
    }, 2000);
  });
}

getData2(1)
  .then((res) => {
    return getData2(2);
  })
  .then((res) => {
    return getData2(3);
  })
  .then((res) => {
    console.log(res);
  });

// Async-Await
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api(); // 1st call
  await api(); // 2nd call
}
console.log(getWeatherData());

function getData3(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data: ${dataID}`);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  console.log("getting data1...");
  await getData3(1);
  console.log("getting data2...");
  await getData3(2);
  console.log("getting data3...");
  await getData3(3);
  console.log("getting data4...");
  await getData3(4);
  console.log("getting data5...");
  await getData3(5);
}
console.log(getAllData());

// IIFE : Immediately Invoked Function Expression
(async function getAllData() {
  console.log("getting data1...");
  await getData3(1);
  console.log("getting data2...");
  await getData3(2);
  console.log("getting data3...");
  await getData3(3);
  console.log("getting data4...");
  await getData3(4);
  console.log("getting data5...");
  await getData3(5);
})(); // can be used only once, means to access again we have to copy n paste it again!
