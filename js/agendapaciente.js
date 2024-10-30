document.addEventListener("DOMContentLoaded", () => {
    const appointmentForm = document.getElementById("appointmentForm");
    const appointmentList = document.getElementById("appointmentList");

    // Ejemplo de citas existentes
    let appointments = [
        { psychologist: "Dr. Juan Pérez", date: "2024-10-30", time: "10:00" },
        { psychologist: "Dra. María Gómez", date: "2024-11-01", time: "15:00" }
    ];

    function renderAppointments() {
        appointmentList.innerHTML = "";
        appointments.forEach((appointment, index) => {
            const li = document.createElement("li");
            li.textContent = `Psicólogo: ${appointment.psychologist}, Fecha: ${appointment.date}, Hora: ${appointment.time}`;
            const cancelButton = document.createElement("button");
            cancelButton.textContent = "Cancelar";
            cancelButton.className = "cancel-btn";
            cancelButton.addEventListener("click", () => cancelAppointment(index));
            li.appendChild(cancelButton);
            appointmentList.appendChild(li);
        });
    }

    function cancelAppointment(index) {
        appointments.splice(index, 1);
        renderAppointments();
    }

    appointmentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const psychologist = document.getElementById("psychologist").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        
        appointments.push({ psychologist, date, time });
        renderAppointments();
        appointmentForm.reset();
    });

    renderAppointments();
});
