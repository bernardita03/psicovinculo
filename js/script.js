document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logout').addEventListener('click', function() {
        alert('Cerrando sesión...');
        window.location.href = 'login.html';
    });

    // Subir imagen de perfil
    const uploadPhotoInput = document.getElementById('uploadPhoto');
    const profileImage = document.getElementById('profileImage');

    uploadPhotoInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

