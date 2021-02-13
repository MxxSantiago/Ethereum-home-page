const ref = document.querySelectorAll('.ref');
const mobileNavBar = document.querySelector('.mobile_nav_bar');
const mobileNav = document.querySelector('.mobile_nav_container');

// href header animation
ref.forEach( e => {
    e.addEventListener( 'mouseover', () =>{
        e.classList.add( 'hoverAnimation' )
    });

    e.addEventListener( 'mouseout', () => {
        e.classList.remove( 'hoverAnimation' )
    });
});

mobileNavBar.addEventListener( 'click', () => {
    if(mobileNav.classList.contains('on')){
        mobileNav.classList.remove('on');
        mobileNav.classList.add('off');
    }
    else{
        mobileNav.classList.remove('off');
        mobileNav.classList.add('on');
    }
});
