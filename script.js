// --- GESTION DU MENU BURGER (Navigation Mobile) ---
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });
    }
});

// --- ENVOI DU FORMULAIRE DE RECRUTEMENT VERS DISCORD ---
const discordForm = document.getElementById('discordForm');

if (discordForm) {
    discordForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // URL de ton Webhook Discord
        const webhookURL = "https://discord.com/api/webhooks/1465452078229885213/s2UViW5-iLpKJsnGhffl9DmqxtdGdQjQCF7nCQmQuy2ue65Jv7dExrs5mIcxCxr-m5q-";

        // 1. Récupération des valeurs du formulaire
        const role = document.getElementById('role').value;
        const acceptedRules = document.getElementById('accept_rules').checked;
        const pseudo = document.getElementById('username').value;
        const age = document.getElementById('age').value;
        const steamId = document.getElementById('steam_id').value || "Non renseigné";
        const truckyId = document.getElementById('trucky_id').value || "Non renseigné";
        const hours = document.getElementById('hours').value;
        const hardware = document.getElementById('hardware').value;
        const style = document.getElementById('drive_style').value;
        const availability = document.getElementById('availability').value || "Non précisé";
        const motivation = document.getElementById('motivation').value;

        // --- CORRECTION GESTION DLC (UN PAR LIGNE POUR DISCORD) ---
        let dlcList = [];
        // Utilisation de .dlc ou input[name="dlc"] selon ta classe HTML
        document.querySelectorAll('input[name="dlc"]:checked, .dlc:checked').forEach((checkbox) => {
            dlcList.push(`✅ ${checkbox.value}`);
        });

        const dlcFinal = dlcList.length > 0 ? dlcList.join("\n") : "❌ Aucune DLC map";
        // ---------------------------------------------------------

        // 2. Construction du payload
        const payload = {
            "embeds": [{
                "title": "📑 Nouveau Dossier de Recrutement",
                "description": `Une nouvelle candidature a été déposée pour le poste de **${role}**.`,
                "color": 13848362,
                "fields": [
                    { "name": "🎯 Poste Visé", "value": `**${role}**`, "inline": false },
                    { "name": "👤 Candidat", "value": `**Pseudo:** ${pseudo}\n**Âge:** ${age} ans`, "inline": true },
                    { "name": "🎮 Profil In-Game", "value": `**Heures:** ${hours}h\n**Style:** ${style}`, "inline": true },
                    { "name": "⚙️ Matériel", "value": hardware, "inline": true },
                    { "name": "🔗 Liens Utiles", "value": `**Steam:** ${steamId}\n**Trucky:** ${truckyId}`, "inline": false },
                    { "name": "📜 Règlement", "value": acceptedRules ? "✅ Lu et Accepté" : "❌ Non accepté", "inline": true },
                    { "name": "📅 Disponibilités", "value": availability, "inline": true },
                    // Affichage des DLC avec le nouveau format propre
                    { "name": "🗺️ DLC Possédées", "value": `>>> ${dlcFinal}`, "inline": false },
                    { "name": "📝 Motivations", "value": "```" + (motivation || "Aucune motivation rédigée.") + "```", "inline": false }
                ],
                "footer": { "text": "TRANSPORT LTDRS Logistique - Système de Recrutement Web" },
                "timestamp": new Date().toISOString()
            }]
        };

        // 3. Envoi de la requête à Discord via Fetch API
        fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(res => {
            if (res.ok) {
                discordForm.innerHTML = `
                    <div class="text-center py-10">
                        <div class="text-6xl mb-6">✅</div>
                        <h2 class="text-3xl font-black uppercase italic text-white mb-4">Dossier Transmis !</h2>
                        <p class="text-gray-300 mb-8 italic text-lg">Ton dossier pour devenir **${role}** est entre les mains de l'équipe TRANSPORT LTDRS.</p>
                        
                        <div class="bg-slate-900/50 p-8 rounded-3xl border border-orange-500/30 mb-8 shadow-2xl">
                            <p class="text-xs text-orange-500 font-bold uppercase mb-4 tracking-[0.3em]">Action Requise</p>
                            <p class="text-white text-lg mb-6">Rejoins notre serveur Discord pour passer ton entretien :</p>
                            <a href="https://discord.gg/" target="_blank" class="bg-orange-600 hover:bg-orange-700 text-white font-black py-4 px-10 rounded-2xl transition-all transform hover:scale-105 inline-block shadow-lg uppercase italic">
                                Rejoindre le Discord
                            </a>
                        </div>
                        
                        <a href="index.html" class="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors font-bold">Retour à l'accueil</a>
                    </div>
                `;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                alert("❌ Erreur lors de l'envoi du dossier.");
            }
        })
        .catch(err => {
            console.error("Erreur lors de l'envoi :", err);
            alert("❌ Impossible de contacter le serveur de recrutement.");
        });
    });
}
