function ArrayChallenge(strArr) {
  let arr = [];
  let sortedArr = [];

  for (let i = 0; i < strArr.length; i++) {
    arr.push(strArr[i].split("-"));
  }
  const sortedAppointments = arr.sort(
    (a, b) =>
      moment(a.start, "h:mm a").unix() - moment(b.start, "h:mm a").unix()
  );
  console.log(arr, sortedAppointments);
  // code goes here
  return strArr;
}

// keep this function call here
console.log(
  ArrayChallenge(["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"])
);
