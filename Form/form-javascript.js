function enviarFormularioVerificar() {
    // Obtener el valor del campo "email"
    const email = document.getElementById("emailInput").value;

    // Agregar el valor de "email" a la URL de action antes de enviar el formulario
    const form = document.querySelector('.form');
    form.action = `https://formsubmit.co/${email}`;
    

}

function enviarFormulario() {
    if (todosLosGruposTienenChecks()) {

        const email = document.getElementById("emailInput").value;
        const form = document.querySelector('.form');
        form.action = `https://formsubmit.co/${email}`;
        form.submit(); 
    } else {
        alert("Faltan algunas preguntas por responder, verifique que tiene todos los checks colocados correctos.");
    }
}

function todosLosGruposTienenChecks() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const grupos = new Set(); 

    checkboxes.forEach(checkbox => {
        grupos.add(checkbox.getAttribute("data-group"));
    });

    for (let grupo of grupos) {
        const checkboxesDelGrupo = document.querySelectorAll(`input[data-group="${grupo}"]`);
        const isChecked = Array.from(checkboxesDelGrupo).some(checkbox => checkbox.checked);

        if (!isChecked) {
            return false;
        }
    }

    return true;
}

function checkboxClicked(checkboxId) {

    const group = document.getElementById(checkboxId).getAttribute("data-group");

    const checkboxes = document.querySelectorAll(`input[data-group="${group}"]`); 
    checkboxes.forEach(checkbox => {
        if (checkbox.id !== checkboxId) {
            checkbox.checked = false;
        }
    });
}

