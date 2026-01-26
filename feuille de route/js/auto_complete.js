function autoCompleteFeuille() {
    document.getElementById('nomChauffeur').value = "Alex";
    document.getElementById('serveurRoute').value = "Entreprise";
    document.getElementById('kilometrageDepart').value = "125400";
    document.getElementById('kilometrageArrivee').value = "126150";
    document.getElementById('natureMarchandise').value = "Composants Électroniques";
    document.getElementById('poids').value = "18.5";
    document.getElementById('lieuDepart').value = "Dépôt Principal";
    document.getElementById('lieuArrivee').value = "Client Final";
    
    // Dates automatiques (Aujourd'hui et +4h)
    const now = new Date();
    document.getElementById('dateDepart').value = now.toISOString().slice(0,16);
    now.setHours(now.getHours() + 4);
    document.getElementById('dateArriveeEstimee').value = now.toISOString().slice(0,16);
    
    console.log("Formulaire auto-complété !");
}