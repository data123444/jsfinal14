let eyeicon = document.getElementById("eyicon");
let password = document.getElementById("pass");

eyeicon.onclick = function(){
  if(password.type == "password"){
    password.type = "text";
  } else { 
    password.type = "password";
  }}



  export function hello(x) {
    console.log("hello world");
  }


window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('scroll-header', window.scrollY > 0);
});
