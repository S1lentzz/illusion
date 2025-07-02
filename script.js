// JavaScript for theme toggle and navigation interactions

document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeBtn = document.querySelector('.toggle-theme');
    const body = document.body;

    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        toggleThemeBtn.textContent = '☀️';
    }

    toggleThemeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            toggleThemeBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleThemeBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
});
