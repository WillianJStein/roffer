function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadPage('inicio.html'); // Carrega a página inicial por padrão
});
