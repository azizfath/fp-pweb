const toogleNavbar = document.getElementById('toogleNavbar');
const sidebar = document.getElementsByClassName('sidebar');
const sidebarHeader = document.getElementsByClassName('side-header');

toogleNavbar.addEventListener('click', ()=> {
    sidebar[0].classList.toggle('hidden');
    console.log(window.innerWidth)
    console.log('clicked');
})