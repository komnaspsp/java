let btn = document.getElementById('start');
let temp = document.getElementById('fnode');
let canv = document.getElementById('ku')
btn.addEventListener('click',LoadFoto);
function LoadFoto(rangeFoto){
fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=10').then(result =>result.json())
.then(res =>res.photos).then (a => {
    let arr=[];
for(let i=0;i<10;i++){
    arr.push(a[i].url);
}
return arr;

}
).then(b=>{
    for(let i=0;i<10;i++){
        let foto = temp.content.cloneNode(true);
        foto.getElementById('ft').setAttribute('src',b[i])
        console.log(b[i]);
        canv.appendChild(foto);
}
}
);
}
