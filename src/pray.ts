let $prayButton = document.getElementById("prayButton");
let prayCounter = 0;
let prayMax = Math.floor(Math.random() * 100);

console.log(prayMax);

function pray() {
    prayCounter++;
    console.log(prayCounter);
    if (prayCounter === prayMax) {
        window.location.href = "/index.html";
    }
}

$prayButton?.addEventListener("click", pray);




