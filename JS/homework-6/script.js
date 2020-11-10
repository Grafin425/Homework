// //task1
// class Tag{
//     constructor(name,attributes) {
//         this.name=name;
//         this.attributes=attributes;
//     }
//     action(){
//         console.log('I ama tag - '+`${this.name}`+', I have attributes i can do.....');
//     }
// }
// let a=new Tag('a',[{nameAtt:'accesskey',actionOfAtt:'i am atrributes is tag, i work....'},{name:'coors',actionOfAtt:'i am atrributes is tag, i work....'}])
// a.action()
// console.log(a);

// //task3
// // ==============================================
// //     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// //-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// //-- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
// let car={
//     model:'S',
//     product:'Tesla',
//     year:2018,
//     maxSpeed:180,
//     engineCapacity:'130kw'
// }
// function drive(object){
//     console.log('Їдемо зі швидкістю '+object.maxSpeed+' на годину')
// }
// function info(object){
//     console.log(object);
// }
// function increaseMaxSpeed(object,newSpeed){
//     object.maxSpeed += newSpeed;
// }
// increaseMaxSpeed(car,20);
// drive(car);
// info(car);

// //task4
// // Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
// function Car(model,product,year,maxSpeed,engineCapacity){
//     this.model=model;
//     this.product=product;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
// }
//  function drive (Speed){
// console.log(`їдемо зі швидкістю ${Speed} на годину`)
// }
//
// function info(car){
//     console.log(car.model,car.product,car.year,car.maxSpeed)
// }
//
// function increaseMaxSpeed (car,newSpeed){
//     car.maxSpeed+=newSpeed;
// }
//
// function changeYear (car,newValue){
//     car.year=newValue;
// }
// function addDriver (car,driver){
// //    незнаю як добавити поле в обєкт
// }
// let opel= new Car('virus','opel',2010,180,2.0);
// drive(opel.maxSpeed);
// info(opel);
// increaseMaxSpeed(opel,20)
// changeYear(opel,2000)
// let driveHuman={
//     name:'vasya',
//     ago:21,
// }
// addDriver(opel,driveHuman)
// console.log(opel);

// //task5
// // - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
// class Car{
//     constructor(model,producer,year,maxSpeed,capacityEngine) {
//         this.model=model;
//         this.producer=producer;
//         this.year=year;
//         this.maxSpeed=maxSpeed;
//         this.capacityEngine=capacityEngine;
//     }
//     drive (){
//         console.log('їдемо зі швидкістю '+this.maxSpeed+' на годину');
//     }
//     info(){
//         console.log('\n model: '+this.model+'\n producer: '+this.producer+'\n year: '+this.year+'\n maxSpeed: '+this.maxSpeed+'км/год'+'\n capacityEngine: '+this.capacityEngine)
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed+=newSpeed;
//     }
//     changeYear(newValue){
//         this.year=newValue;
//     }
//     addDriver (driver){
//         this.drive=driver;
//     }
// }
//
// let skoda= new Car('superB','skoda',2014,180,2.0)
// skoda.drive()
// skoda.info()
// skoda.increaseMaxSpeed(20);
// skoda.changeYear(2018);
// skoda.addDriver({name:'vasya',age:23,skills:'5 year'})
// console.log(skoda);

// //task6======================================
// // -створити класс попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// // ==============================================
// class cinderella {
//     constructor(name, year, sizeLeg) {
//         this.name = name;
//         this.year = year;
//         this.sizeLeg = sizeLeg;
//     }
// }
// let cinderellaArr=[]
// for (let i =0;i<3;i++) {
//
//     name = prompt('what is u` name?')
//     year = prompt('how old are you ?\n')
//     sizeLeg = prompt('What is the size of your leg\n')
//     let cind=new cinderella(name,+year,+sizeLeg);
//     cinderellaArr.push(cind)
//
// }
// console.log(cinderellaArr);
// class prince{
//     constructor(name,year,tyfelska) {
//         this.name=name;
//         this.year=year;
//         this.tyfelska=tyfelska;
//     }
// }
//
// let newPrince=new prince('вася',12,36);
// console.log(newPrince);
//     for (let cind of cinderellaArr) {
//         if(cind.sizeLeg===newPrince.tyfelska){
//             console.log(`Принц з принцесой ${cind.name}`)
//         }
//     }

// //task7
// //==============================================
// // -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// // ==============================================
// function Cinderella(name,year,sizeLeg){
//     this.name=name;
//     this.year=year;
//     this.sizeLeg=sizeLeg;
// }
// cinderellaArr=[]
// let cinderella1=new Cinderella('lilya',12,32);
// cinderellaArr.push(cinderella1)
//
// let cinderella2=new Cinderella('olya',15,31);
// cinderellaArr.push(cinderella2)
//
// let cinderella3=new Cinderella('nadya',19,36);
// cinderellaArr.push(cinderella3)
//
// let cinderella4=new Cinderella('maria',20,37);
// cinderellaArr.push(cinderella4)
//
// let cinderella5=new Cinderella('anna',18,42);
// cinderellaArr.push(cinderella5)
//
// let cinderella6=new Cinderella('ira',32,41);
// cinderellaArr.push(cinderella6)
//
// let cinderella7=new Cinderella('oksana',24,37);
// cinderellaArr.push(cinderella7)
//
// let cinderella8=new Cinderella('vika',22,38);
// cinderellaArr.push(cinderella8)
//
// let cinderella9=new Cinderella('nata',29,39);
// cinderellaArr.push(cinderella9)
//
// let cinderella10=new Cinderella('lola',21.4,40);
// cinderellaArr.push(cinderella10)
//
// function Prince(name,year,tufelka){
//     this.name=name;
//     this.year=year;
//     this.tufelka=tufelka;
// }
//
//  function Search (tufelka,Arr){
//      for (let cinderella of Arr) {
//          if(cinderella.sizeLeg===tufelka){
//              console.log(`Принц знайшов туфельку принцеси ${cinderella.name}`)
//          }
//      }
// }
// let newPrince=new Prince('Anton',23,36);
// Search(newPrince.tufelka,cinderellaArr);
