let $hungerMetter = document.getElementById("hungerMetter",) as HTMLProgressElement;
let $faithMetter = document.getElementById("faithMetter",) as HTMLProgressElement;
let $shitMetter = document.getElementById("shitMetter") as HTMLProgressElement;
let $debtMetter = document.getElementById("debtMetter") as HTMLProgressElement;
let $crippleMetter = document.getElementById("crippleMetter",) as HTMLProgressElement;
let $sprite = document.getElementById("sprite") as HTMLImageElement;

let $hungerContainer = document.getElementById("hungerContainer");
function changeScreen() {
  window.location.href = "/feedScreen.html";
}

$hungerContainer?.addEventListener("click", changeScreen)

$sprite.src = "/sprites/happy.png";
$hungerMetter.value = 0;
$faithMetter.value = 0;
$shitMetter.value = 0;
$debtMetter.value = 0;
$crippleMetter.value = 0;

function updateMetters(metter: HTMLProgressElement) {
  let dice = Math.floor(Math.random() * 100);
  if (dice === 69) {
    // console.log(`${metter.id}, ${dice}`);
    metter.value += 10;
  } else {
    // console.log("not 69");
  }
}

setInterval(() => {
  updateMetters($hungerMetter);
  updateMetters($faithMetter);
  updateMetters($shitMetter);
  updateMetters($debtMetter);
  updateMetters($crippleMetter);

  updateSprite();
}, 500); //subir o bajar para cambiar la velocidad de los medidores🌝


function checkIfFuckedUp() {
  if ($hungerMetter.value >= 70 && $faithMetter.value >= 70 && $shitMetter.value >= 70 && $debtMetter.value >= 70 && $crippleMetter.value >= 70) {
    return true;
  } else {
    return false;
  }
}

function updateSprite() {
  let fuckedUp = checkIfFuckedUp();

  let observerDice = Math.floor(Math.random() * 100);
  console.log(`observerDice: ${observerDice}`);

  $sprite.addEventListener("change", () => {
    alert(`sprite: ${$sprite.src}`)
  })

  if (fuckedUp) {
    $sprite.src = "/sprites/beat.png";

  } else if ($hungerMetter.value >= 70) {
    $sprite.src = "/sprites/hungry.png";
  } else if ($faithMetter.value >= 70) {
    $sprite.src = "/sprites/sleep.png";
  } else if ($debtMetter.value >= 70) {
    $sprite.src = "/sprites/worry.png";
  } else {
    $sprite.src = "/sprites/happy.png";
  }

  if (observerDice === 67) {
    $sprite.src = "/sprites/observer.png";

  }

}

