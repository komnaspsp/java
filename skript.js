// let condition = false;
// let userName = prompt ('Введите своё имя!!');
// console. log(userName);
// if(userName =="Путин"){
// alert('Ты внезапно стал путиным!!')
// }else{
//     alert('Ты старина Байден забылся!!')
// }
// switch(userName){
//     case 'Путин':
//         alert('Ты внезапно стал путиным!!');
//         break;
//         case 'Шарик':
//         alert('Шарик, убери лапу с клавиатуры');
//         case 'Барсик':
//             alert('Ты Барсик');
//             break;
//             default:
//                 alert('Ты какое-то непонятное чудо, определись!!');
// }
// for(let i = 0; i < 10; i++){
//     debugger
// console.log(i * 5);
// }
// let userName = prompt ('Введите своё имя!!');
// while(userName !='q'){
//     console.log(userName);
//     UserName = prompt ("Для того чтобы войти введите q");
//     if(userName =='dog'){
//         alert('Продолжаем! введено dog');
//         continue;
//     }
//   if(userName =='ket'){
//     alert('Ты кто');
//     break;
//   }
// }
// let ar = ['шарик', 'барсик', 'мусик'];
// console.log(ar.length);
// ar.push('Иван Иванович');
// console.log(ar.length);
// console
let ManySunn = document.getElementById('many').value;
let manySelect = document.getElementById('checkmany').value;
let Outresult = document.getElementById('out');
let arr = [88.56,12.39,97.54,0.60]
  function converter(){
    let res = ManySunn * arr[manySelect -1];
    Outresult.innerText = `Стоимость по курсу ${res}`;
  }


 