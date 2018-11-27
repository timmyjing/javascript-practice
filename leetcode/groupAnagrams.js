/**
 * @param {string[]} strs
 * @return {string[][]}
 
 split str and sort so each anagram will match in a lexographical order
 key into a hash (note: cant get object to work on this problem) and push
 into the array of anagrams
 */
var groupAnagrams = function(strs) {
    const anagrams = [];
    const result = [];
  
    strs.forEach( str => {
      let anagram = str.split('').sort().join('');
      let index = anagrams.indexOf(anagram);
      if (index === -1) {
        anagrams.push(anagram);
        result.push([str]);
      } else {
        result[index].push(str);
      }
    });
  
    return result;
};

// O(nklogk) time, O(n) space where n is the input length and k is the max string length