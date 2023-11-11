let lkg = document.getElementById('hg');
let lfnt = document.getElementById('fnt');
let lRes = document.getElementById('res');
console.log(lkg);
function convertKgToFunt(){
    let kg= lkg.value;//получаем значение из поля
    let fnt = lfnt.value; //получаем значение из поля
    const a = 0.454
    let result= kg/a; //получили резултат
    console.log('результат в фунтах' + result +' килограммов ');
lRes.innerText = result;

}
