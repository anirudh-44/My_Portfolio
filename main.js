const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent);

const phrases = [
  "am a Software engineer...",
  "am a Student...",
  "like movies...",
  "would love to contribute to open source...",
];

let phraseIndex = 0;

let letterIndex = 0;
let typingSpeed = 300;
let eraseSpeed = 100;

function printLetters(phrase) {
  //   for (let index = 0; index < phrase.length; index++) {
  //     console.log(phrase.charAt(index));
  //   }
  if (letterIndex == phrase.length) {
    //clear letters which have been typed
    clearLetters();
  } else if (letterIndex < phrase.length) {
    dynamicContent.textContent += phrase.charAt(letterIndex);
    letterIndex += 1;
    setTimeout(function () {
      printLetters(phrase);
    }, typingSpeed); // 300 is the delay time in milisec
  }
}

function clearLetters() {
  if (letterIndex == -1) {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    letterIndex = 0;
    printLetters(phrases[phraseIndex]);
  } else if (letterIndex > -1) {
    let updatedPhrase = "";
    for (let index = 0; index < letterIndex; index++) {
      updatedPhrase += phrases[phraseIndex].charAt(index);
    }
    dynamicContent.textContent = updatedPhrase;
    letterIndex -= 1;
    setTimeout(clearLetters, eraseSpeed);
  }
}

printLetters(phrases[phraseIndex]);
