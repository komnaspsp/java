// function sun(a,b){
//    let c = a + b;
//    console. log(c);
//    return c;
// }
// const f = sum;
// f (5,6);
// const d = (c,u)=>{
//   let res = c*u;
//   console. log(` результат умножения S(res)`);

// }
// d(5,20)
// let c = "глобальная";
//  function sun(a,b){
//    let c = a + b;
//    console. log(с);
//    if(c > 12){


//     let c = "Область блока";
//    }

//    console. log(`Выход из блока значение $(c)`);
//    return c;
//  }


//  sum (5,7);
//  console. log(c);

// let polkan = {
// poroda : 'алабай',
// speak: function() {
//   console .log(`Gav Gav`)
// },
// age: 100
// }
// //console.log(polkan);

// polkan.speak();
// let ar=[2,7,4,9,12,33];
// const fit (a) => a > 5 
// let f = ar.filter(fit);
// console. log(f);
	let users =[
{id:	1,
name:	"Leanne Graham",
username:	"Bret",
email:	"Sincere@april.biz",
age:25,
address:{
street:	"маршала Жукова",
suite:	"Apt. 556",
city:	"Gwenborough",
zipcode:	"92998-3874"}
},

{id:	2,
name:	"Ervin Howell",
username:	"Antonette",
email:	"Shanna@melissa.tv",
age:25,
address:{
street:	"Пер. дунаевского",
suite:	"Suite 879",
city:	"Wisokyburgh",
zipcode:	"90566-7771"}
},

{
  id:	3,
name:	"Clementine Bauch",
username:	"Samantha",
lng:	"81.1496",
phone:	"1-770-736-8031 x56442",
age:12,
website:	"hildegard.org",
address:{
  suite:	"Suite 879",
  city:	"Wisokyburgh",
  zipcode:	"90566-7771"}
}

//найти пользователей 25 лет и вывести;
let res1= users.filter(a=> a.age == 25);
console.table(res1);

//из массива пользователей сделать массив почтовых адресов;
let res2 = users.map(a=> a.email);
console.table(res2);
//найти пользователей, у которых в username нет буквы а;
let res3 = users.filter(n =>{
if(n.username.indexOf('a')==-1 && n.username.indexOf('A')==-1){
  return true;
}
return false;
}
);
console.table(res3);
;