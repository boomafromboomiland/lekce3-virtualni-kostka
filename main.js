// tady je místo pro náš program
let salary = 41000;
let personName = 'Ľubka';

if (salary >= 40000 && personName === 'Ľubka') { //true len ak je personName === 'Ľubka', inak výsledkom je druhá možnosť --> 'Mohlo by to byť lepšie'
  console.log('Pekný plat!');
} else if (salary >= 35000) {
  console.log('Mohlo by to byť lepšie')
} else {
  console.log('Nájdi si novú prácu');
}

/* logické operátory
&& a
|| alebo
! negácia (vždy na začiatku vety) a za ním zátvorky() --> if (!(salary > 40000 || personName === 'Ľubka'))
*/
