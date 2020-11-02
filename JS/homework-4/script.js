// task1
let phone={
    model:'xs',
    producer:'apple',
    price:'1200$'
}
let coutry={
    population:'43000000',
    language:'English',
    squere:'543km^3'
}
let laptop={
    touchScreen:false,
    numberOfPorts:3,
    battery:'10000mA'
}

// //task2
// let car={
//     brand:'wv',
//     model:'t6',
//     countryManufacturer:'Germany',
//    fuelType:['gasoline', 'diesel', 'electro'],
//     seat:[
//         {heating:true,regulation:true,material:'skin'},
//         {heating:true,regulation:true,material:'skin'},
//         {heating:false,regulation:true,material:'skin'},
//         {heating:false,regulation:true,material:'skin'}
//         ]
// }
//
// let house={
//     location:{city:'lviv',street:'lukasha',house:'4'},
//     floors:'8',
//     apartment:[
//         {rooms:'3',floor:'3',bathrooms:'2'},
//         {rooms:'2',floor:'1',bathrooms:'1'},
//         {rooms:'3',floor:'3',bathrooms:'1'},
//         {rooms:'1',floor:'1',bathrooms:'1'},
//         {rooms:'2',floor:'1',bathrooms:'1'},
//         {rooms:'2',floor:'8',bathrooms:'1'},
//         {rooms:'4',floor:'5',bathrooms:'3'},
//         {rooms:'1',floor:'3',bathrooms:'1'},
//         {rooms:'1',floor:'3',bathrooms:'1'},
//         {rooms:'3',floor:'2',bathrooms:'3'},
//         {rooms:'1',floor:'1',bathrooms:'2'},
//     ],
//     emergencyExit:true,
//     videoSurveillance:false
// }
//
// let airport={
//     square:100+'cm3',
//     politics:[
//         {seats:'210',powerReserve:1200+'км'},
//         {seats:'290',powerReserve:1100+'км'},
//         {seats:'100',powerReserve:400+'км'},
//         {seats:'20',powerReserve:600+'км'},
//         {seats:'500',powerReserve:2200+'км'},
//         {seats:'230',powerReserve:1400+'км'},
//         {seats:'240',powerReserve:1100+'км'},
//         {seats:'120',powerReserve:900+'км'},
//         {seats:'50',powerReserve:300+'км'},
//     ],
//     strip:['300m','123m','500m'],
//     terminal:2,
//     bonus:false
// }
//
// let farts={
//     departments:[
//         {lightning:false},
//         {lightning:true}
//         ],
//     color:'black',
//     forWhom:'men',
//     cardCompartment:false,
//     logotype:'lacoste',
//     type:['folded','not sweet']
// }
//
// let tv={
//     gates:['usb','tc','hdmi'],
//     channel:[
//         {number:1,name:'kl1'},
//         {number:3,name:'ol'},
//         {number:4,name:'interrerne'},
//         {number:9,name:'kiload'}
//     ],
//     weight:'20kg',
//     diagonal:34,
//     leg:true
// }
// //task3
// for(carKey in car){
//     console.log(carKey);
// }
// for(houseKey in house){
//     console.log(houseKey);
// }
// for(airportKey in airport){
//     console.log(airportKey);
// }
// for(fartsKey in farts){
//     console.log(fartsKey);
// }
// for(tvKey in tv){
//     console.log(tvKey);
// }

// //task4
// console.log(Object.keys(car));
// console.log(Object.keys(house));
// console.log(Object.keys(airport));
// console.log(Object.keys(farts));
// console.log(Object.keys(tv));

//task5-7
let cars=[
    {model:'wv',year:'2001',power:'210kv', color:'grbaly'},
    {model:'opel',year:'20012',power:'100', color:'balck'},
    {model:'wv',year:'2002',power:'231', color:'red'},
    {model:'bmw',year:'2005',power:'70', color:'orange'},
    {model:'tesla',year:'2019',power:'32', color:'green'},
    {model:'mia',year:'2013',power:'123', color:'whier'},
    {model:'ga',year:'2020',power:'344', color:'pink'},
    {model:'mtz',year:'2011',power:'212', color:'black'},
    {model:'audi',year:'2004',power:'90', color:'yellow'},
    {model:'bsd',year:'2017',power:'56', color:'grey'}
]

let cities=[
    {name:'львів',population:120000, country:'Україна',region:'львівс'},
    {name:'київ',population:19000, country:'Україна',region:'київський '},
    {name:'суми',population:100000, country:'бельгія ',region:'загородний'},
    {name:'херсон',population:110000, country:'хісид',region:'міський'},
    {name:'теронпіль',population:10000, country:'Україна',region:'лавс'},
    {name:'рудки',population:12000, country:'литва',region:'раівс'},
    {name:'житомир',population:520000, country:'Україна',region:'психів'},
    {name:'одеса',population:110000, country:'британія',region:'ріо'},
    {name:'крим',population:220000, country:'Україна',region:'львівс'},
    {name:'донецьк',population:320000, country:'канада',region:'бойовий'},

]
let carsdriver=[
    {model:'wv',year:'2001',power:'210kv', color:'grbaly',drive:'vasya'},
    {model:'opel',year:'20012',power:'100', color:'balck',drive:'ivan'},
    {model:'wv',year:'2002',power:'231', color:'red',drive:'roma'},
    {model:'bmw',year:'2005',power:'70', color:'orange',drive:'kolya'},
    {model:'tesla',year:'2019',power:'32', color:'green',drive:'vasya'},
    {model:'mia',year:'2013',power:'123', color:'whier',drive:'andriy'},
    {model:'ga',year:'2020',power:'344', color:'pink',drive:'pol'},
    {model:'mtz',year:'2011',power:'212', color:'black',drive:'stetsham'},
    {model:'audi',year:'2004',power:'90', color:'yellow',drive:'petro'},
    {model:'siat',year:'2017',power:'56', color:'grey',drive:'misha'}
]
//task8-10
// let i=0
// while (i<=cars.length){
//     console.log(cars[i]);
//     i++;
// }
//
// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }
//
// for(car of cars){
//     console.log(car);
// }
//
// let i=0;
// while (i<=cities.length){
//     console.log(cities[i]);
//     i++;
// }
//
// for(let i=0;i<cities.length;i++){
//     console.log(cities[i]);
// }
//
// for(city of cities){
//     console.log(city);
// }
//
// let i=0;
// while (i<=carsdriver.length){
//     console.log(carsdriver[i]);
//     i++;
// }
//
// for(let i=0;i<carsdriver.length;i++){
//     console.log(carsdriver[i]);
// }
//
// for(card of carsdriver){
//     console.log(card);
// }

// //task11
// //nocomment on task 1
// let phoneString=JSON.stringify(phone);
// console.log(phoneString);
//
// let coutryString=JSON.stringify(coutry);
// console.log(coutryString);
//
// let laptopString=JSON.stringify(laptop);
// console.log(laptopString);
//
// let phoneCopy=JSON.parse(phoneString)
// console.log(phoneCopy);
//
// let coutryCopy=JSON.parse(coutryString);
// console.log(coutryCopy);
//
// let laptopCopy=JSON.parse(laptopString);
// console.log(laptopCopy);

// //task13-14
// for(car of cars){
//      let carString=JSON.stringify(car);
//     console.log(carString);
//
// }
// for(city of cities){
//     let cityString=JSON.stringify(city);
//     console.log(cityString);
// }

//task15
for(drive of carsdriver){
    driveString=JSON.stringify(drive);

}
carsdriverCopy=[carsdriver]
console.log(carsdriverCopy);

