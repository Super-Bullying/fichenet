function validateLogin() {
    const users = {
        'admin': 'admin',
        'user': 'user'
    };

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (users[username] === undefined) {
        messageElement.textContent = 'Username não existe';
    } else if (users[username] !== password) {
        messageElement.textContent = 'Password incorreta';
    } else {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Login bem-sucedido!';
        setTimeout(() => {
            window.location.href = 'index.html'; // 1s
        }, 1000);
    }

    return false;
}
