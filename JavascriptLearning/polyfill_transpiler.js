// A transpiler is a special piece of software that translates source code to another source code.
// It can parse modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.

// eg.
// let height = height ?? 100;

// after running the transpiler
// height = height !== undefined && height !== null ? height : 100;

// Polyfill is a fallback option when a browser does not have a functionality

//---------------------------------------------------------------------
if (!Math.trunc) {
  // if no such function
  // implement it
  Math.trunc = function (number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
console.log(Math.trunc(50.0));
//---------------------------------------------------------------------
function myPromiseAll(taskList) {
  let results = [];
  let promisesCompleted = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((val) => {
          results[index] = val;
          promisesCompleted += 1;
          if (promisesCompleted === taskList.length) resolve(results);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

// calling the promiseAll
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);

//---------------------------------------------------------------------
// polyfill for isArray
function myIsArray(arr) {
  console.log(String(arr.constructor));
  let type = String(arr.constructor);
  if (type === "function Array() { [native code] }") {
    return true;
  } else {
    return false;
  }
}
let obj = { 1: 1, 2: 1, 3: 3 };
// arr = "asdsew";
console.log(myIsArray(obj));

//---------------------------------------------------------------------
// polyfill for Array.flat

function myFlat(arr, output = []) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      myFlat(item, output);
    } else {
      output.push(item);
    }
  }
  return output;
}

// function flat(arr, output = []) {
//   for (item of arr) {
//     if (Array.isArray(item)) {
//       flat(item, output);
//     } else {
//       output.push(item);
//     }
//   }
//   return output;
// }
const arr = [1, 2, [3, [7]], 4];

console.log("Before:", arr);
console.log("After:", myFlat([1, 2, [3, [7]], 4]));

//---------------------------------------------------------------------
// polyfill for Array Filter

function myFilter(arr, callback) {
  let result = [];
  for (let item of arr) {
    callback(item) && result.push(item);
  }
  return result;
}

arrayObj = [2, 9, 4, 6, 5, 8, 7];

console.log(
  "myFilter:",
  myFilter(arrayObj, (item) => item % 2 !== 0)
);
//---------------------------------------------------------------------
// polyfill for Array reduce
const reduce = (arr, callback, initVal) => {
  let result = initVal;

  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }

  return result;
};

const arrred = [1, 2, 3, 4, 5];

console.log(
  "Array reduce",
  reduce(arrred, (acc, item) => acc + item, 0)
);

//---------------------------------------------------------------------

(function () {
  var a = (b = 5);
})();

console.log(b);

//---------------------------------------------------------------------
let obj1 = {
  name: "Jack",
};

let myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`); // id will be undefined
};

Function.prototype.myBind = function (obj1, ...args) {
  let func = this;
  return function (...newArgs) {
    func.apply(obj1, [...args, ...newArgs]);
  };
};

// Function.proptotype.myBind = function (obj1, ...args) {
//   return function (...newArgs) {
//     this.apply(obj, [...args, ...newArgs]);
//   };
// };

let newFunc = myFunc.myBind(obj1, "a_random_id");
console.log(newFunc("New York")); // Jack, a_random_id, New York

function mypromiseAll(taskList) {
  let result = [];
  let completeCount = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = res;
          completeCount++;
          if (completeCount === taskList.length) resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}
console.log(
  "mypromiseAll------",
  mypromiseAll([task(100), task(200), task(300)]).then((res) => {
    console.log(res);
  })
);
