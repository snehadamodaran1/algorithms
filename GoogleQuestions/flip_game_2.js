// Description
// You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

// Write a function to determine if the starting player can guarantee a win.

// Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)

// Example
// Example1

// Input:  s = "++++"
// Output: true
// Explanation:
// The starting player can guarantee a win by flipping the middle "++" to become "+--+".
// Example2

// Input: s = "+++++"
// Output: false
// Explanation:
// The starting player can not win
// "+++--" --> "+----"
// "++--+" --> "----+"
function canWin(s) {
  // write your code here

  if (s.length() < 2) return false;

  for (let i = 0; i < s.length() - 1; i++) {
    // 找到一个含++的情况
    if (s[i] == s[i + 1] && s[i] == "+") {
      let tmp = s;
      tmp[i] = tmp[i + 1] = "-";

      // 到对手走，如果对手赢不了，就是我们赢
      if (!canWin(tmp)) return true;
    }
  }

  // 没有翻转的情况，即没有操作空间
  return false;
}
