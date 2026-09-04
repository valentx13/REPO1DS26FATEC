// ==================== MENU ====================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {

    menuButton.classList.toggle("is-active");
    menu.classList.toggle("is-active");

});


// ==================== FORMULÁRIO ====================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert("Obrigado pelo contato, " + nome + "!");

    contactForm.reset();

});


// ==================== GALERIA ====================

const changeImage = document.getElementById("changeImage");

const images = document.querySelectorAll("#galeria img");

let imageNumber = 4;

changeImage.addEventListener("click", function () {

    images.forEach(function (image) {

        image.src =
            "https://picsum.photos/600/400?random=" + imageNumber;

        imageNumber++;

    });

});


// ==================== MODAL DO CHAT ====================

const openChat = document.getElementById("openChat");

const chatModal = document.getElementById("chatModal");

const closeChat = document.getElementById("closeChat");

const cancelChat = document.getElementById("cancelChat");

const sendChat = document.getElementById("sendChat");

const chatMessage = document.getElementById("chatMessage");


// Abrir modal

openChat.addEventListener("click", function () {

    chatModal.classList.add("is-active");

});


// Fechar pelo X

closeChat.addEventListener("click", function () {

    chatModal.classList.remove("is-active");

});


// Fechar pelo botão cancelar

cancelChat.addEventListener("click", function () {

    chatModal.classList.remove("is-active");

});


// Fechar clicando no fundo

const modalBackground =
    document.querySelector(".modal-background");

modalBackground.addEventListener("click", function () {

    chatModal.classList.remove("is-active");

});


// Enviar mensagem

sendChat.addEventListener("click", function () {

    const mensagem = chatMessage.value.trim();

    if (mensagem === "") {

        alert("Digite uma mensagem antes de enviar.");

        return;

    }

    alert("Mensagem enviada com sucesso! ✅");

    chatMessage.value = "";

    chatModal.classList.remove("is-active");

});
