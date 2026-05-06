// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.

// Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.
// Example 2:

// Input: s = "aeiaeia"

// Output: 3

// Explanation:

// The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
// There are no consonants in s. Hence, maximum consonant frequency = 0.
// The output is 3 + 0 = 3.

// Constraints:

// 1 <= s.length <= 100
// s consists of lowercase English letters only.


////////////////////////// My Solution logic \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const v = {};
    const c = {};
    const vSet = new Set(["a", "e", "i", "o", "u"]);

    for (let i = 0; i < s.length; i++) {
        if (vSet.has(s[i])) {
            v[s[i]] = (v[s[i]] || 0) + 1;
        } else {
            c[s[i]] = (c[s[i]] || 0) + 1;
        }
    }

    const maxV = Object.keys(v).length ? Math.max(...Object.values(v)) : 0;
    const maxC = Object.keys(c).length ? Math.max(...Object.values(c)) : 0;

    return maxV + maxC;
};


//////////////////// Optimized logic \\\\\\\\\\\\\\\\\\\\\\


var maxFreqSum1 = function(s) {
    let map = {};
    for(let i=0; i<s.length; i++){
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    }

    let vSet = new Set(["a", "e", "i", "o", "u"])
    let maxV = 0;
    let maxC = 0;
    let mapKeys = Object.keys(map)
    for(let i =0; i<mapKeys.length; i++){
        if(vSet.has(mapKeys[i])){
            maxV = Math.max(maxV, map[mapKeys[i]])
        } else{
            maxC = Math.max(maxC, map[mapKeys[i]])
        }
    }
    return maxV + maxC
}

console.log(maxFreqSum1("successes"))