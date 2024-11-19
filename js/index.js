document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const feedback = document.getElementById('feedback');

    passwordError.textContent = '';
    feedback.textContent = '';
  
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegEx.test(email)) {
      emailError.textContent = 'Formato de e-mail inválido';
      return;
    }
  
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegEx.test(password)) {
      passwordError.textContent = 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números.';
      return;
    }
    
    const verificar = localStorage.getItem('usuario');

    if (verificar) {
      const validar = JSON.parse(verificar);
      if (validar.email == email && validar.senha == password) {
        window.location.href = "../pages/home.html";
      }else{
        feedback.textContent = "Erro ao fazer login. nome ou senha errada"
      }
    }else{
      feedback.textContent = "Usuario não existe";
    }
    
  });