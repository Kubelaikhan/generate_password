
const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numb = "0123456789";
const symbol = "@#$^&*()_+~|}{[]></-=";

const allChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$^&*()_+~|}{[]></-=";

function generatePassword(){
    let password= "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase [Math.floor(Math.random() * lowerCase .length)];
    password += numb[Math.floor(Math.random() * numb.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPass(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
        alert('Password has been copied');
    })
    .catch((err) => {
        console.error('Failed to copy password: ', err);
    });
}