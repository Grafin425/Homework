function newDay(run, cb) {
    console.log('Дзень-дзень Пора вставати');

    setTimeout(() => {
        if (run === 'Ну неа') {
            cb(false)
        } else {
            cb('і радуємся жизнє');
        }
    }, 1000)
}

function clearBoouth(brush, cb) {
    console.log('йдем чистити зуби');
    setTimeout(() => {
        if (!brush) {
            cb('Нема щітки', null)
        } else {
            cb(null, 'Чистим зубки і побільше пасти!');
        }
    }, 1500)

}

function eat(time,cb) {
    console.log('Можна і поїсти')
    setTimeout(() => {
        if (time>9) {
            cb('Впав і ваній і розбив собі голову', null)
        } else {
            cb(null, 'Ням-ням :)')
        }
    },1000)
}

function dressed(mask,cb){
    console.log('Вдягаємся')
    setTimeout(()=>{
        if(!mask){
            cb('Ти забув взяти маску',null)
        } else {
            cb(null,'Йдем на зупинку')
        }
    },1000)
}

function waitBus(bus,cb){
    console.log('Слахаєм музику і чекаєм автобус')
    setTimeout(()=>{
        if (!bus){
            cb('Ти запізнився і наступний автобус буде через 2 год',null)
        }else{
            cb(null,`Приїхав ${bus} сідаєм`)
        }
    },1500)
}
function job(jobDay,cb){
    console.log(`Ми приїхали виходим з автобусу`)
    console.log('Йдем в офіс :Працюєм-працюєм:')
    setTimeout(()=>{
        if(jobDay!=='норм') {
            cb('На роботі повний завал',null)
        }else {
            cb(null,`${jobDay}альний можна йти додому`)
        }
    },2000)
}
function home(key,cb){
    console.log('приїхали на район йдем до будинку')
    setTimeout(()=>{
        if(!key){
            cb('От халепа загубив ключі',null)
        }else {
            cb(null,'І знову вдома))) Вдома добре :)))')
        }
    },1000)
}
function shower(water,cb){
    console.log('Йдем мити руки і вечеряти')
    setTimeout(()=>{
        if(water==='холодна'){
            cb('Можеш і не мріяти про душ!!',null)
        }else {
            cb(null,'і спатки)')
        }
    },2000)
}

newDay('Ну на', (stepUp) => {
    if (!stepUp) {
        console.log('нашо мені ці пари, зроблю собі сьогодні вихідний');
        return
    } else {
        console.log('Встаємо', stepUp)
        clearBoouth('Є', (err, action) => {
            if (err) {
                console.log(err, 'ти студент')
            } else {
                console.log(action)
                eat(7,(err, action) => {
                    if (err) {
                        console.log(err, '- в результаті отриманих травм помер(((')
                    } else {
                        console.log(action)
                        dressed('Є',(err,action)=>{
                            if (err){
                                console.log(err,'Повернись за нею')
                            }else {
                                console.log('Все з собою ',action)
                                waitBus("автобус",(err,action)=>{
                                    if(err){
                                        console.log(err,'тож йдем додому')
                                    }else {
                                        console.log('Фух,нарешті',action)
                                        job('норм',(err,action)=>{
                                            if (err){
                                                console.log(err,'потрібно залишитись до ночі')
                                            }else {
                                                console.log('Все супер',action)
                                                home('Є',(err,action)=>{
                                                    if(err){
                                                        console.log(err,'Ночуєм на вулиці біля смітників')
                                                    }else {
                                                        console.log('Відкриваєм вдері',action)
                                                        shower('холодна',(err,action)=>{
                                                            if (err){
                                                                console.log(err,'Йдем спатки так(((')
                                                            }else {
                                                                console.log('Йдем в душ',action)
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

