let signinBtn = document.querySelector('.signin-btn'),
    signupBtn = document.querySelector('.signup-btn'),
    formBox = document.querySelector('.form-box'),
    body = document.body;

signupBtn.addEventListener('click', function() {
    formBox.classList.add('active');
    body.classList.add('active');
});
signinBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
});