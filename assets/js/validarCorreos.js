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
        return;
    }
});

/* document.addEventListener("DOMContentLoaded", function(e) {
    let formularioContacto = document.getElementById("formContacto");
    formularioContacto.addEventListener("submit", function(event) {
        let email = document.getElementById("email").value;
        let confirmarEmail = document.getElementById("confirmarEmail").value;

        if (email !== confirmarEmail) {
            alert("Los correos electrónicos no coinciden.");
            e.preventDefault();
            return;
        }

        let confirmar = confirm("¿Deseas enviar el formulario?");
        if (!confirmar) {
            e.preventDefault();
        }
    })
}); */
