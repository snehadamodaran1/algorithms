/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  canAttendMeetings(intervals) {
    if (intervals.length === 0) return true;
    intervals.sort((a, b) => a.start - b.start);
    var end = intervals[0][1];
    for (var i = 0; i < intervals.length; i++) {
      const start2 = intervals[i].start;
      const end2 = intervals[i].end;
      if (end > start2) {
        return false;
      } else {
        end = end2;
      }
    }
    return true;
  }
}
