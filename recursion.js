/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0){ // base case
    return 1;
  }
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) { // base case 
    return 0;
  }
  let firstWord = words[0].length;  // get the length of the first word in the array and store that¥
  let otherWords = longest(words.slice(1)) // call longest again but use the words array without the first one (so from idx 1 onwards) which then again takes the first word and does this until it slices until 0 left in the array 
  return Math.max(firstWord, otherWords) // Math.max is called every recursion comparing to the return value (length) of each word
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx =0, newStr ="") {

  if(idx >= str.length){ // base case - if the idx reaches the legnth of the string or larger return waht we have in the new string
    return newStr
  }
  newStr = newStr + str[idx] // add each letter to the "newString" value 
  // console.log(newStr, "NEW STRING")
  return everyOther(str, idx + 2, newStr) // keep calling this fucntion but with a different idx (adding 2) everytime until it reaches basecase

}

function everyOther2(str){ // alternate way but O(n^2)
  if(str.length <= 1 ){ // base case - if the string is smaller than 1 we return that string
    return str
  }
  return str[0] + everyOther2(str.slice(2)) // or else we take the first letter of the string and keep adding that to the first letter of the string but the first letter changes as we recurse the fucntion everytime and chop off 2 letters
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <2){ // base case - if the length of the string is less than 1 then we know it is a palindrome because it reads the same both ways
    return true
  }

  if(str[0] !== str[str.length -1]){ // if the first idx of the string is NOT the same as the last idx of the string we return false
    return false
  }
  else return isPalindrome(str.slice(1, str.length-1)) // if it doesnt return false we just keep slicing the array from the top end and the tail end until we reach the basecase
}
/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx =0) {
  if (arr.length === idx){
    return -1
  }
  if (arr[idx] === val){
    return idx
  }
  else return findIndex(arr, val, idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, newStr="") { 

  if(str.length === newStr.length){
    return newStr
  }
  newStr= newStr + str[str.length -idx-1] 
  return revString(str, idx+1, newStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let returnArr=[] // setting the returnArr to empty array 
  for(let key in obj){ // looping over each key in the object with for...in loop
      if(typeof obj[key] === "string"){ // checking the type of the values for each key - if they are a string then we push that to our returnArr 
        returnArr.push(obj[key]) 
      }

      if(typeof obj[key] === "object"){ // if its an object, we need to run the gatherStrings fucntion again so we can check if that nested object has values of strings that we can push in
        returnArr.push(...gatherStrings(obj[key])) // we call gatherStrings again on that inner object and that returns an array of strings so we are spreading that (...) to individual elements and pushing that to the renturnArr array
      }
  }
  return returnArr

 }

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length) {
  
  let mid = Math.floor((start + end)/2)
  while (start <= end){
    if (val < arr[mid]){
      return binarySearch(arr, val, start, mid-1)
    }
    if ( val> arr[mid]){
      return binarySearch(arr, val, mid+1, end)
    }
    if(val === arr[mid]) return mid

    else return -1
  }
return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
