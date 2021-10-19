function showPassword() {
    var eye = $('#eye');
    var eyeSlash = $('#eye-slash');
    var fieldPassword = $('#field-password');

/*     eye.click(function() {
        eye.hide();
        eyeSlash.show();
        fieldPassword.type = 'password';
    })

    eyeSlash.click(function() {
        eye.show();
        eyeSlash.hide();
        fieldPassword.type = 'text';
    }) */

    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'text';
    }
}

$('#btn-login').click(function(e) {
    e.preventDefault();
    alert('You are logged successfully!');
});