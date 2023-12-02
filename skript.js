const btleft =document.getElementById("left");
const btup =document.getElementById("up");
const btdown =document.getElementById("down");
const btright =document.getElementById("right");
let monitor = document.getElementById("net");
const folder="tanks/";
let arrPath =["logan","Samoaval","t34","t90","uaz"];
let curTrans = 0;
function runleft(){
console.log("Поехали влево");
let path = `${folder}${arrPath[curTrans]}/left.jpg`
monitor.setAttribute("src",path);
}
function runup(){
  console.log("Поехали вперед");
  let path = `${folder}${arrPath[curTrans]}/up.jpg`
  monitor.setAttribute("src",path);
}
function rundown(){
  console.log("Поехали назад");
  let path = `${folder}${arrPath[curTrans]}/down.jpg`
  monitor.setAttribute("src",path);
}
function runright(){
  console.log("Поехали вправо");
  let path = `${folder}${arrPath[curTrans]}/right.jpg`
  monitor.setAttribute("src",path)
}
btleft.addEventListener('click',runleft);
btup.addEventListener('click',runup);
btdown.addEventListener('click',rundown);
btright.addEventListener('click',runright);
