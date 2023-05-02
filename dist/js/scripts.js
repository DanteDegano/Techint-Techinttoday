var header          =   document.querySelector('.Header');
var headerLogo      =   document.querySelector('.Header__logo');
var headerNav       =   document.querySelector('.Header__nav');
var headerSticky    =   document.querySelector('.Header-sticky');
var headerHamb      =   document.querySelector('.Header__hamb');
var pagesNav        =   document.querySelector('.Header__nav-pages-wrapper');
var linksWrapper    =   document.querySelectorAll('.links-wrapper');
var notiLink        =   document.querySelector('#item1-link');
var gestLink        =   document.querySelector('#item2-link');
var servLink        =   document.querySelector('#item3-link');
var lineLink        =   document.querySelector('#item4-link');

var notiMenu        =   document.querySelector('#item1-menu');
var gestMenu        =   document.querySelector('#item2-menu');
var servMenu        =   document.querySelector('#item3-menu');
var lineMenu        =   document.querySelector('#item4-menu');

var bkgScreen       =   document.querySelectorAll('.background-screen');
var wrapperAcceso   =   document.querySelector('#wrapper-acceso');
var wrapperAcceso2   =   document.querySelector('#wrapper-acceso2');
var inputAcceso     =   document.querySelector('#input-acceso');
var inputAcceso2     =   document.querySelector('#input-acceso2');
var accesoMenu      =   document.querySelector('#acceso-menu');
var accesoMenu2     =   document.querySelector('#acceso-menu2');

var sectionLinks    =   document.querySelectorAll('.section-link');
var subMenus        =   document.querySelectorAll('.submenu');

var allMenu         =   Array(notiMenu,gestMenu,servMenu,lineMenu);
var allLink         =   Array(notiLink,gestLink,servLink,lineLink );


const header_sticky2 = document.getElementById('header-sticky2');
const header_sticky2_aux = document.getElementById('header-sticky2_aux');
const header_sticky2_svg = document.getElementById('header-sticky2_svg');


/**
 *  Functions:
 */
function headerClearAll(){

    for (var index = 0; index < allMenu.length; index++) {
        allMenu[index].classList.remove('open');
    }


    for (var index = 0; index < allLink.length; index++) {
        allLink[index].classList.remove('open');
    }

    for (var index = 0; index < subMenus.length; index++) {
        subMenus[index].classList.remove('open');
    }
}

function sectionLinksClearAll(){

    for (var index = 0; index < sectionLinks.length; index++) {
        sectionLinks[index].classList.remove('active');
    }

    for (var index = 0; index < subMenus.length; index++) {
        subMenus[index].classList.remove('open');
    }
}




/**
 *  Eventlisteners:
 */

/**
 *  Linea transparente:
 */
 header_sticky2.addEventListener('click', function(ev){
    header_sticky2.focus();
    header_sticky2_aux.classList.toggle('block');
    header_sticky2_svg.classList.toggle('rotate180');
    header_sticky2.classList.toggle('change_color');
})

header_sticky2.addEventListener('mouseleave', function(ev){
    ev.preventDefault();
    header_sticky2_aux.classList.toggle('block');
    header_sticky2_svg.classList.toggle('rotate180');
    header_sticky2.classList.toggle('change_color');
})

/**
 * Acceso
 */

inputAcceso.addEventListener('click', function(ev){
    wrapperAcceso.classList.toggle('active');
    sectionLinksClearAll();
    headerClearAll();
})
inputAcceso.addEventListener('blur', function(ev){
    wrapperAcceso.classList.toggle('active');
    sectionLinksClearAll();
    headerClearAll();
})

inputAcceso2.addEventListener('click', function(ev){
    wrapperAcceso2.classList.toggle('active');
    sectionLinksClearAll();
    headerClearAll();
})


/*header.addEventListener('mouseleave', function(ev){
    wrapperAcceso.classList.remove('active');
    inputAcceso.blur();
    wrapperAcceso2.classList.remove('active');
    inputAcceso2.blur();
})

wrapperAcceso.addEventListener('mouseleave', function(ev){
    inputAcceso.blur();
    wrapperAcceso.classList.remove('active');
    inputAcceso.blur();
    wrapperAcceso2.classList.remove('active');
    inputAcceso2.blur();
})*/


/**
 * Header
 */
window.addEventListener('resize', function(){

    if(window.innerWidth < 1000 && header.classList.contains('sticky')){
        header.classList.remove('sticky');
    //   headerLogo.src = 'dist/img/resources/tecpetrol-logo.svg';
    }
    if(window.innerWidth > 1000){
        if(window.scrollY > 160){
            header.classList.add('sticky');
            //headerLogo.src = 'dist/img/resources/logo-sticky.svg';
        }else{
            header.classList.remove('sticky');
          //  headerLogo.src = 'dist/img/resources/tecpetrol-logo.svg';
        }
    }
})



window.addEventListener('scroll', function(){
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if(scrollTop > 160 && window.innerWidth > 1000){
        if(!header.classList.contains('sticky')){
            header.classList.add('sticky');
            //headerLogo.src = 'dist/img/resources/logo-sticky.svg';
        }
    }else{
        if(header.classList.contains('sticky')){
            header.classList.remove('sticky');
           // headerLogo.src = 'dist/img/resources/tecpetrol-logo.svg';
        }
    }
})


pagesNav.addEventListener('mouseover', function(ev){
    if(window.innerWidth > 1000){
        switch (ev.target.dataset.type) {
            case 'ITEM1':
                headerClearAll();
                sectionLinksClearAll();
                notiLink.classList.add('open');
                notiMenu.classList.add('open');
                wrapperAcceso.classList.remove('active');
                wrapperAcceso2.classList.remove('active');
                break;

            case 'ITEM2':
                headerClearAll();
                sectionLinksClearAll();
                gestLink.classList.add('open');
                gestMenu.classList.add('open');
                wrapperAcceso.classList.remove('active');
                wrapperAcceso2.classList.remove('active');
                break;

            case 'ITEM3':
                headerClearAll();
                sectionLinksClearAll();
                servLink.classList.add('open');
                servMenu.classList.add('open');
                wrapperAcceso.classList.remove('active');
                wrapperAcceso2.classList.remove('active');
                break;

            case 'ITEM4':
                headerClearAll();
                sectionLinksClearAll();
                lineLink.classList.add('open');
                lineMenu.classList.add('open');
                wrapperAcceso.classList.remove('active');
                wrapperAcceso2.classList.remove('active');
                break;
        }
    }
})

// Open submenus de lista2
gestMenu.addEventListener('mouseover', function(ev){
    if(window.innerWidth > 1000){
        if(ev.target.classList.contains('section-link')){
            sectionLinksClearAll();
            ev.target.classList.add('active');
            if(ev.target.nextElementSibling != null){
                if(ev.target.nextElementSibling.classList.contains('submenu')){
                    ev.target.nextElementSibling.classList.add('open');
                }
            }
    }
    }
})

// Open se submenus de lista3
servMenu.addEventListener('mouseover', function(ev){
    if(window.innerWidth > 1000){
        if(ev.target.classList.contains('section-link')){
            sectionLinksClearAll();
            ev.target.classList.add('active');
            if(ev.target.nextElementSibling != null){
                if(ev.target.nextElementSibling.classList.contains('submenu')){
                    ev.target.nextElementSibling.classList.add('open');
                }
            }
    }
    }
})

// Open se submenus de lista4
lineMenu.addEventListener('mouseover', function(ev){
    if(window.innerWidth > 1000){
        if(ev.target.classList.contains('section-link')){
            sectionLinksClearAll();
            ev.target.classList.add('active');
            if(ev.target.nextElementSibling != null){
                if(ev.target.nextElementSibling.classList.contains('submenu')){
                    ev.target.nextElementSibling.classList.add('open');
                }
            }
    }
    }
})

/**
 * Salida del header.
 */
header.addEventListener('mouseleave', function(ev){
    if(window.innerWidth > 1000){
        headerClearAll();
        sectionLinksClearAll();
    }
})

// bkgScreen.addEventListener('mouseover', function(ev){
//     headerClearAll();
//     sectionLinksClearAll();
// })
for (var index = 0; index < bkgScreen.length; index++) {
    bkgScreen[index].addEventListener('mouseover', function(ev){
        headerClearAll();
        sectionLinksClearAll();
    })
}


// subMenus.forEach(function(submenu){
//     submenu.addEventListener('mouseleave', function(){
//         subMenus.forEach(function(menu){
//             menu.classList.remove('open');
//         })
//     })
// })
for (var index = 0; index < subMenus.length; index++) {
    subMenus[index].addEventListener('mouseleave', function(){
        for (var j = 0; j < subMenus.length; j++) {
            if(subMenus[index] != undefined){
                subMenus[index][j].classList.remove('open');
            }
        }
    })
}

/**
 * Header < 1000
 */
 pagesNav.addEventListener('click', function(ev){
    if(window.innerWidth <= 1000){
        //TODO: clicks en botones del header.
    }
})

/**
*   Hamburguer:
*/
headerHamb.addEventListener('click', function(ev){
    headerHamb.classList.toggle('active');
    if(headerHamb.classList.contains('active')){
        headerNav.style.display = 'flex';
        headerSticky.style.display = 'flex';

    }else{
        headerNav.style.display = 'none';
        headerSticky.style.display = 'none';

    }
})


notiLink.addEventListener('click', function(ev){
    if(window.innerWidth <= 1000){
        notiLink.classList.toggle('open');
        if(notiLink.classList.contains('open')){
            notiMenu.classList.add('open');
        }else{
            notiMenu.classList.remove('open');
        }
    }
});

lineLink.addEventListener('click', function(ev){
    if(window.innerWidth <= 1000){
        lineLink.classList.toggle('open');
        if(lineLink.classList.contains('open')){
            lineMenu.classList.add('open');
        }else{
            lineMenu.classList.remove('open');
        }
    }
});

gestLink.addEventListener('click', function(ev){
    if(window.innerWidth <= 1000){
        gestLink.classList.toggle('open');
        if(gestLink.classList.contains('open')){
            gestMenu.classList.add('open');
        }else{
            gestMenu.classList.remove('open');
        }
    }
});

servLink.addEventListener('click', function(ev){
    if(window.innerWidth <= 1000){
        servLink.classList.toggle('open');
        if(servLink.classList.contains('open')){
            servMenu.classList.add('open');
        }else{
            servMenu.classList.remove('open');
        }
    }
});


for (var index = 0; index < sectionLinks.length; index++) {
    sectionLinks[index].addEventListener('click', function(ev){
        if(window.innerWidth <= 1000){
            this.classList.toggle('open');
            if(this.nextElementSibling != undefined){
                if(this.classList.contains('open')){
                    this.nextElementSibling.classList.add('open')
                }else{
                    this.nextElementSibling.classList.remove('open')
                }
            }
        }
    })
}
