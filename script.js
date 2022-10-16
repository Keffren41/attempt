const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');
const hidden = [document.querySelector('.attempt'),document.querySelector('.account'),document.querySelector('.basket')];
const ul = document.querySelector('ul');
const search = document.querySelector('section#search');
const clear = document.querySelector('section#search .searchbar button.clear');
const searchbar = document.querySelector('section#search .searchbar input');
let tags = ['tag', 'test', 'lorem', 'ipsum'];


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
            search.classList.add("switched");
        }, 200);                                            // wait for the items to hide

    } 
    else {
        hamburger.classList.remove('is-active');            // restore menu icon
        header.classList.remove('exp');                     // collapse header

        ul.classList.remove("switched");
        search.classList.remove("switched");

        setTimeout(() => {
            hidden.forEach(element => {
                element.classList.remove('hidden');         // showing the logo and the other icons 
            });
        }, 300);                                            // wait for the menu icon to go to center
    }

});

clear.addEventListener('click',()=>{
    searchbar.value = '';
});


