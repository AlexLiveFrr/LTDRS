const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier le stockage local au chargement
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Animation de l'icône (optionnel)
    themeToggle.style.transform = 'rotate(180deg)';
    setTimeout(() => themeToggle.style.transform = 'rotate(0deg)', 300);
});