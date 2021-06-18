import $ from "jquery";

// import 'fullpage.js/vendors/scrolloverflow.min.js';
// import fullpage from "fullpage.js";
// import 'jquery-scrollify';

let module = (() => {
    function showMenu(){
        let btn = document.querySelector('.mobile-menu-btn');
        let nav = document.querySelector('.header__nav');
        btn.addEventListener('click', function(e){
            btn.classList.toggle('mobile-menu-btn--close-js');
            nav.classList.toggle('header__nav--active-js');
        });
        nav.addEventListener('click', function (e) {
            if (e.target.classList.contains('header__menu-link')) {
                btn.classList.remove('mobile-menu-btn--close-js');
                nav.classList.remove('header__nav--active-js');
            }             
        })
         
    }
    showMenu();

    function contactFormHome(){
        // плавающий label при фокусе
        let inp = document.querySelector('.home-contact__input');
        let label = document.querySelector('.home-contact__label');
        inp.addEventListener('focus', function(e){
            inp.classList.add('home-contact__input--focus');
        })
    }
    contactFormHome();
     

     
    
     
})();

export default module;