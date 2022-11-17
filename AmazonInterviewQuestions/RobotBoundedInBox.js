// There are two ways to make the robot going cicrle:

// after one round it returns to the start position
// after one round it changes direction from the north
// So, I decided to store separately directions and current coordinates:

//  const dir = {
//         x: 0,
//         y: 1,
//     }

//     const coord = {
//         x: 0,
//         y: 0
//     }
// Where dir object means coordinates of the vector: north means vector {0, 1}, west {1, 0}, south {0, -1} and east {-1, 0}.

// Then we just go through each letter of input and check wether it's 'G', 'R' or 'L'.
// In case it's 'G', we change our coordinates depending on dir object:

// coord.x += dir.x;
// coord.y += dir.y;
// In case it's 'L' or 'R' I decided to check every possible case (there are four of them depending on vector's direction): x = 0 and y = 1, x = 0 and y = -1, x = 1 and y = 0, x = -1 and y = 0. There might be a better mathematical approach, if you know how to get rid of unnessary if else conditions, lmk in the comments.

// After going through the whole string we just need to check wether the coordinate is {0, 0} again or the vector doesn't point to north (in this case we will end up coming back eventually), and in this case return true, otherwise return false.

// The whole solution is:

var isRobotBounded = function (instructions) {
  const dir = {
    x: 0,
    y: 1,
  };

  const coord = {
    x: 0,
    y: 0,
  };

  for (let i = 0; i < instructions.length; i++) {
    switch (instructions[i]) {
      case "G":
        coord.x += dir.x;
        coord.y += dir.y;
        break;
      case "L":
        if (dir.x === 0 && dir.y === 1) {
          dir.x = -1;
          dir.y = 0;
        } else if (dir.x === 0 && dir.y === -1) {
          dir.x = 1;
          dir.y = 0;
        } else if (dir.y === 0 && dir.x === -1) {
          dir.y = -1;
          dir.x = 0;
        } else if (dir.y === 0 && dir.x === 1) {
          dir.y = 1;
          dir.x = 0;
        }
        break;
      case "R":
        if (dir.x === 0 && dir.y === 1) {
          dir.x = 1;
          dir.y = 0;
        } else if (dir.x === 0 && dir.y === -1) {
          dir.x = -1;
          dir.y = 0;
        } else if (dir.x === -1 && dir.y === 0) {
          dir.y = 1;
          dir.x = 0;
        } else if (dir.x === 1 && dir.y === 0) {
          dir.y = -1;
          dir.x = 0;
        }
        break;
    }
  }

  if (coord.x === 0 && coord.y === 0) return true;
  if (dir.y !== 1) return true;
  return false;
};
