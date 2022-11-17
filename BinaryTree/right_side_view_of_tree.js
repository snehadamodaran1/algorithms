function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var rightSideView = function (root) {
  var res = [];
  var traverseRight = function (root, level) {
    if (!root) return;
    if (!res[level]) res.push(root.val); // push the fisrt value in the level -  each level will have one
    traverseRight(root.right, level + 1); // right before left
    traverseRight(root.left, level + 1);
  };
  traverseRight(root, 0);
  return res;
};

// BFS solution
// var rightSideView = function(root) {
// 	if(!root) return []

// 	let queue = [[0,root]], levelObj={},result=[]

// 	while(queue.length>0){
// 		let [level, current] = queue.shift()
// 		if(!levelObj[level]) levelObj[level]=[]
// 		levelObj[level].push(current.val)

// 		if(current.left) queue.push([level+1,current.left])
// 		if(current.right) queue.push([level+1,current.right])

// 	}

// 	for(let key in levelObj){
// 		// push each level last value
// 		result.push(levelObj[key][levelObj[key].length-1])
// 	}
// 	return result
// };

const tree = new Node(
  4,
  new Node(2, new Node(1), new Node(3)),
  new Node(7, new Node(6), new Node(9))
);
console.log(rightSideView(tree));
