document.addEventListener('DOMContentLoaded', function() {
    const btnOk = document.getElementById('status-ok');
    const btnRepair = document.getElementById('status-repair');
    const menuDetails = document.getElementById('menu-incident-details');
    const inputHidden = document.getElementById('reparationNecessaire');

    // Clic sur le bouton RÉPARATION
    btnRepair.addEventListener('click', function() {
        btnRepair.classList.add('active');
        btnOk.classList.remove('active');
        inputHidden.value = "oui";
        
        // Affiche le menu
        menuDetails.style.display = 'block';
    });

    // Clic sur le bouton OK
    btnOk.addEventListener('click', function() {
        btnOk.classList.add('active');
        btnRepair.classList.remove('active');
        inputHidden.value = "non";
        
        // Masque le menu
        menuDetails.style.display = 'none';
    });
});