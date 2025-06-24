const messages = [
    "Eres lo mejor que me haya pasado :)",
    "Gracias por volver a mi vida",
    "Siempre te llevare en mi cocoro",
    "Espero estar contigo algun dia <3",
    "Tu risa ilumina mis dias <:",
    "Siempre pienso en ti <3",
    "Mi corazon siempre sera tuyo",
    "Mi color favorito siempre seran el de tus ojos",
    "Contigo mejorare la raza JAJAJAJA xd",
    "Ya no se que poner ayuda xd"
];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }

        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        if (rect.left < 0) {
            bubble.style.left = "10px";
        }

        if (rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 500);
