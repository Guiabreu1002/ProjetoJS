
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const emailRegistrar = document.getElementById('email_register').value;
    const nameRegistrar = document.getElementById('name_register').value;
    const passwordRegistrar = document.getElementById('password_register').value;
    const animes = document.getElementById('animes').value;

    const nameError = document.getElementById('nameError')
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const feedback = document.getElementById('feedback');
  
    emailError.textContent = '';
    passwordError.textContent = '';
    feedback.textContent = '';
    nameError.textContent = '';

    const nameRegEx = /^[a-z]{3,}$/;
    if (!nameRegEx.test(nameError)) {
        nameError.textContent = "Nome invalido";
    }
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegEx.test(emailRegistrar)) {
        emailError.textContent = 'Formato de e-mail inválido';
        return;
    }

    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegEx.test(passwordRegistrar)) {
        passwordError.textContent = 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números.';
        return;
    }

    const usuario = {
        nome: nameRegistrar,
        email: emailRegistrar,
        senha: passwordRegistrar,
        animes: animes
    };

    localStorage.setItem('usuario',JSON.stringify(usuario));

    feedback.textContent = "Registro realizado com sucesso!";

    window.location.href = "../pages/index.html";


});