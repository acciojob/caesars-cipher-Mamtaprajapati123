function decode() {
  let inputText = document.getElementById("input").value;
  let outputText = "";
  for (let i = 0; i < inputText.length; i++) {
    let char = inputText.charAt(i);
    if (char.match(/[A-Z]/)) {
      let code = inputText.charCodeAt(i) - 13;
      if (code < 65) {
        code += 26;
      }
      char = String.fromCharCode(code);
    }
    outputText += char;
  }
  document.getElementById("output").value = outputText;
}
