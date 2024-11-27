document.getElementById('loginForm').addEventListener('submit', async function (event) {
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

  const usuario = {
    email: email,
    password: password,
};
  try {
    const response = await fetch("https://projetoweb-api.vercel.app/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario)
    }).then(resp => resp);

    if (response.ok) {
      const data = await response.json();
      console.log('data', data.user);

      localStorage.setItem('user', JSON.stringify(data.user));

      const verificar = localStorage.getItem('user');

      if (verificar) {
        const validar = JSON.parse(verificar);
        if (validar.email == data.user.email && validar.password == data.user.password) {
          window.location.href = "../pages/home.html";
        } else {
          feedback.textContent = "Erro ao fazer login. nome ou senha errada"
        }
      } else {
        feedback.textContent = "Usuario não existe";
      }
      console.log("Deu certo, usuario logado");
    }
  } catch (error) {
    console.log(error);
  }

});