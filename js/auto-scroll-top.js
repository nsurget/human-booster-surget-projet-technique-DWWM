const btn = document.querySelector('.btn-scroll-top');              /* Récuperation du bouton */

btn.addEventListener('click', () => {                  /* L'EventListener permet de détecter un événement lié au bouton, ici l'événement est 'click' */

    window.scrollTo({                                  /* window.scrollTo permet de déplacer l'affichage de la fenêtre vers top: 0, left: 0 de manière fluide ("smooth") */
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})


window.onscroll = function () {                                         /* window.onscroll se déclenche pendant le défilement de la fenêtre */
    const btnScrollTop = document.querySelector('.btn-scroll-top');     /* Récuperation du bouton */
    if (document.documentElement.scrollTop > 500) {                     /* document.documentElement.scrollTop représente la valeur du défilement vertical de la page */
        btnScrollTop.style.display = "block";                           /* Le bouton est initialement en display:none et devient visible après 500px */
    } else {
        btnScrollTop.style.display = "none";
    }
};