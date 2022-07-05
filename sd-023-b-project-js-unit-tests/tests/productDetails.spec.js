const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    //Teste se productDetails é uma função.
    expect((typeof productDetails === 'function')).toBeTruthy();
    //Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alcool gel', 'Máscara')[0] === 'object').toBeTruthy();
    expect(typeof productDetails('Alcool gel', 'Máscara')[1] === 'object').toBeTruthy();
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const object1 = productDetails('Alcool gel', 'Máscara');
    const object2 = productDetails('limpa-vidro', 'sera');
    expect(object1[0].name === object2[0].name).toBeFalsy();
    // Teste se os dois productIds terminam com 123.
    expect(object1[1].details.productId[object1[1].details.productId.length - 1]).toBe('3');
    expect(object1[1].details.productId[object1[1].details.productId.length - 2]).toBe('2');
    expect(object1[1].details.productId[object1[1].details.productId.length - 3]).toBe('1');
  });

  // console.log(productDetails('Alcool gel', 'Máscara')[0]);
  // console.log(productDetails('Alcool gel', 'Máscara')[1]);
  // const object1 = productDetails('Alcool gel', 'Máscara');
  // const object2 = productDetails('limpa-vidro', 'lampada');
  // console.log(object1, object2);
  // console.log(object1[0].name, object2[0].name);
  // console.log(object1[1].details.productId[object1[1].details.productId.length - 1]);
  // console.log(object1[1].details.productId[object1[1].details.productId.length - 4]);

});
