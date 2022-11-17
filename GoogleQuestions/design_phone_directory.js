// Design a Phone Directory which supports the following operations:

// get: Provide a number which is not assigned to anyone. check: Check if a number is available or not. release: Recycle or release a number.

// Example:

// // Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
// PhoneDirectory directory = new PhoneDirectory(3);

// // It can return any available phone number. Here we assume it returns 0.
// directory.get();

// // Assume it returns 1.
// directory.get();

// // The number 2 is available, so return true.
// directory.check(2);

// // It returns 2, the only number that is left.
// directory.get();

// // The number 2 is no longer available, so return false.
// directory.check(2);

// // Release number 2 back to the pool.
// directory.release(2);

// // Number 2 is available again, return true.
// directory.check(2);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// public class PhoneDirectory {
//     private int[] numbers;
//     private boolean[] used;
//     private int max;
//     private int next;
//     /** Initialize your data structure here
//         @param maxNumbers - The maximum numbers that can be stored in the phone directory. */
//     public PhoneDirectory(int maxNumbers) {
//         max = maxNumbers;
//         numbers = new int[max];
//         for (int i = 0; i < max; i ++) {
//             numbers[i] = i;
//         }
//         used = new boolean[max];
//         next = 0;
//     }

//     /** Provide a number which is not assigned to anyone.
//         @return - Return an available number. Return -1 if none is available. */
//     public int get() {
//         if (next < max) {
//             int result = numbers[next ++];
//             used[result] = true;
//             return result;
//         }
//         return -1;
//     }

//     /** Check if a number is available or not. */
//     public boolean check(int number) {
//         return number < max && number >= 0 && !used[number];
//     }

//     /** Recycle or release a number. */
//     public void release(int number) {
//         if (used[number]) {
//             next --;
//             numbers[next] = number;
//             used[number] = false;
//         }
//     }
// }
