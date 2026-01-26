// truckersmp-players.js
async function getTruckersMPPlayer(id) {
    try {
        const response = await fetch(`https://api.truckersmp.com/v2/player/${id}`);
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Erreur API TruckersMP", error);
    }
}

// truckersmp-auto-fill.js
async function fillFromTMP() {
    const playerID = prompt("Entrez votre ID TruckersMP :");
    if (playerID) {
        const player = await getTruckersMPPlayer(playerID);
        if (player) {
            document.getElementById('nomChauffeur').value = player.name;
            alert(`Données récupérées pour ${player.name}`);
        }
    }
}