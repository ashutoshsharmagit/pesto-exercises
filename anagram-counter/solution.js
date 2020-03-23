function anagrams(stringA, stringB) {

    stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase()

    const charMapA = getCharMap(stringA)
    const charMapB = getCharMap(stringB)


    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }

    return true
}

function getCharMap(string) {
    let charMap = {}

    for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

function anagramCounter(anagramList, word){
      let counter = 0;
      for (let value in anagramList){
          if (anagrams(value , word){
              counter++;
          }
      }
      return counter;
}