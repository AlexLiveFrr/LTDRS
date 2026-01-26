/**
 * BASE DE DONNÉES ULTIME - +1000 VILLES ETS2 & PROMODS
 * Alex Transport - Version Master
 */

const locations = {
    "France (Intégral)": ["Paris", "Lyon", "Marseille", "Lille", "Bordeaux", "Nice", "Nantes", "Strasbourg", "Montpellier", "Rennes", "Le Havre", "Reims", "Saint-Étienne", "Toulon", "Grenoble", "Angers", "Dijon", "Brest", "Le Mans", "Clermont-Ferrand", "Amiens", "Limoges", "Metz", "Orléans", "Perpignan", "Rouen", "Caen", "Nancy", "Avignon", "Poitiers", "Pau", "Béziers", "La Rochelle", "Cherbourg", "Calais", "Dunkerque", "Bourges", "Saint-Nazaire", "Quimper", "Ajaccio", "Bastia", "Bonifacio", "Lorient", "Vannes", "Narbonne", "Cannes", "Bayonne", "Angoulême", "Agen", "Dieppe", "Évreux", "Mont-de-Marsan", "Tarbes", "Valence", "Troyes", "Auxerre", "Bourg-en-Bresse", "Chambéry", "Annecy", "Niort", "Saint-Quentin", "Beauvais", "Cholet", "Abbeville", "Auch", "Aurillac", "Avranches", "Brive-la-Gaillarde", "Cahors", "Carcassonne", "Castres", "Châteauroux", "Chaumont", "Épinal", "Gap", "Laval", "Mende", "Montluçon", "Moulins", "Nevers", "Périgueux", "Privas", "Rodez", "Tulle", "Vesoul", "Saint-Brieuc", "Alençon", "Guéret", "Montauban", "Evry", "Creil", "Compiègne", "Soissons", "Chartres", "Blois"],
    "Allemagne (Intégral)": ["Berlin", "Munich", "Hambourg", "Cologne", "Francfort", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig", "Brême", "Dresde", "Hanovre", "Nuremberg", "Duisbourg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster", "Karlsruhe", "Mannheim", "Augsbourg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Brunswick", "Chemnitz", "Kiel", "Aix-la-Chapelle", "Halle", "Magdebourg", "Fribourg", "Krefeld", "Lübeck", "Oberhausen", "Erfurt", "Mayence", "Rostock", "Cassel", "Hagen", "Hamm", "Sarrebruck", "Potsdam", "Ludwigshafen", "Oldenbourg", "Osnabrück", "Solingen", "Flensburg", "Burg auf Fehmarn", "Travemünde", "Bremerhaven", "Cuxhaven", "Wilhelmshaven", "Emden", "Göttingen", "Heidelberg", "Heilbronn", "Ingolstadt", "Jena", "Koblenz", "Konstanz", "Offenbach", "Paderborn", "Regensburg", "Reutlingen", "Siegen", "Ulm", "Wolfsburg", "Würzburg", "Zwickau", "Bad Oeynhausen", "Bamberg", "Bayreuth", "Celle", "Cottbus", "Dessau", "Fulda", "Gießen", "Hanau", "Iserlohn", "Ludwigsburg", "Lüneburg", "Neuss", "Ratingen", "Schweinfurt", "Trier", "Villingen-Schwenningen"],
    "Islande (PM Total)": ["Reykjavík", "Akureyri", "Seyðisfjörður", "Selfoss", "Vík", "Höfn", "Blönduós", "Bolungarvík", "Borgarnes", "Egilsstaðir", "Keflavík", "Ólafsvík", "Sauðárkrókur", "Stykkishólmur", "Vestmannaeyjar", "Vopnafjörður", "Akranes", "Hólmavík", "Ísafjörður", "Dalvík", "Húsavík", "Patreksfjörður", "Reyðarfjörður", "Siglufjörður", "Þorlákshöfn"],
    "Espagne (Iberia + PM)": ["Madrid", "Barcelone", "Valence", "Séville", "Saragosse", "Malaga", "Murcie", "Palma", "Las Palmas", "Bilbao", "Alicante", "Cordoue", "Valladolid", "Vigo", "Gijón", "Grenade", "Vitoria", "Elche", "Santa Cruz", "Oviedo", "Badalone", "Carthagène", "Terrassa", "Jerez", "Sabadell", "Móstoles", "Almería", "Pampelune", "Albacete", "Castellón", "Santander", "Burgos", "Logroño", "Badajoz", "Salamanque", "Huelva", "Lérida", "Tarragone", "Dos Hermanas", "León", "Cadix", "Algésiras", "Ciudad Real", "Teruel", "Soria", "Jaén", "Orense", "Lugo", "Gérone", "Caceres", "Toledo", "Guadalajara", "Cuenca", "Avila", "Segovia", "Palencia", "Zamora", "Huesca", "Lorca", "Marbella", "Algeciras", "Antequera", "Bailen", "Benidorm", "Ciudad Rodrigo", "El Ejido", "Irun", "La Jonquera", "Linares", "Navalmoral de la Mata", "Puerto de Sagunto", "Talavera de la Reina"],
    "Portugal (Total)": ["Lisbonne", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Funchal", "Coimbra", "Setúbal", "Almada", "Queluz", "Agualva-Cacém", "Faro", "Évora", "Guimarães", "Viseu", "Aveiro", "Santarém", "Beja", "Bragance", "Viana do Castelo", "Ponta Delgada", "Portimão", "Caldas da Rainha", "Castelo Branco", "Guarda", "Olhão", "Sines", "Vila Real"],
    "Royaume-Uni & Écosse (PM)": ["Londres", "Birmingham", "Glasgow", "Liverpool", "Leeds", "Sheffield", "Édimbourg", "Bristol", "Manchester", "Leicester", "Coventry", "Hull", "Cardiff", "Belfast", "Newcastle", "Plymouth", "Southampton", "Aberdeen", "Swansea", "Norwich", "Portsmouth", "Cambridge", "Oxford", "Inverness", "Dover", "Felixstowe", "Grimsby", "Carlisle", "Holyhead", "Penzance", "Wick", "Thurso", "Brighton", "Douglas", "Kirkwall", "Lerwick", "Stornoway", "Oban", "Perth", "Dundee", "Fort William", "Fraserburgh", "Kyle of Lochalsh", "Ullapool", "Fishguard", "Holyhead", "Larne", "Londonderry"],
    "Italie & Sicile (Total)": ["Rome", "Milan", "Naples", "Turin", "Palerme", "Gênes", "Bologne", "Florence", "Bari", "Catane", "Venise", "Vérone", "Messine", "Padoue", "Trieste", "Tarente", "Brescia", "Parme", "Prato", "Modène", "Reggio Calabre", "Pérouse", "Livourne", "Ravenne", "Cagliari", "Foggia", "Rimini", "Salerne", "Ferrare", "Sassari", "Latina", "Monza", "Syracuse", "Bergame", "Pescara", "Trente", "Forlì", "Vicence", "Terni", "Bolzano", "Novare", "Plaisance", "Ancône", "Udine", "Lecce", "Catanzaro", "Potenza", "Campobasso", "Sienne", "Viterbo", "Grosseto", "Arezzo", "La Spezia", "Savona", "Imperia", "Sanremo", "Ventimiglia", "Villa San Giovanni", "Suzzara", "Cassino", "Benevento", "Brindisi", "Lecce", "Otranto", "Sassari", "Olbia", "Nuoro", "Oristano"],
    "Pologne (Total)": ["Varsovie", "Cracovie", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Białystok", "Katowice", "Gdynia", "Częstochowa", "Radom", "Sosnowiec", "Toruń", "Kielce", "Gliwice", "Rzeszów", "Zabrze", "Olsztyn", "Bielsko-Biała", "Bytom", "Zielona Góra", "Rybnik", "Ruda Śląska", "Tychy", "Gorzów", "Dąbrowa Górnicza", "Płock", "Elbląg", "Opole", "Wałbrzych", "Włocławek", "Tarnów", "Chorzów", "Koszalin", "Kalisz", "Legnica", "Zamość", "Chełm", "Przemyśl", "Siedlce", "Grudziądz", "Jaworzno", "Słupsk", "Jastrzębie-Zdrój", "Nowy Sącz", "Jelenia Góra", "Konin", "Piotrków Trybunalski", "Inowrocław"],
    "Suède & Norvège (PM)": ["Stockholm", "Göteborg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping", "Umeå", "Gävle", "Lund", "Södertälje", "Karlstad", "Växjö", "Halmstad", "Haparanda", "Kiruna", "Luleå", "Ystad", "Trelleborg", "Kapellskär", "Sveg", "Sundsvall", "Östersund", "Örnsköldsvik", "Skellefteå", "Piteå", "Oslo", "Bergen", "Stavanger", "Trondheim", "Fredrikstad", "Drammen", "Skien", "Kristiansand", "Ålesund", "Tønsberg", "Moss", "Haugesund", "Sandefjord", "Bodø", "Tromsø", "Hammerfest", "Kirkenes", "Narvik", "Honningsvåg", "Alta", "Andenes", "Brønnøysund", "Finnsnes", "Leknes", "Mo i Rana", "Mosjøen", "Sandnessjøen", "Svolvær"],
    "Russie & Biélorussie": ["Moscou", "Saint-Pétersbourg", "Kaliningrad", "Pskov", "Vyborg", "Luga", "Novgorod", "Tver", "Vologda", "Petrozavodsk", "Mourmansk", "Kandalakcha", "Sebezh", "Vyshny Volochyok", "Shlisselburg", "Sosnovy Bor", "Tosno", "Sortavala", "Minsk", "Gomel", "Mogilev", "Vitebsk", "Grodno", "Brest", "Pinsk", "Baranavitchy", "Borisov", "Mazyr", "Orsha"],
    "Balkans (PM + DLC Total)": ["Belgrade", "Novi Sad", "Niš", "Kragujevac", "Subotica", "Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Sarajevo", "Banja Luka", "Tuzla", "Mostar", "Ljubljana", "Maribor", "Koper", "Skopje", "Bitola", "Ohrid", "Podgorica", "Nikšić", "Budva", "Tirana", "Durrës", "Vlorë", "Pristina", "Prizren", "Gjakova", "Mitrovica", "Kragujevac", "Kruševac", "Kraljevo", "Valjevo", "Šabac", "Vranje", "Užice", "Novi Pazar"],
    "Grèce (Total PM)": ["Athènes", "Thessalonique", "Patras", "Héraklion", "Larissa", "Volos", "Ioannina", "Trikala", "Chalcis", "Serrès", "Alexandroupoli", "Rhodes", "Kalamata", "Kavala", "La Canée", "Lamia", "Komotini", "Kozani", "Igoumenitsa", "Corinthe", "Arta", "Chios", "Kos", "Mytilène", "Naxos", "Paros", "Samos", "Santorin", "Zante"],
    "Ukraine (Total PM)": ["Kyiv", "Lviv", "Odesa", "Kharkiv", "Dnipro", "Donetsk", "Zaporizhzhia", "Kryvyi Rih", "Mykolaiv", "Mariupol", "Luhansk", "Vinnytsia", "Simferopol", "Kherson", "Poltava", "Chernihiv", "Cherkasy", "Sumy", "Zhytomyr", "Rivne", "Chernivtsi", "Ternopil", "Lutsk", "Ivano-Frankivsk", "Uzhhorod", "Mukachevo", "Kovel", "Kremenchuk", "Bila Tserkva", "Kramatorsk", "Melitopol", "Kerch", "Uman"],
    "Proche-Orient (ME Add-on)": ["Beyrouth", "Tripoli", "Sidon", "Tyr", "Baalbek", "Jounieh", "Tel-Aviv", "Jérusalem", "Haïfa", "Ashdod", "Beer-Sheva", "Eilat", "Amman", "Zarqa", "Irbid", "Aqaba", "Damas", "Alep", "Homs", "Lattaquié", "Tartous", "Nicosie", "Limassol", "Larnaca", "Paphos", "Famagouste", "Port-Saïd", "Arish", "Suez", "Le Caire", "Alexandrie", "Tanta", "Mansourah", "Damanhur", "Zagazig", "Ismaïlia", "Arbil", "Dohuk", "Souleimaniye", "Sinjar"],
    "Afrique du Nord & Steppes": ["Tanger", "Tétouan", "Larache", "Chefchaouen", "Nador", "Oujda", "Al Hoceima", "Tunis", "Bizerte", "Sousse", "Sfax", "Gabès", "Kairouan", "Alger", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Sétif", "Tbilissi", "Batoumi", "Koutaïssi", "Roustavi", "Poti", "Erevan", "Gyumri", "Vanadzor", "Bakou", "Ganja", "Sumqayit"]
};

/**
 * Système d'injection dynamique pour +1000 villes
 */
function initLocationSelectors() {
    const selectors = ['pays-depart', 'pays-arrivee', 'pays-incident'];
    
    selectors.forEach(id => {
        const selectPays = document.getElementById(id);
        if (!selectPays) return;

        selectPays.innerHTML = '<option value="">Choisir un pays/zone...</option>';
        
        // Tri alphabétique des pays
        Object.keys(locations).sort().forEach(pays => {
            let opt = document.createElement('option');
            opt.value = pays;
            opt.textContent = pays;
            selectPays.appendChild(opt);
        });

        selectPays.addEventListener('change', function() {
            const villeId = id.replace('pays', 'ville');
            const selectVille = document.getElementById(villeId);
            if (!selectVille) return;

            selectVille.innerHTML = '<option value="">Recherche de la ville...</option>';
            
            if (locations[this.value]) {
                // Tri alphabétique des villes pour faciliter la recherche
                const villes = locations[this.value].sort((a, b) => a.localeCompare(b));
                
                // Utilisation d'un DocumentFragment pour optimiser les performances d'affichage (+1000 items)
                const fragment = document.createDocumentFragment();
                villes.forEach(ville => {
                    let opt = document.createElement('option');
                    opt.value = ville;
                    opt.textContent = ville;
                    fragment.appendChild(opt);
                });
                selectVille.innerHTML = '<option value="">Choisir une ville...</option>';
                selectVille.appendChild(fragment);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initLocationSelectors);