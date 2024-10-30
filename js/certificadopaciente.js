function downloadCertificate() {
    // Simulación de descarga de un PDF
    const link = document.createElement('a');
    link.href = 'ruta_del_certificado.pdf'; // Cambia esta ruta por la correcta
    link.download = 'certificado.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
