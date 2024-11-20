document.addEventListener("DOMContentLoaded", function() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        const animeList = document.getElementById('animeList');
        const boasVindas = document.getElementById('boasVindas');
        const mostraEmail = document.getElementById('emailUsuario');

        if (boasVindas) {
            boasVindas.textContent = `Bem-vindo, ${usuario.nome || 'Usuário'}!`;
        }


        if (mostraEmail) {
            mostraEmail.textContent = `Seu e-mail é: ${usuario.email}`;
        }

        const animeImages = {
            "Naruto": "../imagens/naruto.jpg",
            "naruto": "../imagens/naruto.jpg",
            "One Piece": "../imagens/one piece.jpg",
            "one piece": "../imagens/one piece.jpg",
            "Attack on Titan": "../imagens/attack.webp",
            "attack on titan": "../imagens/attack.webp",
            "Dragon ball z": "../imagens/dragon ball.png",
            "dragon ball": "../imagens/dragon ball.png",
            "bleach": "../imagens/bleach.jpg",
            "Bleach": "../imagens/bleach.jpg",
        };

        if (usuario.animes && usuario.animes.length > 0) {
            usuario.animes.forEach(anime => {
                const animeDiv = document.createElement('div');
                animeDiv.classList.add('animeitem');

                const animeImage = animeImages[anime] || "../imagens/sem imagem.png"; 

                animeDiv.innerHTML = `
                    <img src="${animeImage}" alt="${anime}" class="anime-image">
                    <p class="anime-name">${anime}</p>
                `;

                animeList.appendChild(animeDiv);
            });
        } else {
            animeList.innerHTML = '<p>Sem animes registrados.</p>';
        }
    } else {
        window.location.href = "../pages/index.html";
    }
});
