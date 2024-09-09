/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  var freqCount1={}, freqCount2={};
  for (const char of str1) {
    if(freqCount1[char] === undefined){
      freqCount1[char]=1;
    }
    else{
      freqCount1[char]++;
    }
  }
  for (const char of str2) {
    if(freqCount2[char] === undefined){
      freqCount2[char]=1;
    }
    else{
      freqCount2[char]++;
    }
  }
  for (const key in freqCount1) {
    if(freqCount2[key]=== undefined || freqCount2[key]!==freqCount1[key]){
      return false;
    }
  }
  for (const key in freqCount2) {
    if(freqCount1[key]=== undefined || freqCount1[key]!==freqCount2[key]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
