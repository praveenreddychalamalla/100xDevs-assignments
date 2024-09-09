/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  var k = Math.floor(str.length/2);
  var i=0,j=str.length-1;
  while(i<j){
    if(!(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)){
      i++;
    }
    else if(!(str.charCodeAt(j)>=97 && str.charCodeAt(j)<=122)){
      j--;
    }
    else{
      if(str[i]!=str[j]){
        return false;
      }
      else{
        i++;
        j--;
      }
    }
  }
  return true;
}

module.exports = isPalindrome;
