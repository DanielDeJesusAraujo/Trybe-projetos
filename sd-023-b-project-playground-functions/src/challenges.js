// Desafio 1
function compareTrue(value1, value2) {
  // seu código aquiii
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ')
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let tam = array.length - 1
  let concat = array[tam] + ', ' + array[0]
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0];
  let contMaior = [];
  for (let key in array) {
    if (array[key] > maior)
      maior = array[key]
  }
  for (let key in array) {
    if (array[key] === maior) {
      contMaior.push(array[key])
    }
  }
  return contMaior.length
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1OfMouse = 0;
  let cat2OfMouse = 0;
  if (mouse > cat1) {
    cat1OfMouse = mouse - cat1
  } else {
    cat1OfMouse = cat1 - mouse
  }

  if (mouse > cat2) {
    cat2OfMouse = mouse - cat2
  } else {
    cat2OfMouse = cat2 - mouse
  }

  if (cat1OfMouse > cat2OfMouse) {
    return 'cat2'
  } else if (cat1OfMouse < cat2OfMouse) {
    return 'cat1'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}


// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultado = [];
  for (let key in array) {
    if (array[key] % 3 == 0 && array[key] % 5 != 0) {
      resultado.push('fizz')
    } else if (array[key] % 3 != 0 && array[key] % 5 == 0) {
      resultado.push('buzz')
    }
    else if (array[key] % 3 == 0 && array[key] % 5 == 0) {
      resultado.push('fizzBuzz')
    }
    else {
      resultado.push('bug!')
    }

  }
  return resultado;
}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let splitPhrase = phrase.split('');
  let phraseCode = []
  for (let key in phrase) {
    switch (phrase[key]) {
      case 'a':
        phraseCode.push('1');
        break;
      case 'e':
        phraseCode.push('2');
        break;
      case 'i':
        phraseCode.push('3');
        break;
      case 'o':
        phraseCode.push('4');
        break;
      case 'u':
        phraseCode.push('5');
        break;
      case '5':
        phraseCode.push('u');
        break;
      default:
        phraseCode.push(phrase[key])
    }
    
  }
  return phraseCode.join('')
}

function decode(phrase) {
  // seu código aqui
  let splitPhrase = phrase.split('');
  let phraseCode = []
  for (let key in phrase) {
    switch (phrase[key]) {
      case '1':
        phraseCode.push('a');
        break;
      case '2':
        phraseCode.push('e');
        break;
      case '3':
        phraseCode.push('i');
        break;
      case '4':
        phraseCode.push('o');
        break;
      case '5':
        phraseCode.push('u');
        break;
      default:
        phraseCode.push(phrase[key])
    }
    
  }
  return phraseCode.join('')
}

// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  if (name == undefined || technologies.length == 0){
    return 'Vazio!'
  }else{
    technologies.sort()
    let arrayDeObjetos = [];
    for (let key in technologies){
      arrayDeObjetos.push({tech:technologies[key], name:name});
    }
    return arrayDeObjetos;
  }
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
