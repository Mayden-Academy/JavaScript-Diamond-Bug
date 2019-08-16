function diamond(letter) {
    var letters = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var curCount = letters.indexOf(letter)+1
    var endCount = 2
    var output = ''
    for (let i = 0; i <= letters.indexOf(letter); i++) {
        let curLetter = letters[i]
        if (curLetter == 'a') {
            output += letterSpaces(curCount, 'a') + letterSpaces(curCount, "\n")
            curCount--
        } else if (letter == curLetter) {
            let end = [...output].reverse().join('')
            output += letterSpaces(curCount,curLetter) + letterSpaces(endCount,curLetter) + end
        } else {
          output += letterSpaces(curCount,curLetter) + letterSpaces(endCount,curLetter) + letterSpaces(curCount,"\n")
          curCount--
          endCount+=2
        }
    }
    document.getElementById('diamond').innerHTML = output
}

function letterSpaces(spaceCount, letter) {
    return ' '.repeat(spaceCount) + letter
}
