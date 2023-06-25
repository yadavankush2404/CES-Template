
window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    
    header.classList.toggle('scrolled',window.scrollY>2)});



    var menu= document.querySelector('#menu');
    var close = document.querySelector('#close');
    var nav = document.querySelector('.navbar');

    function f1(){
        // alert('ok');
        menu.style.display="none";
        close.style.display="block";
        nav.style.display="block";
    }

    function f2(){
        // alert('hm');
       close.style.display="none";
       menu.style.display="block";
       nav.style.display="none";
    }