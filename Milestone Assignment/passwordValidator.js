const prompt = require('prompt-sync')();

const checkPassword = (password, confirmPassword) => {
    if(password === confirmPassword) {
        console.log("Password Validation Successful)");
    }
    else {
        console.log("Password Validation Unsuccessful");
    }
};

checkPassword("Ankush", "Karan");