// main.js

let worker = new Worker(worker.js);

worker.postMessage("Happy Birthday!");

worker.addEventListener("message", function (e) {
  console.log(e.data);
});

// in worker.js

self.addEventListener("message", function (e) {
  console.log("coming here -------");
  var message = e.data + "to me!";
  self.postMessage(message);
  self.close();
});
