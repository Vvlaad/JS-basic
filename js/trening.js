"use strict";

/* const answer = prompt('Как вас зовут?', ''); */

/* let value = prompt('Число?', '');

if (value>0) {
    alert('1');
} else if(value<0) {
    alert('-1');
} else if (value == 0) {
    alert('0');
} */

/* let askLogin = prompt('Your login?', '');

if (askLogin == 'Admin') {

    let pass = prompt('Enter Password');
    if (pass === 'I am master') {
        alert('Good Morning');
    } else if ( pass === '' || pass === null) {
        alert('cancel');
    } else {
        alert('missing password');
    }
}

else if (askLogin ===  '' || askLogin === null) {
    alert('cancel');
} else {
    alert('I dont know you!');
} */


/* let num = 5;
    while (num < 11) {
        console.log(num);
        num++;
    }

    for (let i = 20; i > 10; i--) {
        if (i === 13) {
            break;
            
        }
        console.log(i);
    } */

/* let i = 1;
        while (i <= 50) {
            console.log(i);
            i++;
        }
        
        let result = 1;
        let arr = [2, 3, 4, 5];
            for (let i = 0; i < arr.length; i++) {
                result = result * arr[i];
            }
            console.log(result);
        
let num = 11;
    while (num <= 33) {
        console.log(num);
        num++;
    } */

/* Выведите столбец четных чисел в промежутке от 0 до 100

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0){
            console.log(i);
        }
    } */

/* let result = 1;
for ( let i = 1; i <= 100; i++) {
    result += i;
}
    console.log(result);
*/
/* let result = 0;
let arr = [1, 2, 3, 4, 5];
    for ( let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log(result); */

/* let obj = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'
};
    for (let key in obj) {
        console.log(`На англ ${key} значит на русском ${obj[key]}`);
    } */
/*Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата:Коля - зарплата 200$.
                let obj = {
                    Коля: ' 200',
                    Петя: ' 300',
                    Вася: ' 400'
                };
                    for (let key in obj) {
                        console.log(key + ' - зарплата' + obj[key] + '.');
                        console.log(`${key} - зарплата ${obj[key]}.`);
                    } */



                    /* let arr = [2, 5, 9, 15, 0, 4];
                        for (let i = 0; i < arr.length; i++) {
                            if (arr[i] > 3 && arr[i] < 10) {
                                console.log(arr[i]);
                            } else {
                                console.log('Error');
                            }
                        }  */

          
                    /* let result = 0;
                    let arr = [1, 2, 3, -1,-2,-3];
                        for (let i = 0; i < arr.length; i++) {
                            if (arr[i] > 0) {
                                result += arr[i];
                            } else {
                                console.log('error');
                            }
                        }
                            console.log(result); */


/* let arr = [1, 2, 5, 9, 4, 13, 4, 10];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 4) {
            console.log('Yes sir');
            break;
        } else {
            console.log('No');
        }
    } */

/* let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
    let num = String(arr[i]);
    let char = num[0]; 
    if (char == 1 || char == 2 || char == 5){
        console.log(num);
    }
} */

/* let result = '';
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for ( let i = 0; i < arr.length; i++) {
        result += '-' + arr[i];
    }
    console.log(result); */

/* let a = 10;
let b = 3;
let rest = a % b;
if ( rest != 0) {
    console.log('Делится с остатком' + rest);
} else {
    console.log('Делится без остатка' + (a / b));
}

let result = 0;
let arr = [ 4, 2, 5, 19, 13, 0, 10];
    for (let i = 0; i < arr.length; i++){
        result += Math.pow(arr[i], 3);
    }
console.log(Math.sqrt(result));
     */


/* let num = 379;
let result = Math.sqrt(num);
    console.log(Math.ceil(result));
    console.log(result.toFixed(1));
    console.log(result.toFixed(2)); */

/* let num = 379;
let result = Math.sqrt(num);
let obj = {
    ceil: Math.ceil(result),
    floor: Math.floor(result)
};
    console.log(obj); */

/*  let arr = [4, -2, 5, 19, -130, 0, 10];
     console.log(Math.max.apply(null, arr));
     console.log(Math.min.apply(null, arr)); */

/*  function getRandomInt(min, max) {
     return Math.ceil(Math.random() * (max - min + 1)) + min;
 }   
 console.log(getRandomInt(1, 100)); */

/* let result = 0;
let arr = [12, 15, 20, 25, 59, 79];
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
        console.log(result /= 6); */

/*  let str = 'Какой-то длинный и большой текст';
 let n = 26;
 let result = '';
     if (str.length > n) {
          result = str.substr(0,26) + '...';
     } else {
         result = str;
     }
     console.log(result); */


/* let str = 'Я-учу-javascript!';
    console.log(str.replace(/-/g,'!')); */

/*  let str = 'я учу javascript!';
  console.log(str.split([''],[17])); */

/* let date = '2025-12-31';
let arr = date.split(['-']);
console.log(arr);
let newDate = arr[2] + '/' + arr[1] + '/' + arr[0];
   console.log(newDate); */

/* let arr = ['я', 'учу', 'javascript', '!'];
let str = arr.join('+');
    console.log(str); */

/* let str = 'amazing';
let newStr = str[0].toUpperCase() + str.slice(1);
    console.log(newStr); */

/* let str = 'строка из трех';
let d;
let res = '';
    for ( let i = 0; i < str.length; i++) {
        d = str[i][0].toUpperCase();
        res += str[i].replace(str[i][0],d) + '';
    }
    console.log(res); */

/* let str = 'var_test_text',
newStr = str.replace(/_/g, ' '),
d,
result = '';
str = newStr.split(' ');
for( let i = 0; i < str.length; i++) {
    d = str[i][0].toUpperCase();
    result += str[i].replace(str[i][0],d) + '';
}                            
    console.log(result);
    */




/*  function calc(a,b,c) {
     let first = a - b;
     let res = first / c;
     return res;
    }
    let result = calc(21,7,2);
    console.log(result); */


/*  function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandomInt(1,7);

function getDay () {
  switch (num) {
      case 1: console.log('Понедельник');
      break;
      case 2: console.log('Вторник');
      break;
      case 3: console.log('Среда');
      break;
      case 4: console.log('Четверг');
      break;
      case 5: console.log('Пятница');
      break;
      case 6: console.log('Суббота');
      break;
      case 7: console.log('Воскресенье');
      break;
  }
  return (num);
}
  getDay();
  console.log(num); */

/* let arr = [1,2,3,4,5,6,7];
  function checkArr (array) {
      for (let i = 0; i < arr.length; i++) {
          if (array[i] == 5) {
              return true;
          }
      }
      return false;
  }
  let result = checkArr(arr);
  console.log(result);
*/
/* let arr = [1,2,3,4,5,6,7];
let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 5) {
           flag = true;
           break;
        } 
    }
    console.log(flag);
   if(flag === true) {
    console.log('Norm');
   } else {
    console.log('Ne norm');
   } */

/* let num = 31;
let flag = false;
for (let i = 2; i <= 30; i++) {
 if ( num / i) {
     flag = true;
     break;
 }
} 
if (flag === true) {
 console.log('Norm');
} else {
 console.log('Ne norm');
} */
/*  let num = 31;
 function checkNum (number) {
      for ( let i = 2; i <= 30; i++) {
          if (number / i) {
              return true;
          }
      }
      return false;
 }
 checkNum(num);
 console.log(checkNum(num)); */

/* let arr = [ 1,2,3,4,5,6];
 function checkArr(arr) {
     for (let i = 0; i <= arr.length; i++) {
         if (arr[i] == arr[i + arr.length] ) {
            return 'Yes';
         } 
        }
        return 'false';
 }
 let result = checkArr(arr);
 console.log(result); */
/* 
        let arr = [ 1,2,3,3,4,5,6];
        let flag = false;
         for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                flag = true;
                break;
            }
         }
         if (flag === true) {
            console.log('Yes');
         } else {
            console.log('No');
         }
          */

/* function checkNum (a,b) {
    if (a === b) {
        return true;
    } 
    return false;
}
let result = checkNum(3,4);
console.log(result); */

/* function checkNum(a,b) {
    if (a+b >10) {
        return true;
    }
    return false;
}
let result = checkNum(5,7);
    console.log(result); */

/* function checkNum(num) {
    if (num < 0) {
        return true;
    }
    return false;
}
let result = checkNum(-3);
    console.log(result); */

/* let str = '';
const l = 10;
for (let i = 1; i < l; i++) {
    for (let j = 0; j<i; j++) {
        str += 'x';
    }
    str += '\n';
}
console.log(str); */

/*  let str = '-';
 for (let i = 1; i<10; i++) {
     str += i;
     str += '-';
 }
 console.log(str); */

/*  let str = '';
 const l = 6;
 for ( let i = 2; i<=l; i++) {
     
     for (let j=1; j<i; j++) {
         str += 'xx' ;
     }
     str += '\n';
 }
 console.log(str);
*/
/*  let arr = [];
 for (let i = 1; i < 5; i++) {
     let str = '';
     for (let j = 0; j<i; j++){
         str = str + i;
     }
     arr.push(str);
 }
 console.log(arr); */

/* let arr = [];
    function arrayFill (value,length) {
        for (let i =0; i<length;i++) {
            arr.push(value);
        }
        return arr;
    }
    let result = arrayFill('*',5);
    console.log(result); */

/* let arr = [1,4,0,5,2,76,0];
function getArr (arr) {
    let sum = 0;
    for (let i =0; i < arr.length; i++){
        sum += arr[i];
        if(sum  > 10){
            return i+1;
        }
    } 
}
let result = getArr(arr);
console.log(result); */

/*  let arr = [4,6,4,2,6,7];
 let res = [];
     function getReverse (array) {
             for (let i = arr.length -1; i >=0; i--) {
                 res.push(arr[i]);
             }
             return array;
     }
     let result = getReverse(res);
 console.log(result); */

/* let sum = 0;
let arr = [[1, 2, 3], [4, 5], [6]];
for (let i = 0; i< arr.length; i++) {
for (let j = 0;j<arr[i].length;j++) {
    sum += arr[i][j];
}
}
console.log(sum); */

/* let sum = 0;
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < arr[j].length; k++){
                sum += arr[i][j][k];
            }
        }
    }
    console.log(sum); */

/* function isNumberInRange(num) {
    if (num > 0 && num < 10){
        return true;
    } else {
        return false;
    }
}
 

let arr = [1,2,3,4,5,6,7,43434,322,231,21];
let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if( isNumberInRange(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr); */




/* function getDigitsSum(num) {
    num = String(num);
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
    }
    return sum;
}
getDigitsSum();
 
 
for (let i = 1; i < 2022; i++) {
    if (getDigitsSum(i) == 13) {
        console.log(i);
    }
} */

/* function  isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
 

const arr = [ 1,2,3,4,5,6];
let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            newArr.push(isEven(arr[i]));
        }
    }
    console.log(newArr); */

/* function getDivisors(num) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
           arr.push(i);
        }
    }
     return arr;
}
let result = getDivisors(10);
 console.log(result); */

/* function ucfirst (str) {
  str = str.replace(/_/g,'');
  str = str.split(' ');
  let d;
  let newStr = '';
  for (let i = 0;i < str.length; i++) {
      d = str[i][0].toUpperCase();
      newStr += str[i].replace(str[i][0],d) + ' ';
  }
  return newStr;
}
let str = 'var_text_hello';
  console.log(ucfirst(str)); */


/* const arr = ['flip','twist','trick'];
function inArray(text,array) {
    for (let i = 0; i < array.length; i++) {
        if (arr[i] === text) {
            return true;
        }
    }
}
console.log(inArray('trick',arr)); */

/* let str = '123456';
    function createArr (str) {
        let arr = str.split('');
        let newArr = [];
        for ( let i = 0; i<arr.length; i+=2) {
            let temp = arr.slice(i,i + 2).reverse();
             newArr = newArr.concat(temp);
        }
        str = newArr.join('');
      return str;  
    }
console.log(createArr(str)); */

/* let num = 21;
let sum = 0;
 function calcNum(num) {
    num = String(num);
     for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
     }
     return sum;
 }
   
 function getNum(num) {
    if (calcNum(num) > 9) {
        return calcNum(num);
    } else {
        return sum;
    }
 }
    console.log(getNum(num)); */
/* 
    for (let i = 1; i<=100; i++) {
        if ( i % 2 == 0) {
            console.log(i);
        } else {
            console.log(`Кривое число = ${i}`);
        }
    }
    */

/*  let arr = [];

     function getRandomArbitary(min, max) {
         return Math.random() * (max - min) + min;
     }
      
         for (let i = 0; i <=10; i++) {
             arr[i] = getRandomArbitary(0,1).toFixed(2);
         }
 console.log(arr); */

/* let arr = [];
 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    for (let i = 0; i < 10; i++) {
        arr.push(getRandomInt(1,10));
        //arr[i] = getRandomInt(0,25);
        if (arr[i] > 0 && arr[i] < 10) {
            console.log(arr[i]);
        }
    } */


/* let arr = [];
    
   function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
   }
       for (let i = 0; i < 5; i++) {
           arr.push(getRandomInt(0,10));
               if (arr[i] == 5) {
                   console.log('Yeeeees');
                   break;
               } else {
                   console.log('fucking wrong :(');
               }
       } */

/* let arr = [];
let sum = 0;

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 5; i++) {
    arr.push(getRandomInt(0,10));
    sum += arr[i];
}
console.log(sum); */

/* let arr = [];
let sum = 0;

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 5; i++) {
    arr.push(getRandomInt(0,10));
    sum += arr[i]**2;
}
console.log(sum); */

/* let arr = [];
let sum = 0;

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 5; i++) {
    arr.push(getRandomInt(0,10));
    sum += arr[i] / arr.length;
}
console.log(sum); */



/*  let arr = [];
 function returnNeighboringNumbers(num) {
     arr.push( num - 1,num,num + 1);
     return arr;
 }
     console.log(returnNeighboringNumbers(7)); */

/* function getMathResult(num1,num2) {
    if (typeof(num2) !== 'number' || num2 <= 0 ) {
        return num1;
    } 
      let str = '';
      for (let i = 1;i <= num2; i++) {
        if (i === num2) {
            str += num1 * i;
        } else {
            str += num1 * i + '---';
        }
      }  
      return str;
}
    console.log(getMathResult(5,3)); */

/*  function calculateVolumeAndArea(lenghtCube) {
     
     if ( typeof(lenghtCube) == 'number') {
         let volume = lenghtCube * lenghtCube * lenghtCube;
         let area = 6*(lenghtCube * lenghtCube);
        return `Объем куба:${volume}, площадь всей поверхности:${area}`; 

     } else if ( typeof(lenghtCube) == 'string' || lenghtCube < 0 || !Number.isInteger(lenghtCube)) {
         return ('При вычислении произошла ошибка');
     }
 }
  console.log(calculateVolumeAndArea(6)); */

/* let num = 0;
function getCoupeNumber(num) {
   if ( typeof(num) == 'string') {
       console.log('Ошибка. Проверьте правильность введенного номера места');
   } else if (num < 1 || num > 36) {
       console.log('Таких мест в вагоне не существует');
   } else if (num == 1 || num == 2 || num == 3 || num == 4 ) {
       console.log(1);
   } else if (num == 5 || num == 6 || num == 7 || num == 8 ) {
       console.log(2);
   } else if (num == 9 || num == 10 || num == 11 || num == 12 ) {
       console.log(3);
   } else if (num == 13 || num == 14 || num == 15 || num == 16 ) {
       console.log(4);
   } else if (num == 17 || num == 18 || num == 19 || num == 20 ) {
       console.log(5);
   } else if (num == 21 || num == 22 || num == 23 || num == 24 ) {
       console.log(6);
   } else if (num == 25 || num == 26 || num == 27 || num == 28 ) {
       console.log(7);
   } else if (num == 29 || num == 30 || num == 31 || num == 32 ) {
       console.log(8);
   } else if (num == 33 || num == 34 || num == 35 || num == 6 ) {
       console.log(9);
   }
   return getCoupeNumber;
}
getCoupeNumber(num); */

/*  function getTimeFromMinutes(num) {
     if ( typeof(num) !== 'number' || num < 0 || !Number.isInteger(num) ) {
         return ('Ошибка, проверьте данные');
     } 
     let hour = Math.floor(num / 60);
     let minutes =  num % 60;
     if ( hour == 1) {
         return `Это ${hour} час и ${minutes} минут`;
     } else if ( hour > 1 && hour < 5) {
         return `Это ${hour} часа и ${minutes} минут`;
     } else if ( hour > 5 && hour < 11) {
         return `Это ${hour} часов и ${minutes} минут`;
     }
 }
     console.log(getTimeFromMinutes(130)); */

/* function findMaxNumber(a,b,c,d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
            return 0;
        } else {
            return Math.max(a,b,c,d);
        }
        if (a > b && a > c && a > d) {
            return a;
        } else if (b > a && b > c && b > d) {
            return b;
        } else if (c > b && c > a && c > d) {
            return c;
        } else if (d > b && d > c && d > a) {
            return d;
        }
        
}
console.log(findMaxNumber(1,20,3.3,4.9)); */

/*  let x = 5;
 console.log(x++); */

/* const family = ['Peter', 'Ann', 'Alex', 'Linda'];
 
function showFamily(arr) {
    let str = '';

   arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
    arr.forEach(function(name, i, arr){
        str += `${name} `;
    });
    
    return str;
        
    
}
console.log(showFamily(family)); */

/* const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

    function standardizeStrings(arr) {
        arr.forEach(function(cities, i,) {
            console.log(cities.toLowerCase());
        });
    }
       standardizeStrings(favoriteCities); */

/* const someString = 'This is some strange string';

    function reverse(str) {
        if ( typeof(str) != 'string') {
            return  'Ошибка!';
        } 
        let arr = str.split('');
        arr.reverse();
        str = arr.join('');
        return str;
    }
    console.log(reverse(someString)); */

/* const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

    function availableCurr(arr, missingCurr) {
        if (arr.length === 0) {
            return 'Нет доступных валют';
        }
         arr.concat(baseCurrencies,additionalCurrencies);
         let str = 'Доступные валюты:\n';
         arr.forEach(function(curr, i) {
            if (curr !== missingCurr) {
                str += `${curr}\n`;
            }
         });
         return str;
    }
        console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')); */



       
       /* const btn = document.querySelectorAll('button');
       btn[0].style.width = '200px';

       

       btn[0].addEventListener('click', () => {
            let q = document.getElementById('q');
            q.innerText = (q.innerText | 0) + 1;
       });

       btn[1].addEventListener('click', () => {
        let q = document.getElementById('q');
        q.innerText = 0;
   }); */


  /*  const inpt = document.querySelector('input');
   let clicks = 0;

   inpt.addEventListener('click', () => {

        let q = document.getElementById('q');
        ++clicks;
        q.value = `Click ${clicks} times`;
        
   });
       
    const btn = document.querySelector('button');

   btn.addEventListener('click', () => {

    let q = document.getElementById('q');
    q.value = `Click 0 times`;

}); */

/* const btn = document.querySelector('button');
btn.style.width = '150px';

btn.addEventListener('click', () => {
    let q = document.getElementById('q');
    let w = document.getElementById('w');
    let qValue = q.value;
    let wValue = w.value;
    q.value = wValue;
    w.value = qValue;
    
}); */



/* const btn = document.querySelector('button');
let slider = document.querySelector('.wrapper');
let img = slider.querySelectorAll('img');
let imgs = [ 'smile1.png', 'smile2.png', 'smile3.png' ];
let i = 0;
        img[0].src = 'img/' + imgs[0];
        img[1].src = 'img/' + imgs[1];
        img[2].src = 'img/' + imgs[2];

btn.addEventListener('click', () => {
    window.setInterval(function() {
        img[0].src = 'img/' + imgs[i+1];
        img[1].src = 'img/' + imgs[i+2];
        img[2].src = 'img/' + imgs[i];

        i++;
        
        if (i == imgs.length ) {
            
            i = 0;
            img[0].src = 'img/' + imgs[0];
            img[1].src = 'img/' + imgs[1];
            img[2].src = 'img/' + imgs[2];
        }
        
    }, 1000);
    
}); */




/* const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
    img.addEventListener('click', function getIMG() {
        alert(this.getAttribute('src'));
    });
}); */

/* const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('mouseenter', function addHref() {
        this.innerHTML += `(${this.href})`;
        this.removeEventListener('mouseenter', addHref);
    });
}); */



/* const arr = ['q','w','e','r'];

let ul = document.createElement('ul');
arr.reverse();
arr.forEach(item => {
    let li = document.createElement('li');
    li.innerHTML = item;
    ul.insertBefore(li,ul.firstElementChild);
});

document.body.after(ul); */


/* const ul = document.querySelector('.main'),
      btn = document.querySelector('button');
      
      btn.addEventListener('click', () => {
        let newList = document.createElement('li');
            newList.innerHTML = 'punkt';
        ul.append(newList);
      });

      ul.addEventListener('click', (event) => {
        if (event.target && event.target.tagName =='LI') {
            event.target.innerHTML += '!';
        }
      }); */

      /* const btn = document.querySelector("button"),
            table = document.querySelector('table'),
            inpts = document.querySelectorAll('input');

        btn.addEventListener('click', () => {
            let newTr = document.createElement('tr');
            let newTd = document.createElement('td');
            newTd.innerHTML = inpts[0].value;
            newTr.append(newTd);
            table.append(newTr);
            let newTr1 = document.createElement('tr');
            let newTd1 = document.createElement('td');
            newTd1.innerHTML = inpts[1].value;
            newTr.append(newTd1);
            table.append(newTr1);

        });

        inpts.forEach(inpt => {
            inpt.addEventListener('click', (e) => {
                if (e.target && e.target.tagName == 'INPUT') {
                    let question = prompt('Enter your data');
                    e.target.value = question;
                }
            });
        }); */

       /*  let countriesSelect = document.querySelector('#countries-select');
        let citiesSelect = document.querySelector('#cities-select');

        let data = {
            Ukraine: ['Kyiv', 'Kharkiv', 'Lviv'],
            USA: ['New York', 'Los-Angeles', 'Miami'],
            Germany: ['Berlin', 'Gamburg', 'Bremen'],
        };

        function addOptions(select, arr) {
            for (let i = 0; i < arr.length; i++){
                select.add(new Option(arr[i]));
             }
        }

        let countries = Object.keys(data);
        addOptions(countriesSelect, countries);

        let defaultCities = data[countries[0]];
        addOptions(citiesSelect, defaultCities);
       
        countriesSelect.addEventListener('change', function() {
           let cities = data[this.value];
           citiesSelect.length = 0;
           addOptions(citiesSelect, cities);
        }); */

        let yearSelect = document.querySelector('#year-select'),
            monthSelect = document.querySelector('#month-select'),
            daySelect = document.querySelector('#day-select');

            let date = new Date();
            let currentYear = date.getFullYear();
            let currentMonth = date.getMonth() + 1;
            let currentDay = date.getDate();
            

            fillSelect(yearSelect, range(currentYear - 10,currentYear + 10));
            fillSelect(monthSelect, range(1,12));
            fillSelect(daySelect, range(1,31));

            yearSelect.value = currentYear;
            monthSelect.value = currentMonth;
            daySelect.value = currentDay;

            yearSelect.addEventListener('focus', selectFocusHandle); 
           monthSelect.addEventListener('focus', selectFocusHandle);
           daySelect.addEventListener('focus', selectFocusHandle);

           yearSelect.addEventListener('change', selectChangeHandle); 
           monthSelect.addEventListener('change', selectChangeHandle);
           daySelect.addEventListener('change', selectChangeHandle);


           function selectChangeHandle() {
            if (checkDate(yearSelect.value,monthSelect.value,daySelect.value)) {

            } else {
                this.value = this.dataset.default;
            }
           }

           function selectFocusHandle() {
            this.dataset.default = this.value;
           }
          
        function fillSelect(select,arr) {
            arr.forEach(function (elem) {
                select.add(new Option(elem));
            }); 
        }

        function range(from, to) {
            let result = [];
            for (let i = from; i <= to; i++) {
                result.push(i);
            }
            return result;
        }

    function checkDate(year,month,day) {
        let date = new Date(year, month - 1, day);
        return date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day;
    }