function markCompleted(button) {
    button.classList.add("completed");
    button.textContent = "Completada";
    button.disabled = true;
}
