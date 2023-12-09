const btleft =document.getElementById("left");
const btup =document.getElementById("up");
const btdown =document.getElementById("down");
const btright =document.getElementById("right");
let monitor = document.getElementById("net");
let changeCar = document.getElementsByTagName("select")[0];
let imgLeft = document.getElementById("curLeft")
let imgUp = document.getElementById("curUp")
let imgDown= document.getElementById("curDown")
let group0tn = document.getElementById("group0tn");
let imgRight = document.getElementById("curRight")
group0tn.addEventListener("click", groupSelection);
let curTrans = 0;
if(localStorage.getItem("cur")){
}

changeCar.addEventListener("change",function(e){
  curTrans = changeCar.options.selectedIndex - 1;
  console.log(curTrans);
 curfolder = `${folder}${arrTrans[curTrans].path}/`;
let path = `${curfolder}left.jpg`;
console.log(path)
monitor.setAttribute("src",path);
////////
path = `${curfolder}left.jpg`
imgLeft.setAttribute("src",path);
 path = `${curfolder}up.jpg`
imgUp.setAttribute("src",path);
 path = `${curfolder}down.jpg`
imgDown.setAttribute("src",path);
 path = `${curfolder}right.jpg`
imgRight.setAttribute("src",path);
});
localStorage.setItem("cur", curTrans);
function groupSelection(e){
  let btn = e.target.getAttribute("id")
  switch(btn){
    case "left":
      runleft();
      break;
      case "up":
      runup();
      break;
      case "down":
      rundown();
      break;
      case "right":
      runright();
      break;
  }
}
const folder ="tanks/";
let arrTrans =[{path:"logan",
carName:"Логан"},
{path:"samosval",
carName:"Самосвал"},
{path:"t34",
carName: "Т 34" },
{path:"uas",
carName:"Уаз"}
];

let curfolder = `${folder}${arrTrans[curTrans].path}/`;

for(let i=0; i< arrTrans.length ; i++){
  let elOption = document.createElement("Option");
elOption.setAttribute("value", i);
elOption.textContent= arrTrans[i].carName;
changeCar.append(elOption);
}

// function runleft(){
// console.log("Поехали влево");
// let path = `${curfolder}left.jpg`;
// console.log(path)
// monitor.setAttribute("src",path);
// }


function runup(){
  console.log("Поехали вперед");
 let path = `${curfolder}up.jpg`
  monitor.setAttribute("src",path);
}
function rundown(){
  console.log("Поехали назад");
  let path = `${curfolder}down.jpg`
  monitor.setAttribute("src",path);
}
function runright(){
  console.log("Поехали вправо");
  let path = `${curfolder}right.jpg`
  monitor.setAttribute("src",path)
}
btleft.addEventListener('click',runleft);
btup.addEventListener('click',runup);
btdown.addEventListener('click',rundown);
btright.addEventListener('click',runright);
