function modNum(array) {
  var numTell = [];
  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      numTell.push('(', array[index])
    } else if (index === 1) {
      numTell.push(array[index], ')', ' ')
    } else if (index === 6) {
      numTell.push(array[index], '-')
    }
    else {
      numTell.push(array[index])
    }
  }
  return numTell.join('');
}
// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let index = 0; index < array.length; index += 1) {
    let contaRepetidos = 0
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] == array[index2]) {
        contaRepetidos += 1
      }
    }
    if (contaRepetidos >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return modNum(array);

}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
