var eye = $('#eye');
var eyeSlash = $('#eye-slash');
var fieldPassword = $('#field-password');

$('#btn-login').click(function(e) {
    e.preventDefault();
    alert('You are logged successfully!');
});

eye.click(function() {
    eye.hide();
    eyeSlash.show();
    fieldPassword.get(0).type = 'password'; 
});

eyeSlash.click(function() {
    eye.show();
    eyeSlash.hide();
    fieldPassword.get(0).type = 'text';
});

/* function togglePassword() {
    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'text';
    }
} */