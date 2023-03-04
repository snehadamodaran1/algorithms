// eg1.
// call() function

let name = {
  firstname: "Sneha",
  lastname: "Damodaran",
  printFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};
name.printFullName();
let name2 = {
  firstname: "Akshay",
  lastname: "Saini",
};
// function borrowing
name.printFullName.call(name2);

//eg2
//keep func outside
function printFullName(state, hometown, food) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      state +
      " " +
      hometown +
      " " +
      food
  );
}
let name1 = {
  firstname: "Sneha",
  lastname: "Damodaran",
};

// function borrwing -  invoke function directly by passing reference which point to this variable inside method
printFullName.call(name1, "karnataka", "bangalore", "dosa"); // ----call

// only difference btw call and apply is the way we pass args
// in apply(), we pass it as a list array
printFullName.apply(name1, ["karnataka", "bangalore", "dosa"]); // ----apply

// bind is called same like call but it returns a function - bind the object with the function (does not directly invoke but gives you copy of same method)
var printMyName = printFullName.bind(name1, "karnataka", "bangalore", "dosa");
console.log(printMyName);
printMyName();
