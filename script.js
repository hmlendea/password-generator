var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var digits = "0123456789"
var punctuation = "()[]{}.:,:<>/|\\'\"?+=-_`~!@#$%^&* "

var characters = lowercase + uppercase + digits + punctuation;
var charactersCount = characters.length;

function generatePassword() {
    var length = $("#length").val();
    var password = '';

    for (var i = 0; i < length; i++) {
        var randomPos = Math.floor(Math.random() * charactersCount);
        password += characters.charAt(randomPos);
    }

    $("#password").val(password);
}
