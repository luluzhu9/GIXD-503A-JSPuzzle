var randomHex = generateRandomHexCode();
document.getElementById("random-color").style.background = randomHex;

document.getElementById("hex-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var input = document.getElementById("text-box").value;
    if (input.toUpperCase() == randomHex.toUpperCase()) {
        alert ("Correct :)");
    } else {
        alert ("Incorrect :(")
    }
})

function generateRandomHexCode() {
    let hexCode = "#";
    while (hexCode.length < 7) {
      hexCode += Math.floor(Math.random() * 16).toString(16);
    }
    return hexCode;
  }
