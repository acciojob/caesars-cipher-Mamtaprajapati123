function rot13(str) {
  // Define a helper function to shift a single uppercase letter by 13 places
  function shiftLetter(letter) {
    const code = letter.charCodeAt(0);
    if (code >= 65 && code <= 90) { // uppercase letter
      return String.fromCharCode(((code - 65 + 13) % 26) + 65);
    } else {
      return letter; // non-alphabetic character
    }
  }

  // Use Array.map() to apply the shiftLetter function to each character of the string
  return str.split('').map(shiftLetter).join('');
}
