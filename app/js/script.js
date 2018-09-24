//WHAT WE DO SHOW/HIDE SCRIPT

const links = document.querySelectorAll('.box-link');
const textArr = document.querySelectorAll('.box-text');
const vsbl = document.querySelectorAll('.box .box-text.visible');
const mq = window.matchMedia( "(max-width: 767px)" );

if (mq.matches) {
    vsbl.forEach(elem => {
        elem.classList.remove('visible');
        elem.classList.add('hidden');
    });
}

links.forEach((link) => {
    link.addEventListener("click", showText);
    if (link.closest('.box').querySelector('.box-text').classList.contains("visible")){
        link.closest('.box').querySelector('button').innerHTML = '<i class="fa fa-chevron-up"></i>';
    } else {
        link.closest('.box').querySelector('button').innerHTML = '<i class="fa fa-chevron-down"></i>';
    }
});



function showText(e) {
   const content = e.target.closest('.box').querySelector('.box-text');
   const button= e.target.closest('.box').querySelector('button');
    if(content.classList.contains("visible")){
        content.classList.remove('visible');
        content.classList.add('hidden');
        button.innerHTML = '<i class="fa fa-chevron-down"></i>';
    } else {
        content.classList.remove('hidden');
        content.classList.add('visible', 'wow', 'bounceInUp');
        button.innerHTML = '<i class="fa fa-chevron-up"></i>';
    }
}