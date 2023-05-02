var icons                   =   document.querySelector('.icons');
var scrollData;
var reportModal             =   document.querySelector('.reportar-screen');
var reportBtn               =   document.querySelectorAll('.reportar');
var reportBkg               =   document.querySelector('.reportar-screen');
var reportCloseBtn          =   document.querySelector('#reportar-close-btn');
var reportSendBtn           =   document.querySelector('.report-btn.full');
var comentOpen              =   document.querySelector('#coment-open-icon');
var comentSection           =   document.querySelector('.NotaContent__body-comentarios');
var agregarComentBtn        =   document.querySelector('.NotaContent__body-comentarios-footer-comentar');
var agregarComentSection    =   document.querySelector('.NotaContent__body-comentarios-agregar-coment');
var comentClose             =   document.querySelector('#coment-close');
var shareEmailSection       =   document.querySelector('.share-email');
var emailCloseBtn           =   document.querySelector('#email-close');
var emailIcon               =   document.querySelector('#email-icon');
var emailBkg                =   document.querySelector('.share-email__background');
var tycPopin                =   document.querySelector('.tyc-popin');
var tycOpen                 =   document.querySelector('#tyc-checkbox');
var tycClose                =   document.querySelector('#tyc-close');


window.addEventListener('scroll', function(ev){
    if(window.innerWidth > 1000){
        if(!icons.classList.contains('fixed')){
            if(icons.getBoundingClientRect().top < 100){
                icons.classList.add('fixed');
                scrollData = window.scrollY || document.documentElement.scrollTop;
            }    
        }else{
            var scrollTop = window.scrollY || document.documentElement.scrollTop;;
            if(scrollTop < scrollData){
                icons.classList.remove('fixed');
            }
        }
    }else{
        if(icons.classList.contains('fixed')){
            icons.classList.remove('fixed');
        }
    }
})

/*tycOpen.addEventListener('click', function(ev){
    ev.stopPropagation();
    tycPopin.classList.add('open');
})*/



tycOpen.onchange = function() {
    if ( tycOpen.checked === true ) {
        tycPopin.classList.add('open');
    }
}


tycClose.addEventListener('click', function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    tycPopin.classList.remove('open');
})


reportCloseBtn.addEventListener('click', function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    reportModal.classList.remove('active');
})
reportSendBtn.addEventListener('click', function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    reportModal.classList.remove('active');
})

reportBkg.addEventListener('click', function(ev){
    ev.preventDefault();
    if(ev.target == this){
        reportModal.classList.remove('active');
    }
})
for (let i = 0; i < reportBtn.length; i++) {
    reportBtn[i].addEventListener('click', function(ev){
        ev.stopPropagation();
        ev.preventDefault();
        reportModal.classList.add('active');
    })
}

comentOpen.addEventListener('click', function(ev){
    comentSection.classList.toggle('open');
})

agregarComentBtn.addEventListener('click', function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    agregarComentSection.classList.add('open');
})

comentClose.addEventListener('click', function(ev){
    agregarComentSection.classList.remove('open');
})

emailIcon.addEventListener('click', function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    shareEmailSection.classList.add('open');
})

emailCloseBtn.addEventListener('click', function(ev){

    ev.stopPropagation();
    shareEmailSection.classList.remove('open');
})

emailBkg.addEventListener('click', function(ev){

    ev.stopPropagation();
    if(ev.target == this){
        shareEmailSection.classList.remove('open');
    }
})