function processData(input) {
  //Enter your code here
  let str = input[0].split(" ")[1];
  console.log(str);
  let strStack = [];
  for (let i = 0; i < input.length; i++) {
    let splitted = input[i].split(" ");
    let prevStr = str;
    if (splitted[0] == 1) {
      str = str + splitted[1];
      strStack.push(str);
      console.log(splitted[0], str);
    } else if (splitted[0] == 2) {
      let newstr = str.substring(0, str.length - splitted[1]);
      str = newstr;
      strStack.push(str);
      console.log(splitted[0], str);
    } else if (splitted[0] == 3) {
      console.log("----", str[splitted[1] - 1]);
      console.log(splitted[0], str);
    } else if (splitted[0] == 4) {
      str = strStack.pop();
      console.log(splitted[0], str);
    }
  }
}

ops = ["1 abc", "3 3", "2 3", "1 xy", "3 2", "4", "4", "3 1"];
processData(ops);
