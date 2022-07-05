const toogleNavbar = document.getElementById('toogleNavbar');
const sidebar = document.getElementsByClassName('sidebar');
const sidebarHeader = document.getElementsByClassName('side-header');
const btnDelete = document.getElementsByClassName('btnDelete');

// btnDelete.addEventListener('click', ()=> {
//     console.log(btnDelete)
// })

toogleNavbar.addEventListener('click', ()=> {
    sidebar[0].classList.toggle('hidden');
    console.log(window.innerWidth)
    console.log('clicked');
})