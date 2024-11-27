
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const emailRegistrar = document.getElementById('email_register').value;
    const nameRegistrar = document.getElementById('name_register').value;
    const passwordRegistrar = document.getElementById('password_register').value;
    const animes = document.getElementById('animes').value.split('\n');

    const nameError = document.getElementById('nameError')
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const feedback = document.getElementById('feedback');
  
    emailError.textContent = '';
    passwordError.textContent = '';
    feedback.textContent = '';
    nameError.textContent = '';

    const nameRegEx = /^[a-zA-Z._-]{3,16}$/;
    if (!nameRegEx.test(nameRegistrar)) {
        nameError.textContent = "Nome invalido";
        return;
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
        name: nameRegistrar,
        email: emailRegistrar,
        password: passwordRegistrar,
        anime_preference: []
    };

    async function register() {
        try {
            const response = await fetch("https://projetoweb-api.vercel.app/auth/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario)
            }).then(resp => resp);
    
            if (response.ok) {
                feedback.textContent = "Registro realizado com sucesso!";
                window.location.href = "../pages/index.html";
            }
        }catch(error){
            console.log(error)
            return;
        }
    }

    register();
});