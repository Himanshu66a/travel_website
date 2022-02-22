
function videoplayer(){
let variable = document.querySelectorAll('.circles');

variable.forEach( function(element){
    element.addEventListener('click',function(event){
        let x = event.target.getAttribute('data-src');
        let y = document.querySelector('.play');
        y.setAttribute("src", x);
         let z = event.target;
         z.classList.toggle("white");
        
    });
});
}
videoplayer();

var nav = document.querySelector('.navbar');
var ham =  document.querySelector('.hamburger');
ham.addEventListener('click',() => {
nav.classList.toggle("active");
})