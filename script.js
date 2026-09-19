function mostrarMensaje() {

    const sorpresa = document.getElementById("sorpresa");

    sorpresa.style.display = "block";

    crearCorazones();
}

function crearCorazones() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.zIndex = "10";

        heart.style.animation =
            "subir 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 4000);
    }
}

const style = document.createElement("style");

style.innerHTML = `

@keyframes subir {

    from {

        transform: translateY(0);

        opacity: 1;
    }

    to {

        transform: translateY(-100vh)
                   rotate(360deg);

        opacity: 0;
    }
}

`;

document.head.appendChild(style);