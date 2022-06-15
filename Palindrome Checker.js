function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "");
    const len = str.length - 1;

    for (let i = 0; i < len / 2; i++)
        if (str[i].toLowerCase() !== str[len - i].toLowerCase())
            return false;

    return true;
}

console.log(palindrome("1 eye for of 1 eye."));