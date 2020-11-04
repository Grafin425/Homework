//task 1
console.log('task1');
let arr=[1,242,1234,43,123,54,1253,134,11];
function consArray(element){
    console.log(element);
}
consArray(arr);

//task2
console.log('task2');
let newArr=[]
getRandom(newArr,100,1);
function getRandom(myArray,max,min){
    for( let i=0;i<30;i++ ){
    let number= Math.random()*(max-min)+min;
            newArr.push(parseInt(number))
    }
    return newArr;
}
consArray(newArr)
//task3
console.log('task3');
function minNumberFanction (number1,number2,number3){
    minNum=Math.min(number1, number2, number3);
    document.write(minNum+"<br>");
    return minNum;
}
minNumberFanction(-1, 23, -100);
consArray(minNum)
// //task4
// console.log('task4');
// function maxNumberFunction (number1,number2,number3){
//     maxNum=Math.max(number1, number2, number3);
//     document.write(maxNum);
//     return maxNum;
// }
// maxNumberFunction(-1, 23, -100);
// consArray(maxNum);
// //task5
// console.log('task5');
// function maxMixNumber(){
//       minNumber=Math.min.apply(Math,arguments);
//       maxNumber=Math.max.apply(Math,arguments);
//       document.write('<br>'+maxNumber)
//       return minNumber;
// }
// maxMixNumber(12,323,543,123,53,123,32,43,123,23,43,21)
// console.log(minNumber);
//task6==task1
//task7
console.log('task7');
function maxNumberOfArray(){
   maxNumber=Math.max.apply(Math,arr)
    return maxNumber
}
consArray(maxNumberOfArray(arr))
//task8
console.log('task8');
function minNumberOfArray(){
    minNumber=Math.min.apply(Math,arr)
    return minNumber
}
consArray(minNumberOfArray(arr))

// task9
console.log('task9');

function numberSumArray(array){
  let sum=0;
     for( let i=0;i<array.length;sum+=array[i++]){}
    return sum
}
consArray(numberSumArray(arr))

// task 10
console.log('task10');
function averageArray(array) {
    let sum=0;
    for( let i=0;i<array.length;i++){
        sum+=array[i]
        average=sum/array.length
    }
    return average
}
console.log(averageArray(arr));

//task11
console.log('task11');
//array objects
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];
function numberKeyArray(array){
    return array.length;
}
console.log(numberKeyArray(rules));
//task12
console.log(arrayAtributObject(rules));

function arrayAtributObject(array){
    let sum=0;
    for(object of array){
        let stringObject = JSON.stringify(object);
        let string=stringObject.split(',');
        sum+=string.length
    }
    return sum-1;
}

