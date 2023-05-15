const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0; // slide atual 

function hideSlider() { // remover a class on do slide
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() { //adicionar a class on no slide
  slider[currentSlide].classList.add('on')
}
// As funções "nextSlider" e "prevSlider" são criadas para avançar e voltar os slides, respectivamente. A função "nextSlider" começa chamando a função "hideSlider", checa se o slide atual é o último slide da lista utilizando um condicional "if" e, se for, define o slide atual como o primeiro slide da lista. Caso contrário, incrementa o valor de "currentSlide". Em seguida, a função "showSlider" é chamada para exibir o slide atual. A função "prevSlider" é semelhante, mas decrementa o valor de "currentSlide" em vez de incrementá-lo e define o último slide como o slide atual caso o slide atual seja o primeiro slide da lista.


function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

// Por fim, os eventos "click" são adicionados aos botões "prev-button" e "next-button" com as funções "prevSlider" e "nextSlider" respectivamente, utilizando o método "addEventListener". Quando um dos botões é clicado, a função correspondente é chamada e o slide atual é atualizado.




btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);
document.addEventListener('keydown', function(event){
  var keyPressed = event.keyCode;

  switch(keyPressed){
    case 37:
      prevSlider()
    break;

    case 39:
      nextSlider()
      break;
  }


});
