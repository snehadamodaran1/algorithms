// Design Hit Counter
// Problem:
// Design a hit counter which counts the number of hits received in the past 5 minutes.

// Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.

// It is possible that several hits arrive roughly at the same time.

// Example:

// HitCounter counter = new HitCounter();
// // hit at timestamp 1.
// counter.hit(1);
// // hit at timestamp 2.
// counter.hit(2);
// // hit at timestamp 3.
// counter.hit(3);
// // get hits at timestamp 4, should return 3.
// counter.getHits(4);
// // hit at timestamp 300.
// counter.hit(300);
// // get hits at timestamp 300, should return 4.
// counter.getHits(300);
// // get hits at timestamp 301, should return 3.
// counter.getHits(301);
// Follow up: What if the number of hits per second could be very large? Does your design scale?

// Solutions:

class HitCounter {
  /** Initialize your data structure here. */
  Constructor() {
    this.hits = new Map();
  }

  /** Record a hit.
        // @param timestamp - The current timestamp (in seconds granularity). 
        */
  hit(timestamp) {
    this.hits.set(timestamp, true);
  }

  /** Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
         */
  getHits(timestamp) {
    while (hits.size() > 0 && hits.peek() <= timestamp - 300) {
      this.hits.poll();
    }
    return this.hits.size();
  }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * HitCounter obj = new HitCounter();
 * obj.hit(timestamp);
 * int param_2 = obj.getHits(timestamp);
 */

var counter = new HitCounter();
// // hit at timestamp 1.
counter.hit(1);
// // hit at timestamp 2.
counter.hit(2);
// // hit at timestamp 3.
counter.hit(3);
// // get hits at timestamp 4, should return 3.
counter.getHits(4);
// // hit at timestamp 300.
counter.hit(300);
// // get hits at timestamp 300, should return 4.
counter.getHits(300);
// // get hits at timestamp 301, should return 3.
counter.getHits(301);
