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
            document.body.classList.toggle('body--hidden');
        });
        nav.addEventListener('click', function (e) {
            if (e.target.classList.contains('header__menu-link')) {
                btn.classList.remove('mobile-menu-btn--close-js');
                nav.classList.remove('header__nav--active-js');
                document.body.classList.remove('body--hidden');
            }             
        })
         
    }
    showMenu();

    function contactFormHome(){
        // плавающий label при фокусе
        let inp = document.querySelector('.home-newsletter__input');
        let label = document.querySelector('.home-newsletter__label');
        inp.addEventListener('focus', function(e){
            inp.classList.add('home-newsletter__input--focus');
        });
        inp.addEventListener('change', function (e) {
            if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,100}))$/g.test((e.target.value).trim())) {
                label.classList.remove('home-newsletter__label--error');
            } else {
                label.classList.add('home-newsletter__label--error');
            }
        });
        
    }
    contactFormHome();
     

     
    
     
})();

export default module;