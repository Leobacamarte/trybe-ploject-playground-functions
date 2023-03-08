// Desafio 1 - Crie a função compareTrue
  const compareTrue = (param1, param2) => param1 && param2 ? true : false; 

// Desafio 2 - Crie a função splitSentence
const splitSentence = (str) => {
  let spliter = str.split(' ');
  return spliter;
};

// Desafio 3 - Crie a função concatName
const concatName = (arr) => {
  let string1 = arr[arr.length - 1];
  let string2 = arr[0];
  return `${string1}, ${string2}`;
};

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => wins * 3 + ties;
// Desafio 5 - Crie a função highestCount
function highestCount(arr) {
  let highNum = Math.max.apply(null, arr);
  let counter = 0;
  for (let index = 0; index < arr.length; index++) {
    highNum === arr[index] && counter ++;
  }
  return counter;
}
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  if (form === "triângulo") {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (x, y, z) => {
  let cat1 = Math.abs(x - y);
  let cat2 = Math.abs(x - z);

  return cat1 > cat2 ? 'cat2' : cat1 < cat2 ? 'cat1' : 'os gatos trombam e o rato foge';
} 
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (arr) => {
  let str = [];
  for (let index = 0; index < arr.length; index++) {
    if(arr[index] % 15 == 0){
      str.push('fizzBuzz');
  }else if(arr[index] % 3 == 0){
      str.push('fizz');
  }else if(arr[index] % 5 == 0){
      str.push('buzz');
  } else {
    str.push('bug!')
  }
} return str
} 


// Desafio 9 - Crie a função encode e a função decode

const decode = (str) => {
  let decoder = str.split ('');
  for (let index = 0; index < decoder.length; index++) {
    if (decoder[index] === '1') {
      decoder[index] = 'a';
    } if (decoder[index] === '2') {
      decoder[index] = 'e';
    } if (decoder[index] === '3') {
      decoder[index] = 'i';
    } if (decoder[index] === '4') {
      decoder[index] = 'o';
    } if (decoder[index] === '5') {
      decoder[index] = 'u';
    }
} return decoder.join('');

}
const encode = (str) => {
  let encoder = str.split ('');
  for (let index = 0; index < encoder.length; index++) {
    if (encoder[index] === 'a') {
      encoder[index] = '1';
    } if ( encoder[index] === 'e') {
      encoder[index] = '2';
    } if (encoder[index] === 'i') {
      encoder[index] = '3';
    } if (encoder[index] === 'o') {
      encoder[index] = '4';
    } if (encoder[index] === 'u') {
      encoder[index] = '5';
    }
} return encoder.join('');
};

// Desafio 10 - Crie a função techList

const techList = (techs, name) => {  
  let arr = [];
  let listTech = techs.sort();

  for (let index = 0; index < listTech.length; index++) {
    arr.push({
      tech: listTech[index],
      name,
    });
  } return arr;
};
