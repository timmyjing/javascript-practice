/**
 * @param {string} s
 * @return {string}
 expand around center
 iterate through each char, at each char
 treat it as the center. will need to consider
 char as center and center with char and char + 1

 O(n^2) time complexity since expanding. This solution uses O(n) extra space due to slciing
 the substring but could be improved to O(1) if using just indexes in the helper.
 */
var longestPalindrome = function(s) {
  if (s.length === 0) return "";
  if (s.length === 1) return s[0];
  let max = s[0];
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let expandOne = expand(s, i, i);
    let expandTwo = expand(s, i, i + 1);
    
    if (expandOne.length > max.length) {
      max = expandOne;
    }
    
    if (expandTwo.length > max.length) {
      max = expandTwo;
    }
  }
  
  return max;
};


function expand(string, start, end) {
  if (string.length - 1 < end) return "";
  
  if (string[start] !== string[end]) return "";
  
  let result = string.slice(start, end + 1); 
  
  start--;
  end++;
  
  while (string[start] === string[end] && start > -1 && end < string.length) {
    result = string.slice(start, end + 1);
    start--;
    end++;
  }
  
  return result;
}

