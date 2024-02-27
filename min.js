function flipCard(cardContainer) {
  const allCards = document.querySelectorAll('.card');
  
  // Fecha todos os outros cards
  allCards.forEach(card => {
    if (card !== cardContainer.querySelector('.card')) {
      card.style.transform = 'rotateY(0deg)';
    }
  });

  // Abre ou fecha o card clicado
  const card = cardContainer.querySelector('.card');
  card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

$(document).ready(function(){
      $('.carousel').slick({
        centerMode: true,   // Ativa o modo centralizado
        centerPadding: '0',  // Não há espaçamento extra para a imagem central
        slidesToShow: 5,    // Número de imagens visíveis ao mesmo tempo
        autoplay: true,    // Ativa o autoplay
        autoplaySpeed: 2000,  // Velocidade do autoplay em milissegundos
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1
            }
          }
        ]
      });
    });