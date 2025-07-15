var digits = "0123456789"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbols = "?-*%!@#_$.:;/"
var symbolsExtra = "€¢£¥₦§®©™∑∆µπ"
var brackets = "[]{}()<>"
var others = ",|\\'\"+=`~^& "

function generatePassword() {
    var length = $("#length").val();
    var password = '';

    var characters = ''; digits + lowercase + uppercase + symbols + symbolsExtra + brackets + others;

    if ($("#digitsCheckbox").is(':checked')) {
        characters += digits;
    }

    if ($("#lowercaseLettersCheckbox").is(':checked')) {
        characters += lowercase;
    }

    if ($("#uppercaseLettersCheckbox").is(':checked')) {
        characters += uppercase;
    }

    if ($("#symbolsCheckbox").is(':checked')) {
        characters += symbols;
    }

    if ($("#symbolsExtraCheckbox").is(':checked')) {
        characters += symbolsExtra;
    }

    if ($("#bracketsCheckbox").is(':checked')) {
        characters += brackets;
    }

    if ($("#othersCheckbox").is(':checked')) {
        characters += others;
    }

    var charactersCount = characters.length;

    for (var i = 0; i < length; i++) {
        var randomPos = Math.floor(Math.random() * charactersCount);
        password += characters.charAt(randomPos);
    }

    $("#password").val(password);
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");
}
