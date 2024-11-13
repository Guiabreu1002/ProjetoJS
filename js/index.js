document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
  
    // Captura os valores do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
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
    if (!emailRegEx.test(email)) {
      emailError.textContent = 'Formato de e-mail inválido';
      return;
    }
  
    // Validação de senha (mínimo de 8 caracteres, com pelo menos 1 letra e 1 número)
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegEx.test(password)) {
      passwordError.textContent = 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números.';
      return;
    }
  
    // Simulação de verificação simples (email e senha corretos)
    if (email === 'admin@exemplo.com' && password === '1234abcd') {
      feedback.textContent = 'Login bem-sucedido!';
      feedback.style.color = 'green';
      window.location.href = 'https://developer.mozilla.org/pt-BR/docs/Learn/Forms';
    } else {
      feedback.textContent = 'Usuário ou senha incorretos!';
    }
  });