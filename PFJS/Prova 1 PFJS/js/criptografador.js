import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

async function gerarHashes() {
    const res = await fetch('js/logins.json');
    const usuarios = await res.json();

    const novos = usuarios.map(user => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.senha, salt);

        return {
            username: user.username,
            senha: hash
        };
    });

    console.log(JSON.stringify(novos, null, 2));
}

gerarHashes();