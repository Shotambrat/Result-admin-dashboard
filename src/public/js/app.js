document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const themeToggleBtn = document.getElementById('themeToggle');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });

    const userAvatarButton = document.getElementById('avatar');
    const dropdownMenu = document.getElementById('dropdown');

    userAvatarButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });
});