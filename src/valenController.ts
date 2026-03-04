let $sprite = document.getElementById("sprite") as HTMLImageElement;
let offsetX = 0;
let $cronometter: any = document.getElementById("cronometter");
let $foodContainer = document.getElementById("foodContainer") as HTMLDivElement;

$cronometter.innerHTML = 15;
$sprite.style.transform = "translateX(50px)";



setInterval(() => {
    let random = Math.floor(Math.random() * 18) + 4;
    let food = document.createElement("img");

    food.src = "/sprites/pizza.png";

    food.classList.add("w-20", "relative", "z-1000", "food");
    // esta shit no va como clase de tailwind porque dios me ha abandonado
    food.style.marginLeft = `${random}rem`;
    $foodContainer.appendChild(food);

    // cuando termina la animacion se borra para que no me ocupe espaco en el section de shit
    food.addEventListener("animationend", () => {
        food.remove();
    });

}, 2000);

setInterval(() => {
    $cronometter.innerHTML = Number($cronometter.innerHTML) - 1;
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
    console.log(`Sprite posicionado en: ${x} px`);
}

$sprite.addEventListener("touchstart", start);
$sprite.addEventListener("touchmove", move, { passive: false });
