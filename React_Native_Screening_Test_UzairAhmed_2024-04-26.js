Q#1: Write a function that will take an array as input, sort,
 and return the array in descending order.
  For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].

Ans: This implementation of the bubble sort algorithm iterates through the array, 
comparing adjacent elements, and swapping them if they are in the wrong order. 
It repeats this process until the array is sorted in descending order.

function bubbleSortDescending(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
const arr = [3, 2, 7, 4, 6, 9];
const sortedArr = bubbleSortDescending(arr);
console.log(sortedArr); // Output: [9, 7, 6, 4, 3, 2]

Q#2: Write a function that will take a string as input, check and return if it is palindrome or not. 
For example, if the string is “madam” the function should return true and if the string is “doctor” 
it should return false.

Ans: This function first removes non-alphanumeric characters and converts the string to lowercase. 
Then it compares characters from both ends of the string, moving towards the center, 
and returns false if any mismatch is found. If the loop completes without finding any mismatches, 
the function returns true, indicating that the string is a palindrome.

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the string is empty or has only one character (considered palindrome)
    if (cleanStr.length <= 1) {
        return true;
    }
    
    // Iterate through the string and compare characters from both ends
    let left = 0;
    let right = cleanStr.length - 1;
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false; // If characters don't match, it's not a palindrome
        }
        left++;
        right--;
    }
    return true; // If the loop completes, it's a palindrome
}

// Example usage:
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("doctor")); // Output: false


Q#3: Write a function that will take an array as input and return the sum of the two largest
numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
because 11 and 19 are the largest numbers.

Ans: This function iterates through the array once, updating largest1 and largest2 as 
it finds larger numbers. Finally, it returns the sum of these two largest numbers.


function sumOfTwoLargest(arr) {
    let largest1 = -Infinity; // Initialize the first largest number to negative infinity
    let largest2 = -Infinity; // Initialize the second largest number to negative infinity
    
    for (let num of arr) {
        // If current number is greater than the largest number, update both largest numbers accordingly
        if (num > largest1) {
            largest2 = largest1;
            largest1 = num;
        } else if (num > largest2) { // If current number is greater than the second largest number, update only the second largest number
            largest2 = num;
        }
    }
    
    // Return the sum of the two largest numbers
    return largest1 + largest2;
}

// Example usage:
console.log(sumOfTwoLargest([3, 7, 1, 5, 11, 19])); // Output: 30


Q#4: Write a function that will take an array as input and return an array with every missing
element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
entry is 9, and missing numbers are [0,5,8]

Ans: This function iterates through the input array once to find the highest entry. 
Then, it iterates from 0 to the highest entry and checks if each number exists in the input array. 
If a number is not found, it's added to the missingNumbers array. Finally,
 it returns the array containing all the missing numbers.

function findMissingNumbers(arr) {
    // Find the highest entry in the array
    let max = -Infinity;
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    // Initialize an array to store the missing numbers
    let missingNumbers = [];

    // Iterate from 0 to the highest entry and check for missing numbers
    for (let i = 0; i <= max; i++) {
        if (!arr.includes(i)) { // If current number is not found in the input array, add it to missing numbers
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

// Example usage:
console.log(findMissingNumbers([3, 4, 9, 1, 7, 3, 2, 6])); // Output: [0, 5, 8]

Q#5: Write a function that will take an array of numbers and return the number most repeated
in the array with how many times it was repeated. For example, if the array is
[4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times.

Ans: This function first counts the occurrences of each number in the array using an object (countMap). 
Then, it iterates through countMap to find the number with the highest count. 
Finally, it returns the number with its count as a string.


function findMostRepeated(arr) {
    let countMap = {}; // Object to store counts of each number

    // Iterate through the array and count occurrences of each number
    for (let num of arr) {
        if (countMap[num] === undefined) {
            countMap[num] = 1; // Initialize count to 1 if number is encountered for the first time
        } else {
            countMap[num]++; // Increment count if number is already encountered
        }
    }

    let maxCount = 0;
    let mostRepeatedNum = null;

    // Iterate through the countMap to find the number with the highest count
    for (let num in countMap) {
        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            mostRepeatedNum = num;
        }
    }

    return `${mostRepeatedNum} is repeated ${maxCount} times.`;
}

// Example usage:
console.log(findMostRepeated([4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5])); // Output: "4 is repeated 5 times."

Q#6: Write a function that will take an array as input, 
it will rotate the array to the right 1 time and return the rotated array. 
Rotation of the array means that each element is shifted right by one index. 
For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]

Ans: This function creates a new array rotatedArray to store the rotated elements. 
It moves the last element of the input array to the beginning of rotatedArray, 
and then shifts each remaining element to the right by one index. Finally, it returns the rotated array.


function rotateArrayRight(arr) {
    const rotatedArray = [];
    const lastIndex = arr.length - 1;

    // Move the last element to the beginning of the rotated array
    rotatedArray[0] = arr[lastIndex];

    // Shift each element to the right by one index
    for (let i = 1; i <= lastIndex; i++) {
        rotatedArray[i] = arr[i - 1];
    }

    return rotatedArray;
}

// Example usage:
const A = [3, 8, 9, 7, 6];
const rotatedA = rotateArrayRight(A);
console.log(rotatedA); // Output: [6, 3, 8, 9, 7]




