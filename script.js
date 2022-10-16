let hamburger = document.querySelector('.hamburger');
let header = document.querySelector('header');
let hidden = [document.querySelector('.attempt'),document.querySelector('.account'),document.querySelector('.basket')];
let ul = document.querySelector('ul');



hamburger.addEventListener('click',()=>{

    if(document.querySelectorAll('.is-active').length==0)   // check if hamburger menu toggled
    {
        hamburger.classList.add('is-active');               // menu icon collapse
        header.classList.add('exp');                        // expand header
        hidden.forEach(element => {
            element.classList.add('hidden');                // hide the logo and the other icons
        });
        setTimeout(() => {
            ul.classList.add("switched");                   // move the menu icon to center 
        }, 200);                                            // wait for the items to hide

    } 
    else {
        hamburger.classList.remove('is-active');            // restore menu icon
        header.classList.remove('exp');                     // collapse header

        ul.classList.remove("switched");

        setTimeout(() => {
            hidden.forEach(element => {
                element.classList.remove('hidden');         // showing the logo and the other icons 
            });
        }, 300);                                            // wait for the menu icon to go to center

    }

});

