// tady je místo pro náš program
/* Skúšanie podmienok
let salary = 41000;
let personName = 'Ľubka';

if (salary >= 40000 && personName === 'Ľubka') { //true len ak je personName === 'Ľubka', inak výsledkom je druhá možnosť --> 'Mohlo by to byť lepšie'
  console.log('Pekný plat!');
} else if (salary >= 35000) {
  console.log('Mohlo by to byť lepšie')
} else {
  console.log('Nájdi si novú prácu');
}
*/

/* logické operátory
&& a
|| alebo
! negácia (vždy na začiatku vety) a za ním zátvorky() --> if (!(salary > 40000 || personName === 'Ľubka'))
*/

/* Náhodné čísla
Math.random(); --> náhodné číslo medzi 0 a 1
Math.random() * 6; --> náhodné číslo medzi 0 a 1 a následné vynásobenie krát 6 - pre kocku napríklad
Math.round(1.73); - zaokrúhlenie --> 2
Math.floor(1,73); - uzemnenie -> 1
Math.ceil(Math.random() * 6); --> náhodné čísla medzi 0 až 1, následne vynásobenie krát 6 a následne zaokrúhlenie - stropovanie, zaokrúhlenie vyššie
Math.floor(Math.random() * 6 + 1); --> 
*/

/*Riešenie!!!

function hodKockou() {
  let zprava = document.querySelector('#zprava')
  let kostka = document.querySelector('#kostka')
  let hod = Math.floor(Math.random() * 6 + 1);
  if (hod === 6) {
  zprava.textContent = 'Vyhral si! :)';
  } else {
    zprava.textContent = 'Hodila si ' + hod + '. Skús to opäť!';
  }

  kostka.src = 'obrazky/' + hod + '.png';
}
*/

/*Môj pokus
function hodKockou() {
  let tlacitko = Math.floor(Math.random() * 6 + 1);
  if (tlacitko === 6) {
    document.getElementById('zprava').innerHTML = "Vyhral si!";
  } else {
    document.getElementById('zprava').innerHTML = "Skús to znova :(";
  };  
};

function zmenFotku() {
  let tlacitko = Math.floor(Math.random() * 6 + 1);
  if (tlacitko === 6) {
    document.getElementById('kostka').src="obrazky/6.png";
  } else if(tlacitko === 5) {
    document.getElementById('kostka').src=a.src;
  };  
  else if(tlacitko === 4) {
    document.getElementById('kostka').src=a.src;
  };  
  else if(tlacitko === 3) {
    document.getElementById('kostka').src=a.src;
  };  
  else if(tlacitko === 2) {
    document.getElementById('kostka').src=a.src;
  };  
  else if(tlacitko === 1) {
    document.getElementById('kostka').src=a.src;
  };  
};*/


