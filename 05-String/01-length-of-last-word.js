//  https://leetcode.com/problems/length-of-last-word/description/

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.


///////////////////////////// my approach \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord0 = function(s) {
     let found = false;
    let count = 0;
    for(let i = s.length -1; i >= 0; i--){
        if(s[i] == " "){
            found = false
            continue;
        } else{
            found = true;
            count++;
            if(s[i-1] == " " || !s[i-1]){
                found = false;
                return count;
            }
        }
    }
    return count
};



/////////////////////////// There is a 2 loops solution as well using will loop \\\\\\\\\\\\\\\\\\\\

var lengthOfLastWord1 = function(s) {
    let length = s.length - 1;
    while(length >=0){
        if(s[length] == " "){
            length--;
        } else{
            break
        }
    }

    let count = 0;
    while(length >= 0){
        if(s[length] != " "){
            count++;
        } else{
            break;
        }
        length--;
    }
    return count;
};

/////////////////////// Optimzed single loop approach \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var lengthOfLastWord = function(s) {
    let length = s.length - 1;
    let count = 0;
    while(length >= 0){
        if(s[length] != " "){
            count++
        } else if (count > 0){ // condition is like (s[length] == " " && count > 0 )
            break;
        }
        length--;
    }
    return count;
};

console.log(lengthOfLastWord("l "))
console.log(lengthOfLastWord("lokesh "))
console.log(lengthOfLastWord(" lok    "))
console.log(lengthOfLastWord(" l o k  esh "))