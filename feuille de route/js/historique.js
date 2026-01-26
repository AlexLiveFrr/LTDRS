function sauvegarderDansHistorique(data) {
    let historique = JSON.parse(localStorage.getItem('historiqueFeuilles') || '[]');
    historique.push({
        id: data.id,
        date: new Date().toLocaleDateString(),
        trajet: `${data.villeDepart} -> ${data.villeArrivee}`
    });
    localStorage.setItem('historiqueFeuilles', JSON.stringify(historique));
}