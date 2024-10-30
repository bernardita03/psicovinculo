document.querySelectorAll('.section ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        const fileName = e.target.innerText;
        alert(`Estás a punto de descargar: ${fileName}`);
    });
});
