function manipulateStudentRecord(obj, op, prop, newValue) {
  if (op === "delete") {
    if (obj.hasOwnProperty(prop)) {
      delete prop;
    }
    return obj;
  } else if (op === "edit") {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = newValue;
    }
    return obj;
  }
}

obj = { name: "sneha", lastname: "damu", city: "bengaluru" };

console.log(manipulateStudentRecord(obj, "edit", "state", "karnataka"));
