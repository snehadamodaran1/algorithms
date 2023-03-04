// if a user clicks a button too many times then it will result in API being called multiple times
// after the user stops typing it wait for an interval to execute the func sent

const debounce = (callback, time) => {
  let timer;
  return function () {
    clearTimeout();
    timer = setTimeout(callback, time);
  };
};

// --------------------------------------------------------------------------------------------------
// Throttle will execute the function once in every time interval

let pause;
const throttle = (callback, time) => {
  //don't run the function if throttlePause is true
  if (pause) return;
  pause = true;
  //setTimeout runs the callback within the specified time
  setTimeout(() => {
    callback();
    pause = false;
  }, time);
};

// let pause;
// const throttle = (callback, time) => {
//   if (pause) return;
//   pause = true;
//   setTimeout(() => {
//     callback();
//     pause = false;
//   }, time);
// };
