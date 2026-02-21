let $hungerMetter = document.getElementById("hungerMetter",) as HTMLProgressElement;
let $sleepMetter = document.getElementById("sleepMetter",) as HTMLProgressElement;
let $shitMetter = document.getElementById("shitMetter") as HTMLProgressElement;
let $debtMetter = document.getElementById("debtMetter") as HTMLProgressElement;
let $crippleMetter = document.getElementById("crippleMetter",) as HTMLProgressElement;
let $sprite = document.getElementById("sprite") as HTMLImageElement;

$sprite.src = "/sprites/happy.png";
$hungerMetter.value = 0;
$sleepMetter.value = 0;
$shitMetter.value = 0;
$debtMetter.value = 0;
$crippleMetter.value = 0;

function updateMetters(metter: HTMLProgressElement) {
  let dice = Math.floor(Math.random() * 100);
  if (dice === 69) {
    console.log(`${metter.id}, ${dice}`);
    metter.value += 10;
  } else {
    console.log("not 69");
  }
}

setInterval(() => {
  updateMetters($hungerMetter);
  updateMetters($sleepMetter);
  updateMetters($shitMetter);
  updateMetters($debtMetter);
  updateMetters($crippleMetter);

  updateSprite();
}, 1);


function checkIfFuckedUp() {
  if ($hungerMetter.value >= 30 && $sleepMetter.value >= 30 && $shitMetter.value >= 30 && $debtMetter.value >= 30 && $crippleMetter.value >= 30) {
    return true;
  } else {
    return false;
  }
}

function updateSprite() {
  let fuckedUp = checkIfFuckedUp();

  if (fuckedUp) {
    $sprite.src = "/sprites/beat.png";

  } else if ($hungerMetter.value >= 30) {
    $sprite.src = "/sprites/hungry.png";
  } else if ($sleepMetter.value >= 30) {
    $sprite.src = "/sprites/sleep.png";
  } else if ($debtMetter.value >= 30) {
    $sprite.src = "/sprites/worry.png";
  } else {
    $sprite.src = "/sprites/happy.png";
  }
}

