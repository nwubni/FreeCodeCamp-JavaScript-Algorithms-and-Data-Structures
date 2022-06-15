function telephoneCheck(str) {
    const rexp = /^[1]{0,1}\D*[0-9]{3}\D*[0-9]{3}\D*[0-9]{4}$/;

    return (str.match(/[(]/g) || []).length === (str.match(/[)]/g) || []).length && rexp.test(str);
}

console.log(telephoneCheck("555-5555"));