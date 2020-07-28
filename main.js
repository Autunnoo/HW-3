// 1

const getMaxDigit = getNumber => {
  const number = getNumber.toString().slice('')
  return Math.max(...number)
}
document.write(
  `<hr/><b> Самое большое число из - 12349654567</b> </br> ${getMaxDigit(
    "12349654567"
  )} </br>`
);
// 2
function getDegree(number, degree) {
    let equally = 1;
    for (let i = 1; i <= degree; i++) {
        equally *= number;
    }
    
    return equally;
}

document.write(
  `<hr/><b> Степень числа - 2 в 5 степені </b> </br> ${getDegree(2, 5)} </br>`
);
// 3

function capitalize(name) {
    name = name.toLowerCase().split('');
    let a = name.shift().toUpperCase();
    nameLowerCas = a + name.join('');
    return nameLowerCas;
}
document.write(
  `<hr/><b>Перва заглавная</b> </br> ${capitalize("pasHKA")} </br>`
);
//4

function maxValue(number, proc) {
  let maxValu = number - number * proc /100;
  return maxValu;
}
document.write(
  `<hr/><b>Налог от 1000грн будт -  </b> </br> ${maxValue(
    1000,
    19.5
  )} грн </br>`
);
// 5

function getRandom (min, max){
  return parseInt(min + Math.random()* (max - min + 1))
}

document.write(
  `<hr/><b>Случайное число </b> </br> ${getRandom(1, 10)}  </br>`
);
// 6

function lettersAmount (a, b){
  a = a.toLowerCase();
  b = b.toLowerCase();
  let c = 0;
  for (let i = 0; i <= a.length; i++) {
    if ( a[i] === b) {
      c++;
    } else {
      continue;
    }
  }
 return c;
}
document.write(
  `<hr/><b>Сколько раз буква 'H' повторяется в 'HJgjgjhGHJGJHgjhgjhGJHFGJHGJFGkjh' ${lettersAmount(
    'HJgjgjhGHJGJHgjhgjhGJHFGJHGJFGkjh',
    "H"
  )}  раз.  </b>    </br>`
);


//7 



function convert(sum, curr) {
  curr = curr.toLowerCase();

  if (curr.includes('uah')) {
    sum = sum * 0.04;
  } else if (curr.includes('$')) {
    sum = sum * 27;
  } else if (curr.includes(' ')) {
    console.log('erRoR');
  } else {
    console.log('EROR');
  }
    return sum;
  }

document.write(
   `<hr/><b>Конверт 25 $</b> </br>  ${convert(
    25,"$"
    )}  </br>`
);

// 8 

function generate ( length = 8){
  let number = '0123456789';
  let pass = '';
  for (let i = 1; i <= length; i++){
    let character = Math.floor(Math.random() * number.length);
    pass += number.substring(character, character +1);
  }
    return pass;
}
document.write(
  ` <hr/> </br><b>Генерация случайного пароля на 8 цыфр </b> -  ${generate(
    8
  )} </br>`
);