// task1
// let dog= {name:'spaic',
//     age:1,
//     color:'gray',
//     poroda:'haski',
//     pol:'boy'
// }
// let human={name:'ivan',
//     age:23,
//     stature:170,
//     weight:'56кг',
//     pol:'man'
// }
// let car={
//     mark:'bmw'
//     model:'520i',
//     year:'2000',
//     fuel:'дизель',
//     bodyType:'sedan'
// }
// let flat={
//     floor:5,
//     numberOfRooms:3,
//     area:'Галицький',
//     city:'Львів',
//     balcony:false
// }
// let book={
//     name:"помилка Х",
//     author:'Малені',
//     numberOfPages:120,
//     genre:'Психологія',
//     year:2019
// }

// // task2
// let dogs=[
//     {name:'Спайк', age:1, color:'сірий', poroda:'хаскі', pol:'boy'},
//     {name:'ДІ', age:3, color:'білий', poroda:'пудель', pol:'girl'},
//     {name:'Мімі', age:3, color:'білий', poroda:'чихуахуа', pol:'girl'},
//     {name:'Прометей', age:2, color:'чорний', poroda:'доберман', pol:'boy'},
//     {name:'Саня', age:0.4, color:'коричневий', poroda:'коргі', pol:'boy'},
// ]
// console.log(dogs);
//
// let people=[
//     {name:'ivan', age:23, stature:170, weight:'56кг', pol:'man'},
//     {name:'vasya', age:13, stature:140, weight:'36кг', pol:'man'},
//     {name:'kolya', age:26, stature:180, weight:'87кг', pol:'man'},
//     {name:'vika', age:20, stature:160, weight:'50кг', pol:'girls'},
//     {name:'roma', age:27, stature:190, weight:'90кг', pol:'man'}
// ]
// console.log(people);
//
// let cars=[
//     {mark:'bmw',model:'520i', year:'2000', fuel:'дизель', bodyType:'седан'},
//     {mark:'volvo',model:'77-e', year:'2012', fuel:'бензин', bodyType:'пікап'},
//     {mark:'wv',model:'passat b', year:'2007', fuel:'дизель', bodyType:'седан'},
//     {mark:'opel',model:'astra', year:'1990', fuel:'дизель', bodyType:'седан'},
//     {mark:'audi',model:'405', year:'2017', fuel:'електро', bodyType:'седан'}
//     ]
// console.log(cars);

// // task3
// let house={
//     address:{city:'львів', district:'львівський',street:'лукаша',number:'4'},
//     numberOfFloors:4,
//     garage:true,
//     rooms:[
//         {numberOfWindows:1, bathroom:false, closet:true},
//         {numberOfWindows:2, bathroom:true, closet:false},
//         {numberOfWindows:1, bathroom:true, closet:true},
//         {numberOfWindows:2, bathroom:false, closet:true},
//     ],
//     loft:true
// }
// console.log(house);
//
// let drive={
//     name:'вася',
//     surname:'петухов',
//     middleName:'Олекійович',
//     address:{city:'львів', district:'львівський',street:'лукаша',number:'4'},
//     children:[
//         {name:'Антон',age:12,pol:'хлопець'},
//         {name:'Віка',age:3,pol:'дівчинка'},
// ],
//     drivingExperience:'12р'
// }
// console.log(drive);
//
// let toy={
//     type:'плюшева',
//     pseudonym:'гріша',
//     whoIsThis:'ведведик',
//     producer:{address:'киів,вул.УПА',year:'2020'},
//     availableInTheStore:[
//         {city:'львів', district:'львівський',street:'завальна',number:'4'},
//         {city:'львів', district:'',street:'стрийська',number:'98-а'},
//         {city:'львів', district:'львівський',street:'хімічна',number:'5'},
//         {city:'львів', district:'львівський',street:'лукаша',number:'2'},
//         {city:'Рудки', district:'бродівський',street:'Ст.Бандери',number:'21'},
//     ]
// }
// console.log(toy);
//
// let table={
//     type:'компютерний',
//     form:'кварат',
//     materail:'дуб',
//     producer:{address:'львів,вул.Городоцька',year:'2019'},
//     price:'100$',
//     available:[
//         {color:'red',doorHandles:'silver'},
//         {color:'gray',doorHandles:'silver'},
//         {color:'black',doorHandles:'gold'}
//         ]
// }
// console.log(table);
//
// let bag ={
//     type:'клач',
//     price:'200$',
//     presenceOfStrap:false,
//     color:'red',
//     producer:{address:'львів,вул.Городоцька',year:'2019'},
//     section:[
//         {lightning:false},
//         {lightning:true},
//         {lightning:true},
//         {lightning:false}
//     ]
// }
// console.log(bag);

// // task4
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(users[6].name);
// console.log(users[10].status);
// console.log(users[10].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age + users[4].name);
// console.log(users[5].name +users[5].age);

// task5
// let content=document.getElementById('content').textContent;
// let rules=document.getElementById('rules').textContent;
// console.log(rules);
// content='замініть текст параграфа з id \'content\' на будь-який інший';
// console.log(content);
// rules='замініть текст параграфа з id \'rules\' на будь-який інший';
// console.log(rules)
//
// //
// let body=document.getElementsByTagName("body");??
// ??
//
// let rules=document.querySelectorAll('#rules');
// console.log(rules);
// //
// let fcRules=document.querySelectorAll('.fc_rules');
// console.log(fcRules);
// for( fr  of fcRules){
// fr.style.color="red"
// }
// //
