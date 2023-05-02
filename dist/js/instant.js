var instant     = document.querySelector('#instant');
var instantBkg  = document.querySelector('#instant-background');
var closeBtn    = document.querySelector('#close');

instant.addEventListener('click', function(ev){
    ev.stopPropagation();
    ev.preventDefault();
    if(ev.target.nodeName != 'path'){
        // if(window.innerWidth > 1000){
            instant.classList.toggle('active');
            instantBkg.classList.toggle('active');
        // }
    }
});
window.addEventListener('resize', siempreInactive);
instantBkg.addEventListener('click', makeInactive);
closeBtn.addEventListener('click', function(ev){
    ev.stopPropagation();
    instant.classList.toggle('active');
    instantBkg.classList.toggle('active');
});

function toggleActive(){
    // ev.stopPropagation();
    // ev.preventDefault();
    // if(window.innerWidth > 1000){
    instant.classList.toggle('active');
    instantBkg.classList.toggle('active');
    // }
}

function siempreInactive(){
    // if(window.innerWidth < 1000){
        instant.classList.remove('active');
        instantBkg.classList.remove('active');
    // }
}

function makeInactive(){
    instant.classList.remove('active');
    instantBkg.classList.remove('active');
}
