$('.owl-carousel').owlCarousel({ /* Configuração owl carrosel */
    loop:true, /* Loop do carrosel */
    margin:10, /* Margen entre as imagens */
    nav:false, /* icone de navegação */
    responsive:{ /* Quanto responsivo ira ficar sobre cada tamanho de tela */
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
