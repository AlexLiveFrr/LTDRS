// Configuration de tes clés (REMPLACE ICI)
const SUPABASE_URL = "https://juqqtlxdadlurzripskh.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1cXF0bHhkYWRsdXJ6cmlwc2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NjgyNTQsImV4cCI6MjA4NTA0NDI1NH0.mPCSswvQL1PIco5VxRULF3R7Rradd6cdMjHvzLhaoH8";

// Initialisation du client Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/**
 * INSCRIPTION D'UN NOUVEAU CHAUFFEUR
 */
async function registerUser(email, password) {
    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
    });
    if (error) return alert("Erreur d'inscription : " + error.message);
    alert("Compte créé ! Vérifie tes emails pour confirmer.");
}

/**
 * CONNEXION DU CHAUFFEUR
 */
async function loginUser(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) return alert("Erreur de connexion : " + error.message);
    window.location.reload(); // Recharge pour afficher le formulaire
}

/**
 * SAUVEGARDE AUTOMATIQUE DANS LA BASE DE DONNÉES
 * Appelée juste avant de générer le PDF
 */
async function saveRouteToSupabase(formData) {
    try {
        const { data: { user } } = await supabaseClient.auth.getUser();
        
        if (!user) {
            console.log("Utilisateur non connecté, sauvegarde ignorée.");
            return;
        }

        const { error } = await supabaseClient
            .from('feuilles_route')
            .insert([
                { 
                    user_id: user.id, 
                    donnees_json: formData,
                    camion_modele: formData.camion || "Non spécifié",
                    kilometrage_total: parseInt(formData.km_final) || 0
                }
            ]);

        if (error) throw error;
        console.log("Feuille de route sauvegardée sur Supabase !");
    } catch (err) {
        console.error("Erreur de sauvegarde :", err.message);
    }
}

async function testConnexion() {
    const { data, error } = await supabaseClient.from('feuilles_route').select('*').limit(1);
    if (error) {
        console.error("❌ Erreur de connexion Supabase :", error.message);
    } else {
        console.log("✅ Connexion Supabase réussie !");
    }
}
testConnexion();