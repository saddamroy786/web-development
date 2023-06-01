burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
// navList = document.querySelector('.nav-list')



burger.addEventListener('click', ()=>{
navbar.classList.toggle('v-class-resp');
// nav-list.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');

})