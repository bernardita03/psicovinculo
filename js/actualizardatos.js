document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const rut = document.getElementById("rut").value;
    const birthDate = document.getElementById("birthDate").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const emergencyContact = document.getElementById("emergencyContact").value;
    const emergencyPhone = document.getElementById("emergencyPhone").value;

    const updatedData = {
        fullName,
        rut,
        birthDate,
        address,
        phone,
        email,
        emergencyContact,
        emergencyPhone
    };

    console.log("Datos actualizados:", updatedData);

    alert("Datos actualizados exitosamente.");
});
