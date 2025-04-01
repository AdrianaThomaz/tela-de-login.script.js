function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'nome aluno' && password === '1234') {
        message.textContent = 'Logado com sucesso!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Dados incorretos!';
        message.style.color = 'red';
    }
}
