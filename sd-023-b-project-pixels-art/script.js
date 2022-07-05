
window.onload = function () {//gera os pixels
  let inputSize = document.getElementById('board-size');
  inputSize.setAttribute('min', '1')
  let quadro = document.getElementById('pixel-board');

  function addPixels() {
    quadro.style.maxWidth = '210px'
    quadro.style.maxHeight = '210px'
    quadro.style.minWidth = '210px'
    quadro.style.minHeight = '210px'
    for (let index = 0; index < 5; index += 1) {
      for (let index = 0; index < 5; index += 1) {
        let pexel = document.createElement('div')
        pexel.classList.add('pixel')
        quadro.appendChild(pexel)
      }
    }
  }
  addPixels()

  function buttonClier() {
    let button = document.getElementById('clear-board')
    button.innerText = 'Limpar'
    button.addEventListener('click', clierPixels)
  }

  buttonClier()

  function colorPixel(e) {//colore os pixels
    let cor = document.getElementsByClassName('selected')[0];
    let cores = document.getElementsByClassName('color');
    for (let index = 0; index < cores.length; index += 1) {
      let palettePosition = document.getElementsByClassName('cor' + index)[0];
      if (cor === palettePosition) {
        e.currentTarget.classList.add('cor' + index)
      }
      if (cor !== palettePosition) {
        e.currentTarget.classList.remove('cor' + index)
      }
    }

  }

  function boardSize() {

  }


  function removePixels() {
    boardSize()
    let quadro = document.getElementById('pixel-board');
    while (quadro.lastChild) {
      //console.log(quadro.firstElementChild)
      quadro.removeChild(quadro.lastChild)
    }
    colorPixel()
  }


  function colorizePixels() {
    let pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].addEventListener('click', colorPixel)
    }
  }
  colorizePixels()

  function addPixelsCustom() {//gera o quado customizado
    let content = document.getElementById('pixel-board');
    let cont = Number(inputSize.value) * Number(inputSize.value)
    for (let index = 0; index < cont; index += 1) {
      let pexel = document.createElement('div')
      pexel.classList.add('pixel')
      content.appendChild(pexel)
    }
    colorizePixels()
  }

  function buttonAlterar() {
    let alterar = document.getElementById('generate-board');
    alterar.addEventListener('click', function () {
      if (Number(inputSize.value) > 4 && Number(inputSize.value) <= 50) {
        let area = Number(inputSize.value) * 42
        quadro.style.maxWidth = String(area) + 'px'
        quadro.style.maxHeight = String(area) + 'px'
        
        console.log(String(area) + 'px')
        removePixels()
      } else {
        window.alert('Board inválido!')
      }
    })
    alterar.addEventListener('click', function () {
      if (Number(inputSize.value) > 4 && Number(inputSize.value) <= 50) {
        addPixelsCustom()
      }
    })
  }

  buttonAlterar()

  function addSelected(e) {
    let palette = document.querySelectorAll('.color');
    console.log(`origem do evento${e.currentTarget}`)
    for (let index = 0; index < palette.length; index += 1) {
      if (palette[index] === e.currentTarget) {
        e.currentTarget.classList.add('selected')
        console.log(e.currentTarget);
      }
      if (palette[index] !== e.currentTarget) {
        //console.log(palette[index])
        palette[index].classList.remove('class', 'selected');
      }
    }
  }


  function clierPixels() {
    let pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].classList.remove('cor0', 'cor1', 'cor2', 'cor3')
    }
  }


  function selestcolor() {
    let palette = document.querySelectorAll('.color');
    palette[0].classList.add('selected')
    for (let index = 0; index < palette.length; index += 1) {
      palette[index].addEventListener('click', addSelected)
    }

  }
  selestcolor()


}


