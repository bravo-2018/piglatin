console.log("I like cheese")

var vowels = ["a", "e", "i", "o", "u"]
var word
var sentence
var output1 = []
var pigWordsArray = []

// var newArr = exampleWord.split()
function translate1() {
  sentence = document.getElementById("userword").value
  var wordArray = sentence.split(" ")
  wordArray.map( (word) => {


    var v1
    for(var i = 0; i < word.length; i++) {
    //if word starts with vowel, it's not a consonants
      if(vowels.includes(word[i])) {
        // here we gonna do the actual translation
      //console.log(i);

      v1 = i
      break
      }
  //word start with a consonants, move all consecutive nice consonants to the end of the word  add ay
    }
    //If the first letter is a vowel, add "way" to the end of the word
    if(v1==0){
      pigWord = word + "way"
      return pigWord
    //If the first letter is a consonant, reorder the word: letters after the first vowel + letters before the vowel + "ay"
  }  else //if((word[v1-1] != "q") || (word[v1]!="u")) {
      {
        pigWord = word.substring(v1) + word.substring(0,v1) + "ay"
      }
  //  }  else pigWord = "special case"


  pigWordsArray.push(pigWord)
  output1 = pigWordsArray.join(" ")
  })
document.getElementById("transout").innerHTML=output1
return output1

}
