// Searching Challenge
// Have the function SearchingChallenge(str) take the str parameter being passed and find the longest palindromic substring, which means the longest substring which is read the same forwards as it is backwards. For example: if str is "abracecars" then your program should return the string racecar because it is the longest palindrome within the input string.

// The input will only contain lowercase alphabetic characters. The longest palindromic substring will always be unique, but if there is none that is longer than 2 characters, return the string none.
// Examples
// Input: "hellosannasmith"
// Output: sannas
// Input: "abcdefgg"
// Output: none
// Browse Resources
// Search for any help or documentation you might need for this problem. For example: array indexing, Ruby hash tables, etc.

const expands = (s, begin, end) => {
    while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end])
    {
      begin--;
      end++;
    }
    return s.substring(begin + 1, end)
  }
  
  function SearchingChallenge(s) { 
  
    // code goes here
    if (!s || s.length <= 1){
      return s;
    }
    let longest = s.substring(0, 1)
    for (let i = 0; i < s.length; i++){
      let temp = expands (s, i, i + 1)
      if (temp.length > longest.length){
        longest = temp
      }
      temp = expands(s, i, i + 1)
      if (temp.length > longest.length){
        longest = temp
      }
    }
    return longest
}