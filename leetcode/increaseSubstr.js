// Given a string, find the length of the longest substring without repeating characters.

// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLongestSubstring = function(s) {
//     naive solution - iterate through each char of the string and do a nested
//     loop through the rest of the chars and update a max string variable
    
//     iterate through the string and build a hash of the indexes. use hash
//     in order to check for the longest range.
    if (s.length === 0) return 0;
    var indices = {};
//     use null for range, if the whole string was iterated through and
//     the result is still null, that means that the max wasn't updated
//     and the string is all unique chars
    var max = 0;
    var currRange = [0,0]
//     sliding window array
    
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        
//         make sure to check undefined for hashes, I originally had a bug 
//         where I checked if indices[curr] is falsey but 0 is falsey in JS
        
        if (indices[curr] === undefined) {
            indices[curr] = i;
            currRange[1]++;
        } else {
//             char index was already encountered, check if recurr index in current window
            if (currRange[0] <= indices[curr] && currRange[1] >= indices[curr]) {
                if (currRange[1] - currRange[0] > max) max = currRange[1] - currRange[0];
                currRange[0] = indices[curr] + 1;
                
            }
        
            currRange[1]++;
            
            
//             update char indices to current index
            indices[curr] = i;
        }
    }
    
    if (currRange[1] - currRange[0] > max) max = currRange[1] - currRange[0];
    return max;
};