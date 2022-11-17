var findItinerary = function (tickets, origin = "JFK") {
  const result = [];

  // graph
  //   const map = tickets.reduce((acc, [from, to]) => {
  //     if (acc[from]) {
  //       acc[from].push(to);
  //     } else {
  //       acc[from] = [to];
  //     }
  //     console.log(acc);
  //     return acc;
  //   }, {});

  //graph - adjacency matrix
  let map = {};
  for (let i = 0; i < tickets.length; i++) {
    if (map[tickets[i][0]]) {
      map[tickets[i][0]].push(tickets[i][1]);
    } else {
      map[tickets[i][0]] = [tickets[i][1]];
    }
  }
  console.log(map);

  //sort values
  Object.values(map).forEach((to) => {
    to.sort();
  });

  // dfs
  function makeItinerary(from) {
    const tos = map[from];
    while (tos && tos.length > 0) {
      makeItinerary(tos.shift());
    }
    result.unshift(from);
  }

  makeItinerary(origin);

  return result;
};

let tickets = [
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"],
];

// console.log("my hash ", hash);

console.log(findItinerary(tickets));
