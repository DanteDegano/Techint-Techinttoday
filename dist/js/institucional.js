var instiRow    =   document.querySelectorAll('.Institucional__row');

for (let i = 0; i < instiRow.length; i++) {
    instiRow[i].addEventListener('click', function(ev){
        this.classList.toggle('open');
        if(this.classList.contains('open')){
            this.children[0].children[0].src = 'dist/img/resources/insti-close.svg';
        }else{
            this.children[0].children[0].src = 'dist/img/resources/insti-open.svg';
        }
    })
}