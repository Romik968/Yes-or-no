function answer(choice) {
    if (choice === 'yes') {
        alert("Ты меня любишь! ❤️");
    } else {
        moveButtonRandomly();
    }
}

function moveButtonRandomly() {
    const noButton = document.getElementById("no");

    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}