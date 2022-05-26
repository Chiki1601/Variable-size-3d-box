const sliders=document.querySelectorAll(".slider");
const props=['--h','--w','--l']
for(let i=0;i<sliders.length;i++){
let changeH=function(){
   document.documentElement.style.setProperty(props[i],sliders[i].value+'px');
}
sliders[i].addEventListener("mousemove",changeH);
sliders[i].addEventListener("change",changeH);
}