const humberger = document.querySelector('.header .nav-bar .nav-list .humberger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container');

// JS OF HUMBERGUER 
humberger.addEventListener('click',()=>{
    humberger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY
    if(scroll_position > 250){
        header.style.backgroundcolor = "#000000";
    }else{
        header.style.backgroundcolor = "transparent";
    }
})

menu_item.forEach((item) => { 
    item.addEventListener('click',() => {
        humberger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});