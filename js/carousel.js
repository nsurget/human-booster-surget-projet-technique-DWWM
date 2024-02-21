let interval;


function previous() {
  const slides = document.querySelectorAll(".slide");             /* je recupère les slides de notre carousel */
  const slideActive = document.querySelector(".active");          /* je recupère le slide visible (class active) */
  let newIndex;
  newIndex =  [...slides].indexOf(slideActive) - 1;               /* querySelectorAll renvoi une NodeList et [...slides] permet de créer un tableau contenant les mêmes éléments */
                                                                  /* [...slides].indexOf(slideActive) est l'index de la slide active -> -1 pour prev et +1 pour next */

                                                           
  if (newIndex < 0) {                           /* condition de fin de boucle slide 1 et derniere slide ([...slides].length - 1) */
    newIndex = [...slides].length -1;
  }
  slideActive.classList.remove("active");                         /* classList.remove et classList.add pour "déplacer" la class active */
  slides[newIndex].classList.add("active");

  clearInterval(intervalScrollingCarousel);                                        /* Permet de réinitialiser l'intervalle du défilement automatique après utilisation d'un bouton */
  intervalScrollingCarousel = setInterval( next , 3500);
}

function next() {
  const slides = document.querySelectorAll(".slide");
  const slideActive = document.querySelector(".active");  
  let newIndex;
  newIndex =  [...slides].indexOf(slideActive) + 1;
  if (newIndex >= [...slides].length) {
    newIndex = 0;
  } 
  slideActive.classList.remove("active");
  slides[newIndex].classList.add("active");

  clearInterval(intervalScrollingCarousel);
  intervalScrollingCarousel = setInterval( next , 3500);
}

intervalScrollingCarousel = setInterval( next , 3500);
