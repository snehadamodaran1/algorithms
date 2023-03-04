self.addEventListener("message", function (e) {
  console.log("coming here -------");
  var message = e.data + "to me!";
  self.postMessage(message);
  self.close();
});
