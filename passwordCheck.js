function check(pass) {
    var char = `!@#$%^&*(),.<>/';:"][{}\|?`;
    var caps = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    var nums='1234567890';
    let specialChar = false;
    let capital = false;
    let number = false;
    for (var i = 0; i < pass.length; i++) {

        if (char.includes(pass[i])) {
            specialChar = true;
        }
        if (caps.includes(pass[i])) {
            capital = true;
        }
        if (nums.includes(pass[i])) {
            number = true;
        }
    }
    if (specialChar == false && capital == false && number == false) {
        return `Number, Special Character and Capital letter Missing`
    }
    else if (specialChar == true && capital == false && number == false) {
        return `Capital letter and Number Missing`
    }
    else if (specialChar == false && capital == true && number == false) {
        return `Special Character and Number Missing`
    }
    else if (specialChar == false && capital == false && number == true) {
        return `Special Character and Capital letter Missing`
    }
    else if (specialChar == false && capital == true && number == false) {
        return `Special Character and Number Missing`
    }
 


    else if (specialChar == true && capital == true && number == false) {
        return `Number Missing`
    }
    else if (specialChar == false && capital == true && number == true) {
        return `Special Character Missing`
    }
    else if (specialChar == true && capital == false && number == true) {
        return `Capital letter Missing`
    }
    else {
        return `correct password`
    }
}

module.exports=check;
