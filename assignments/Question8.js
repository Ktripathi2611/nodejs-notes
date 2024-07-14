// Question 3: Palindrome Checker
// ● Task: Write a JavaScript function that checks whether a given string is a
// palindrome (reads the same forward and backward).
// ● Palindrome Example:
// ○ String: LEVEL
// ○ Reversing the above string: LEVEL
// ○ As the String and its reverse are the same that means “Level” is
// a palindrome.
// ● Requirements:
// ○ The function should take a string as an argument.
// ○ Return true if the string is a palindrome, otherwise return false.
function isPalindrome(str) {
    // Checking the Reflection:
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }
  
  const is_palindrome = isPalindrome("121"); // Replace "121" with your string
  
  console.log(is_palindrome); // This will print true or false
  
