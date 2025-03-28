document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // Garante que o sidebar comece fechado
    sidebar.classList.remove('active');

    menuToggle.addEventListener('click', function (e) {
        sidebar.classList.toggle('active');
        e.stopPropagation(); // Impede que o clique no botão de menu feche o sidebar
    });

    document.addEventListener('click', function (e) {
        // Verifica se o clique foi fora do sidebar e do botão de menu
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
});