let plava = false;

function colorChange() {
    if (plava) {
        document.body.style.backgroundColor = "red";
        plava = false;
    } else {
        document.body.style.backgroundColor = "blue";
        plava = true;
    }
}