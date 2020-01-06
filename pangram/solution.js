function isPangram(string){
    // define the alphabet
    var letters = "abcdefghijklmnopqrstuvwxyz"
    // make all letters in string lowercase
    string = string.toLowerCase().replace(/[^a-z]/g,'')
    // iterate through up until the length of the alphabet
    for (var i = 0; i < 26; i++)
      // if the string does not include the letter return false
      if (string.indexOf(letters[i]) < 0) return false
      // otherwise return true
      return true
  }