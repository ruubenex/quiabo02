// Função para exibir/ocultar o menu de navegação
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Função para validar o formulário de contato
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
}