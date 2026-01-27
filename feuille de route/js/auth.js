/**
 * GESTION DE L'AUTHENTIFICATION LTDRS (SUPABASE)
 */

// Cette fonction vérifie si un chauffeur est connecté au chargement de la page
async function checkAuth() {
    const authContainer = document.getElementById('auth-container');
    const authForm = document.getElementById('auth-form');
    const userLoggedInArea = document.getElementById('user-logged-in');
    const usernameSpan = document.getElementById('user-display-name');
    const formFeuille = document.getElementById('feuilleRoute');

    // Récupération de la session actuelle via le client Supabase
    const { data: { user }, error } = await supabaseClient.auth.getUser();

    if (user) {
        // CHAUFFEUR CONNECTÉ
        if (authForm) authForm.style.display = 'none';
        if (userLoggedInArea) userLoggedInArea.style.display = 'block';
        if (usernameSpan) usernameSpan.textContent = user.email; // Affiche l'email du chauffeur
        
        // On affiche le formulaire de route
        if (formFeuille) formFeuille.style.opacity = "1";
        if (formFeuille) formFeuille.style.pointerEvents = "auto";
        
        console.log("Chauffeur connecté :", user.email);
    } else {
        // CHAUFFEUR NON CONNECTÉ
        if (authForm) authForm.style.display = 'block';
        if (userLoggedInArea) userLoggedInArea.style.display = 'none';
        
        // Optionnel : on grise le formulaire pour forcer la connexion
        if (formFeuille) formFeuille.style.opacity = "0.3";
        if (formFeuille) formFeuille.style.pointerEvents = "none";
        
        console.log("Aucun chauffeur connecté.");
    }
}

// Fonction pour se connecter (appelée par le bouton "Se connecter" du HTML)
async function loginUser() {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;

    if (!email || !password) {
        return alert("Veuillez remplir tous les champs.");
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert("Erreur de connexion : " + error.message);
    } else {
        console.log("Connexion réussie !");
        window.location.reload(); // Recharge pour mettre à jour l'interface
    }
}

// Fonction pour se déconnecter
async function logoutUser() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) alert(error.message);
    window.location.reload();
}

// Lancement de la vérification au démarrage
document.addEventListener('DOMContentLoaded', checkAuth);

// --- AJOUT POUR LA GÉNÉRATION DU PDF ---
async function generatePDF() {
    const element = document.getElementById('feuilleRoute'); // Utilise l'ID présent dans checkAuth

    if (!element) {
        alert("Erreur : Le formulaire 'feuilleRoute' est introuvable.");
        return;
    }
}
async function envoyerVersDiscord() {
    const webhookURL = "https://discord.com/api/webhooks/1465452078229885213/s2UViW5-iLpKJsnGhffl9DmqxtdGdQjQCF7nCQmQuy2ue65Jv7dExrs5mIcxCxr-m5q-"; // <--- METS TON URL ICI

    // Récupération des données en fonction des IDs réels de ton HTML
    const getV = (id) => document.getElementById(id)?.value || "Non renseigné";
    const getT = (id) => document.getElementById(id)?.textContent || "N/A";
    const getCheck = (id) => document.getElementById(id)?.checked ? "✅ OUI" : "❌ NON";

    // Préparation des données de la Checklist
    const checklist = `Attelage: ${getCheck('check-attelage')} | Pneus: ${getCheck('check-pneus')} | Docs: ${getCheck('check-docs')} | Feux: ${getCheck('check-lumieres')}`;

    // Préparation des données de l'incident (si activé)
    const reparation = document.getElementById('reparationNecessaire')?.value === "oui" ? "🔧 RÉPARATION REQUISE" : "✅ VÉHICULE OK";
    const detailsIncident = document.getElementById('reparationNecessaire')?.value === "oui" 
        ? `\n📍 Lieu: ${getV('pays-incident')} / ${getV('ville-incident')}\n⚠️ Type: ${getV('type-infraction')}\n💥 Dégâts: ${document.getElementById('degats-display')?.textContent}\n💬 Note: ${getV('commentaire-incident')}`
        : "Aucun incident signalé.";

    const embed = {
        title: "🚛 FEUILLE DE ROUTE LTDRS - RAPPORT FINAL",
        color: 15105570, // Orange
        fields: [
            { name: "👤 CHAUFFEUR & FEUILLE", value: `Chauffeur: **${getV('nomChauffeur')}**\nN°: **${getV('idFeuille')}**\nServeur: ${getV('serveurRoute')}`, inline: false },
            { name: "🚛 CAMION", value: `Marque: ${getV('marqueCamion')}\nModèle: ${getV('modeleCamion')}\nKM: ${getV('kilometrageDepart')} ➡️ ${getV('kilometrageArrivee')}`, inline: true },
            { name: "📦 CARGAISON", value: `Nature: ${getV('natureMarchandise')}\nPoids: ${getV('poids')} T\nFerry: ${getV('ferry')}`, inline: true },
            { name: "📍 ITINÉRAIRE", value: `**DE:** ${getV('pays-depart')}, ${getV('ville-depart')} (${getV('lieuDepart')})\n**À:** ${getV('pays-arrivee')}, ${getV('ville-arrivee')} (${getV('lieuArrivee')})`, inline: false },
            { name: "📋 CHECKLIST DÉPART", value: checklist, inline: false },
            { name: "⚠️ ÉTAT DU VÉHICULE & INCIDENTS", value: `**${reparation}**${detailsIncident}`, inline: false },
            { name: "💶 FRAIS & STATS", value: `Repas/Repos: ${getV('frais-repas')}€\nAmendes: ${getV('frais-amendes')}€\nConso: ${getT('stat-conso')} L/100\nTemps: ${getT('stat-temps')}`, inline: true },
            { name: "📝 OBSERVATIONS", value: getV('observations') || "Aucune observation.", inline: false }
        ],
        footer: { text: "Système de transport LTDRS" },
        timestamp: new Date()
    };

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ embeds: [embed] })
        });

        if (response.ok) {
            alert("✅ Rapport complet envoyé sur Discord !");
        } else {
            alert("❌ Erreur d'envoi (Vérifie ton Webhook).");
        }
    } catch (error) {
        alert("❌ Erreur de connexion.");
    }
}
}