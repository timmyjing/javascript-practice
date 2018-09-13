/* 
1.1 Implement an algorithm to determine if a string has all unique characters. What
if you cannot use additional data structures?

Pseudocode
Naive Solution: Build a hash to keep track of all the counts of letters. O(n) time, O(n) space
Alternatively, can just used a nested loop to check for another occurence of each char. O(n^2) time
but O(1) space
*/

const uniqueChars = str => {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (char === str[j]) return false;
    }
  }
  return true;
}

// console.log(uniqueChars('abc'));
// console.log(uniqueChars('aabc'));
// console.log(uniqueChars('abcdee'));

/* 
1.2 Implement a function void reverse(char* str) in C or C++ which reverses a nullterminated
string.

*/



/* 
1.3 Given two strings, write a method to decide if one is a permutation of the other. 

Would ask clarifying question...do we care if arg1 is perm of arg2 or vice versa or order doesn't matter?
EDIT Turns out permutation is if one argument is just a rearrangement of the second argument.
A solution would be to build a count of all the letters in argument 1 and argument 2 and make sure
the counts in both match up. Could use a helper method to count chars to check equality.

*/

const isPermutation = (str1, str2) => {
  // not a permutation if lengths are different
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (!countChar(str1[i], str1, str2)) return false;
  }

  return true;
}

const countChar = (char, str1, str2) => {

  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < str1.length; i++ ) {
    if (str1[i] === char) count1++;
    if (str2[i] === char) count2++;
  }
  return count1 === count2;
}

// console.log(isPermutation('abcdefg', 'abc'))
// console.log(isPermutation('abc', 'abc'))
// console.log(isPermutation('abc', 'bbb'))
// console.log(isPermutation('abc', 'cba'))


/* 
1.4 Write a method to replace all spaces in a string with'%20'. You may assume that
the string has sufficient space at the end of the string to hold the additional
characters, and that you are given the "true" length of the string. (Note: if implementing
in Java, please use a character array so that you can perform this operation
in place.)
EXAMPLE
Input: "Mr John Smith     "
Output: "Mr%20Dohn%20Smith" 

Very trivial to do in JS...can just do a simple split by spaces and then join by the string '%20'.
Could also build a new string by iterating through the argument string and placing the replacement string
whenever there is a space. Also possibly a replace method that can be used along with regex.

*/

const replaceString = str => str.trim().split(" ").join("%20");

// console.log(replaceString('Mr John Smith     '));
// console.log(replaceString("MrJohnSmith    "));
// console.log(replaceString("The bear"));

/*
1.5 Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become
a2blc5a3. If the "compressed" string would not become smaller than the original
string, your method should return the original string.

Iterate through the string, keep track of the current repeated char and the count. If the 
next char is different than the repeated char, add the current repeated char and count to the 
result and start a new running count with the new char. Have to add the last repeated char and count 
once loop is done for edge cases. Check result length vs original length.
*/

const stringCompression = str => {
  if (str.length <= 1) return str;

  let result = "";
  let lastChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === lastChar) {
      count++;
    } else {
      result += `${lastChar}${count}`;
      lastChar = str[i];
      count = 1;
    }
  }

  result += `${lastChar}${count}`;

  result = result.length < str.length ? result : str;

  return result;
}

// console.log(stringCompression('aaabbbbccccd'));
// console.log(stringCompression('aabcccccaaa'));
// console.log(stringCompression('a'));

/*
1.6 Given an image represented by an NxN matrix, where each pixel in the image is
4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
place?

123   369
456   258
789   147
Enumerate through the rows and build the result columns. Can do this in place by swapping elements.
*/

const rotateImage = img => {
  let result = [];
  let n = img.length - 1;

  for (let i = 0; i < img.length; i++) {
    let row = [];
    for (let j= 0; j < img.length; j++) {
      row.push(img[j][n - i]);
    }
    result.push(row);
  }

  return result;
}

// console.log(rotateImage( [[1,2,3], [4,5,6], [7,8,9]] ));

/*
1.7 Write an algorithm such that if an element in an MxN matrix is 0, its entire row
and column are set to 0.

in 01  out 00   in 011  out 000
   11      01      011      000
                   110      000

If done in place, the whole array will just become 0. Keep track of a duplicate array.  

*/



