let $sprite = document.getElementById("sprite") as HTMLImageElement;
let offsetX = 0;
let $cronometter: any = document.getElementById("cronometter");

$cronometter.innerHTML = 0;
$sprite.style.transform = "translateX(50px)";

setInterval(() => {
    $cronometter.innerHTML = Number($cronometter.innerHTML) + 1;
    console.log($cronometter.innerHTML);
}, 1000);

setTimeout(() => {
    window.location.href = "/";
}, 15000);



function start(e: TouchEvent) {
    const touch = e.touches[0];
    const rect = $sprite.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
}

function move(e: TouchEvent) {
    if (e.cancelable) e.preventDefault();

    const displayWidth = window.innerWidth;
    const spriteWidth = $sprite.clientWidth;
    const touch = e.touches[0];
    const displayLimit = displayWidth - spriteWidth;

    let x = touch.pageX - offsetX;

    // valido los límites para que no se salga
    if (x < 0) x = 0;
    if (x > displayLimit) x = displayLimit;

    $sprite.style.transform = `translateX(${x}px)`;
    console.log(`Sprite posicionado en: ${x}px`);
}

$sprite.addEventListener('touchstart', start);
$sprite.addEventListener('touchmove', move, { passive: false });




