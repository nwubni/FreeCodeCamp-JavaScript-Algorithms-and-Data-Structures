function rot13(str) {
    const cipher = {
        'N': 'A',
        'O': 'B',
        'P': 'C',
        'Q': 'D',
        'R': 'E',
        'S': 'F',
        'T': 'G',
        'U': 'H',
        'V': 'I',
        'W': 'J',
        'X': 'K',
        'Y': 'L',
        'Z': 'M',
        'A': 'N',
        'B': 'O',
        'C': 'P',
        'D': 'Q',
        'E': 'R',
        'F': 'S',
        'G': 'T',
        'H': 'U',
        'I': 'V',
        'J': 'W',
        'K': 'X',
        'L': 'Y',
        'M': 'Z'
    };

    let result = "";

    for (let c of str) {
        if (/\w/.test(c))
            result += cipher[c];
        else
            result += c;
    }

    return result;
}

console.log(rot13("SERR PBQR PNZC"));