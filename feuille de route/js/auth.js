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