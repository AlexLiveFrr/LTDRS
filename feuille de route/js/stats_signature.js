document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('signature-pad');
    const ctx = canvas.getContext('2d');
    const clearBtn = document.getElementById('clear-signature');
    
    let drawing = false;

    // Ajuster la taille interne du canvas au chargement
    function resizeCanvas() {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        ctx.scale(ratio, ratio);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Configuration du trait
    ctx.strokeStyle = "#2c3e50";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    // Fonctions de dessin
    function startDrawing(e) {
        drawing = true;
        draw(e);
    }

    function stopDrawing() {
        drawing = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!drawing) return;
        e.preventDefault();

        const rect = canvas.getBoundingClientRect();
        // Gestion souris ou tactile
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    // Événements Souris
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDrawing);

    // Événements Tactiles (Mobile)
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    // Effacer
    clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});