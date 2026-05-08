// https://leetcode.com/problems/group-anagrams/description/

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

///////////////////////// Non optimzed code time complexity O(n*nlogn) \\\\\\\\\\\\\\\\\\\\\\\\

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams1 = function(strs) {
    let map = {};
    for(let i = 0; i<strs.length; i++){
        let sortedStr = strs[i].split("").sort().join("");
        if(!map[sortedStr]){
            map[sortedStr] = [strs[i]]
        } else{
            map[sortedStr].push(strs[i])
        }
    }

    return [...Object.values(map)]
};


///////////////////////// Optimized Approach time complexity is O(n*m) space complexity O(n*m) \\\\\\\\\\\\\\\\\\\\\\\

var groupAnagrams = function(strs) {
   let map = {};
   for(let i = 0; i<strs.length; i++){
    let freqArr = Array(26).fill(0);
    let s = strs[i];
        for(let j = 0; j<s.length; j++){
            let idx = s[j].charCodeAt() - "a".charCodeAt();
            ++freqArr[idx]; 
        }

        let key = ""
        for(let k = 0; k<26; k++){
            key = key + String.fromCharCode(97 + k) + freqArr[k]
        }

        if(!map[key]){
            map[key] = [s];
        } else {
            map[key].push(s)
        }
    
   } 
   return [...Object.values(map)]
};