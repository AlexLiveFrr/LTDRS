async function downloadFeuille() {
    const { jsPDF } = window.jspdf;
    const element = document.getElementById('feuilleRoute');
    const btn = document.getElementById('downloadBtn');

    // Feedback visuel
    btn.innerHTML = "⌛ Génération...";
    btn.style.opacity = "0.7";

    try {
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            backgroundColor: getComputedStyle(document.body).getPropertyValue('--bg-card')
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Feuille_Route_${document.getElementById('idFeuille').value}.pdf`);
    } catch (error) {
        console.error("Erreur PDF:", error);
        alert("Erreur lors de la génération du PDF.");
    } finally {
        btn.innerHTML = "📥 Télécharger le PDF";
        btn.style.opacity = "1";
    }
}