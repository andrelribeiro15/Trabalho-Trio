document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const filterToggle = document.getElementById('filter-toggle');
    const filterCard = document.getElementById('filter-card');

    // Garante que o sidebar comece fechado
    sidebar.classList.remove('active');

    menuToggle.addEventListener('click', function (e) {
        sidebar.classList.toggle('active');
        e.stopPropagation();
    });

    document.addEventListener('click', function (e) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Funcionalidade do botão "Filtros"
    if (filterToggle && filterCard) {
        filterToggle.addEventListener('click', function (e) {
            filterCard.style.display = filterCard.style.display === 'block' ? 'none' : 'block';
            e.stopPropagation();
        });

        document.addEventListener('click', function (e) {
            if (!filterCard.contains(e.target) && !filterToggle.contains(e.target)) {
                filterCard.style.display = 'none';
            }
        });
    }
});