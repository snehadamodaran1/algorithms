// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

// Example 1:

// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]
var findItinerary = function (tickets, origin = "JFK") {
  const result = [];

  // graph
  const map = tickets.reduce((acc, [from, to]) => {
    if (acc[from]) {
      acc[from].push(to);
    } else {
      acc[from] = [to];
    }
    return acc;
  }, {});

  console.log(map);
  // sort
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

console.log(
  findItinerary([
    ["MUC", "LHR"],
    ["JFK", "MUC"],
    ["SFO", "SJC"],
    ["LHR", "SFO"],
  ])
);
