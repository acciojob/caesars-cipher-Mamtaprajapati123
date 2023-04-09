function rot13(str) {
  var decoded = '';
  for (var i = 0; i < str.length; i++) {
    var ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 77) {
      decoded += String.fromCharCode(ascii + 13);
    } else if (ascii >= 78 && ascii <= 90) {
      decoded += String.fromCharCode(ascii - 13);
    } else {
      decoded += str.charAt(i);
    }
  }
  return decoded;
}