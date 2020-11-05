//task1
class Tag{
    constructor(name,attributes) {
        this.name=name;
        this.attributes=attributes;
    }
    action(){
        console.log('I ama tag - '+`${this.name}`+', I have attributes i can do.....');
    }
}
let a=new Tag('a',[{nameAtt:'accesskey',actionOfAtt:'i am atrributes is tag, i work....'},{name:'coors',actionOfAtt:'i am atrributes is tag, i work....'}])
a.action()
console.log(a);

//tsk2
class Car{
    constructor(model,producer,year,maxSpeed,capacityEngine) {
        this.model=model;
        this.producer=producer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.capacityEngine=capacityEngine;
    }
    drive (){
        console.log('їдемо зі швидкістю '+this.maxSpeed+' на годину');
    }
    info(){
        console.log('\n model: '+this.model+'\n producer: '+this.producer+'\n year: '+this.year+'\n maxSpeed: '+this.maxSpeed+'км/год'+'\n capacityEngine: '+this.capacityEngine)
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed+=newSpeed;
    }
    changeYear(newValue){
        this.year=newValue;
    }
    addDriver (driver){
        this.drive=driver;
    }
}

let skoda= new Car('superB','skoda',2014,180,2.0)
skoda.drive()
skoda.info()
skoda.increaseMaxSpeed(20);
skoda.changeYear(2018);
skoda.addDriver({name:'vasya',age:23,skills:'5 year'})
console.log(skoda);



