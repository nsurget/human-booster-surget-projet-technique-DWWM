var scrollPosition = 0                              /* position initiale du slider (au chargement de la page) */


function nextCard(){
    const sliderContent = document.querySelector('.card-slider-content');       /* card-slider-content est en display: flex et overflow: hidden, toutes les cartes sont alignées les unes à côté des autres, mais les dernières ne sont pas visibles car le débordement est masqué. */
    const itemSlider = sliderContent.querySelectorAll('.card-slider-item');     /* Récupération de la NodeList des cartes pour obtenir sa longueur (length). */
    if (scrollPosition >= (itemSlider.length - 4)){                             /* Le slider est en butée si la position du slider est égale à (itemSlider.length - 4), où 4 est le nombre d'éléments affichés par défaut. */
        return;
    }
    scrollPosition += 1;                                                           
    const widthSlider = document.querySelector('.card-slider-item').offsetWidth;    /* Recuperation de la width d'un slider */
    sliderContent.scrollLeft += widthSlider;                                        /* ScrollLeft permet de déplacer la div d'un nombre de pixels, ici widthSlider. */
    if (scrollPosition === (itemSlider.length - 4)){                                /* Si on atteint la butée, le bouton "next" récupère la classe "unavailable" qui désactive le bouton. */
        document.querySelector('.next-slide').classList.add("unavailable")
    } else {
        if (document.querySelector('.prev-slide.unavailable')) {                       /* Sinon, si le bouton .prev-slide a la classe "unavailable", On lui est retirée. */
            document.querySelector('.unavailable').classList.remove("unavailable");
        }
    }
    
}

function previousCard(){
    if (scrollPosition <= 0){
        return;
    }
    scrollPosition -= 1;                                                                /* scrollPosition -= 1 */
    const widthSlider = document.querySelector('.card-slider-item').offsetWidth;
    const sliderContent = document.querySelector('.card-slider-content');
    sliderContent.scrollLeft -= widthSlider;                                            /* scrollLeft de -widthSlider */
    if (scrollPosition === 0){
        document.querySelector('.prev-slide').classList.add("unavailable")
    } else {
        if (document.querySelector('.next-slide.unavailable')) {
            document.querySelector('.next-slide.unavailable').classList.remove("unavailable");
        }
    }
}

