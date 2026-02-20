let $hungerMetter = document.getElementById(
  "hungerMetter",
) as HTMLProgressElement;
let $sleepMetter = document.getElementById(
  "sleepMetter",
) as HTMLProgressElement;
let $shitMetter = document.getElementById("shitMetter") as HTMLProgressElement;
let $debtMetter = document.getElementById("debtMetter") as HTMLProgressElement;
let $crippleMetter = document.getElementById(
  "crippleMetter",
) as HTMLProgressElement;

$hungerMetter.value = 100;
$sleepMetter.value = 100;
$shitMetter.value = 100;
$debtMetter.value = 100;
$crippleMetter.value = 100;

function updateMetters(metter: HTMLProgressElement) {
  let dice = Math.floor(Math.random() * 100);
  if (dice === 69) {
    console.log(dice);
    metter.value -= 10;
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
}, 1000);
