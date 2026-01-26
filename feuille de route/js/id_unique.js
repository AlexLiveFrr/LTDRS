function generateUniqueID() {
    const date = new Date();
    const year = date.getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const id = `AT-${year}-${random}`;
    
    const inputId = document.getElementById('idFeuille');
    if (inputId) inputId.value = id;
}

// Générer au chargement
document.addEventListener('DOMContentLoaded', generateUniqueID);