document.getElementById("formContacto").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const confirmaEmail = document.getElementById("confirmaEmail").value;

    if (email !== confirmaEmail) {
        alert("Los correos electrónicos no coinciden.");
        event.preventDefault();
        return;
    }

    const confirmar = confirm("¿Deseas enviar el formulario?");
    if (!confirmar) {
        event.preventDefault();
    }
});
