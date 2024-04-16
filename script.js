
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const menu_toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#navMenu");

const toggleNavbar = () =>{
  open.classList.toggle('active');
  close.classList.toggle('active');
  navMenu.classList.toggle('active');
}
menu_toggle.addEventListener('click',()=> toggleNavbar());






const swiper = new Swiper('.swiper', {
        autoplay:{
            delay:3500
        },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});


const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian =>{
  const Qus = accordian.querySelector('.Qus');
  const Ans = accordian.querySelector('.Ans');
  const Icon = accordian.querySelector('.Icon');
   
  accordian.addEventListener('click',()=>{
    Icon.classList.toggle('active');
    Qus.classList.toggle('active');
    Ans.classList.toggle('active');
  });
});




var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function openAppartment(){
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(100%)";
  btn1.style.backgroundColor = "#f35525";
  btn2.style.backgroundColor = "#1e1e1e";
  btn3.style.backgroundColor = "#1e1e1e";
}
function openVilla(){
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(100%)";
  btn1.style.backgroundColor = "#1e1e1e";
  btn2.style.backgroundColor = "#f35525";
  btn3.style.backgroundColor = "#1e1e1e";
}
function openPenthouse(){
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(0)";
  btn1.style.backgroundColor = "#1e1e1e";
  btn2.style.backgroundColor = "#1e1e1e";
  btn3.style.backgroundColor = "#f35525";
}