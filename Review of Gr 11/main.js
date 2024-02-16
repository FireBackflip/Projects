function contains_uppercase(str) {
    return (str.toLowerCase() != str);
}

function contains_lowercase(str) {
    return (str.toUpperCase() != str);
}

function contains_number(str) {
    for (let x = 0; x < str.length; x++) {
        if (!isNaN(str[x])) {
            return true;
        }
    }
    return false;
}

function includes_special_character(str) {
    for (let x = 0; x < str.length; x++) {
        if (isNaN(str[x])) {
            if (!((str.charCodeAt(x) > 64 && str.charCodeAt(x) < 91) || (str.charCodeAt(x) > 96 && str.charCodeAt(x) < 123))) {
                return true;
            }
        }
    }
    return false;
}

function includes_spaces(str) {
    for (let x = 0; x < str.length; x++) {
        if (str.charCodeAt(x) == 32) {
            return true;
        }
    }
    return false;
}

function pwd_check(password) {
    if (password.length < 10) {
        console.log("Your password must be minimum 10 characters in length.");
        return false;
    }
    if (!(contains_lowercase(password) && contains_lowercase(password))) {
        console.log("Your password must contain an uppercase and lowercase letter.");
        return false;
    }
    if (!contains_number(password)) {
        console.log("Your password must contain a number.");
        return false;
    }
    if (!includes_special_character(password)) {
        console.log("Your password must contain a special character.");
        return false;
    }
    if (includes_spaces(password)) {
        console.log("Your password must not contain spaces.");
        return false;
    }
}

console.log(pwd_check("123456789"));
console.log(pwd_check("abcdefghij"));
console.log(contains_lowercase("abcdefghij")
console.log(pwd_check("ACEDEFGHIJ"));
console.log(pwd_check("Abcdefghij"));