const pleinEssence = document.getElementById('pleinEssence');
const detailsPlein = document.getElementById('detailsPlein');
const prixLitre = document.getElementById('prixLitre');
const litresAdded = document.getElementById('litresAdded');
const prixTotal = document.getElementById('prixTotal');

pleinEssence.addEventListener('change', function() {
    detailsPlein.style.display = this.value === 'oui' ? 'block' : 'none';
});

function calculerTotal() {
    const total = (parseFloat(prixLitre.value) || 0) * (parseFloat(litresAdded.value) || 0);
    prixTotal.value = total.toFixed(2) + ' €';
}

[prixLitre, litresAdded].forEach(input => {
    if (input) input.addEventListener('input', calculerTotal);
});