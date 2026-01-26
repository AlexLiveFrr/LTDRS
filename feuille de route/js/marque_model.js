/**
 * BASE DE DONNÉES COMPLÈTE DES CAMIONS ETS2
 * Marques, Modèles et Puissances (ch)
 */

const truckDatabase = {
    "DAF": {
        "DAF XF 105": ["410 ch", "460 ch", "510 ch"],
        "DAF XF Euro 6": ["430 ch", "480 ch", "530 ch"],
        "DAF CF Euro 6": ["430 ch", "480 ch", "530 ch"],
        "DAF 2021 (XF/XG/XG+)": ["370 ch", "410 ch", "450 ch", "480 ch", "530 ch"]
    },
    "Iveco": {
        "Iveco Stralis": ["310 ch", "330 ch", "360 ch", "420 ch", "450 ch", "480 ch", "500 ch", "560 ch"],
        "Iveco Stralis Hi-Way": ["400 ch", "460 ch", "480 ch", "500 ch", "560 ch"],
        "Iveco S-Way": ["340 ch", "360 ch", "400 ch", "430 ch", "460 ch", "490 ch", "530 ch", "570 ch"]
    },
    "MAN": {
        "MAN TGX Euro 5": ["320 ch", "360 ch", "400 ch", "440 ch", "480 ch", "540 ch", "680 ch"],
        "MAN TGX Euro 6": ["360 ch", "400 ch", "420 ch", "440 ch", "460 ch", "480 ch", "500 ch", "520 ch", "560 ch", "640 ch"],
        "MAN TGX 2020": ["330 ch", "360 ch", "400 ch", "430 ch", "470 ch", "510 ch", "540 ch", "580 ch", "640 ch"]
    },
    "Mercedes-Benz": {
        "Mercedes Actros": ["320 ch", "360 ch", "410 ch", "440 ch", "460 ch", "480 ch", "510 ch", "550 ch", "600 ch"],
        "Mercedes New Actros": ["421 ch", "449 ch", "476 ch", "510 ch", "517 ch", "530 ch", "578 ch", "625 ch"]
    },
    "Renault": {
        "Renault Premium": ["380 ch", "430 ch", "460 ch"],
        "Renault Magnum": ["440 ch", "480 ch", "520 ch"],
        "Renault T-High": ["380 ch", "430 ch", "440 ch", "460 ch", "480 ch", "520 ch"]
    },
    "Scania": {
        "Scania R 2009": ["310 ch", "360 ch", "400 ch", "440 ch", "480 ch", "500 ch", "560 ch", "620 ch", "730 ch"],
        "Scania Streamline": ["310 ch", "360 ch", "400 ch", "440 ch", "480 ch", "500 ch", "560 ch", "620 ch", "730 ch"],
        "Scania R (Next Gen)": ["370 ch", "410 ch", "450 ch", "500 ch", "520 ch", "540 ch", "580 ch", "650 ch", "660 ch", "730 ch", "770 ch"],
        "Scania S (Next Gen)": ["370 ch", "410 ch", "450 ch", "500 ch", "520 ch", "540 ch", "580 ch", "650 ch", "660 ch", "730 ch", "770 ch"]
    },
    "Volvo": {
        "Volvo FH Classic": ["420 ch", "460 ch", "500 ch", "540 ch", "600 ch", "700 ch", "750 ch"],
        "Volvo FH": ["420 ch", "460 ch", "500 ch", "540 ch", "600 ch", "700 ch", "750 ch"]
    }
};

/**
 * Logique d'initialisation des sélecteurs Camion
 */
function initTruckSelectors() {
    const selectMarque = document.getElementById('marqueCamion');
    const selectModele = document.getElementById('modeleCamion');

    if (!selectMarque || !selectModele) return;

    // 1. Remplissage des Marques
    selectMarque.innerHTML = '<option value="">Sélectionnez une marque</option>';
    Object.keys(truckDatabase).sort().forEach(marque => {
        const option = document.createElement('option');
        option.value = marque;
        option.textContent = marque;
        selectMarque.appendChild(option);
    });

    // 2. Événement de changement de marque
    selectMarque.addEventListener('change', function() {
        const marqueSelectionnee = this.value;
        selectModele.innerHTML = '<option value="">Sélectionnez un modèle</option>';

        if (marqueSelectionnee && truckDatabase[marqueSelectionnee]) {
            const modeles = truckDatabase[marqueSelectionnee];
            
            Object.keys(modeles).forEach(nomModele => {
                // Création d'un groupe d'options (optgroup) pour le modèle
                const group = document.createElement('optgroup');
                group.label = nomModele;

                // Ajout des différentes motorisations/puissances sous ce modèle
                modeles[nomModele].forEach(puissance => {
                    const option = document.createElement('option');
                    const valeurComplete = `${nomModele} - ${puissance}`;
                    option.value = valeurComplete;
                    option.textContent = valeurComplete;
                    group.appendChild(option);
                });

                selectModele.appendChild(group);
            });
        } else {
            selectModele.innerHTML = '<option value="">Sélectionnez d\'abord une marque</option>';
        }
    });
}

// Lancement au chargement du DOM
document.addEventListener('DOMContentLoaded', initTruckSelectors);