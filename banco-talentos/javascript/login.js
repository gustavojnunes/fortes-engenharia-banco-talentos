function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert('Login bem-sucedido!');
        window.location.href = '../html/feed.html';
    } else {
        alert('Acesso negado. Usuário ou senha incorretos.');
    }
}