// const usuarios = {
//     nome: nome,
//     email: email,
//     senha: senha,
//     animes: animes
//   };


//AQUI BASICAMENTE FOI UM COPIA E COLA DO INDEX, A DIFERENÇA É QUE BASTA ADICIONAR A UM ARRAY E FAZER O LOCALSTORAGE
//DEPOIS QUE FAZER ESSE ARRAY ONDE ARMAZE NAS INFORMAÇOES, TEM Q SINCAR COM O INDEX,JS PARA FAZER A VERIFICAÇÃO PARA LOGIN

document.getElementById('registerFrom').addEventListener('submit', function(event) {
    event.preventDefault();

    const verificar1 = false;
    const verificar2 = false;

    const email_registrar = document.getElementById('email_register');
    const name_registrar = document.getElementById('name_register');
    const password_registrar = document.getElementById('password_register');
    const animes = document.getElementById('animes').value.split('\n').map(anime => anime.trim());

    // Elementos para exibir os erros
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const feedback = document.getElementById('feedback');
  
    // Limpa as mensagens de erro
    emailError.textContent = '';
    passwordError.textContent = '';
    feedback.textContent = '';

    // Validação de e-mail (RegEx para verificar formato de e-mail)
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegEx.test(email_registrar)) {
        verificar1 = true;
        return;
    }else{
        emailError.textContent = 'Formato de e-mail inválido';
    }
    // Validação de senha (mínimo de 8 caracteres, com pelo menos 1 letra e 1 número)
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (passwordRegEx.test(password_registrar)) {
        verificar2 = true;
        return;
    }else{
        passwordError.textContent = 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números.';
    }
    // Simulação de verificação simples (email e senha corretos)
    if (verificar1 == true && verificar2 == true) {
        feedback.textContent = 'Login bem-sucedido!';
        feedback.style.color = 'green';
        usuarios.push(name_registrar, email_registrar, password_registrar)
        window.location.href = '../pages/home.html';
    } else {
        feedback.textContent = 'Usuário ou senha incorretos!';
    }

});