import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

window.addEventListener("DOMContentLoaded", () => {
    let usuarios = [];
    
    async function carregarUsuarios() {
        try {
            const res = await fetch('js/users.json');
            usuarios = await res.json();
        } catch (err) {
            console.error("Erro ao carregar usuários:", err);
        }
    }

    carregarUsuarios();

    document.getElementById('btnValida').addEventListener('click', () => {
        const username = document.getElementById('userPage').value;
        const senha = document.getElementById('senhaPage').value;

        const user = usuarios.find(u => u.username === username);

        if (!user) {
            document.getElementById('res').innerText = "Usuário não encontrado";
            return;
        }

        const ok = bcrypt.compareSync(senha, user.senha);

        if (ok) {
            document.getElementById('res').innerText = "Login OK";
        } else {
            document.getElementById('res').innerText = "Senha incorreta";
        }
    });
});