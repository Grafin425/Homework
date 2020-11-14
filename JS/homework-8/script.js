// //- Создать произвольный елемент с id = text.
// // Используя JavaScript, сделайте так, чтобы при клике на кнопку
// // исчезал элемент с id="text".
// let div = document.createElement('div')
// const p=document.getElementById('task1')
// div.setAttribute('id', 'text')
// div.style.backgroundColor = 'red'
// div.textContent = 'element with id=text'
// p.appendChild(div)

// // document.body.appendChild(div)
// const click = document.getElementById('click')
// click.addEventListener("click", () => {
//     div.style.display = 'none'
// })

// //- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const task2 = document.getElementById('task2')
// task2.addEventListener("click", () => {
//     task2.style.display = 'none'
// })

// //- створити інпут який приймає вік людини та кнопку яка
// // підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// // та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let myForm = document.forms.myForm;
// let age = myForm.age;
//
// document.forms.myForm.submit.addEventListener("click", (ev) => {
//     ev.preventDefault()
//     let age = document.forms.myForm.age.value;
//     if (age >= 18) {
//         alert('hello')
//     }
//     alert('go home')
// })

// // Создайте меню, которое раскрывается/сворачивается при клике
// let myForm2=document.forms.myForm2;
//
// const Regist=document.getElementById('formR')
// Regist.style.display='none'
//
// document.forms.myForm2.submit.addEventListener("click", (ev)=>{
//     ev.preventDefault()
//     Regist.style.display=''
//
// })

// //Создать список комментариев , пример объекта коментария
// let coment=[
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'Inst', body:' при кліку на яку считується '},
//     {title : 'Tiktok', body:'кількість рядків, другий'},
//     {title : 'Bla', body:'которую можно листать влево-вправо нажатие'},
//     {title : 'Car', body:'ся в масиві не цензурних слів'},
//     {title : 'Face', body:'она будет скрывать сама себя.'},
//     {title : 'Shazam', body:'считывает на странице (rules.html)'},
//     {title : 'Music', body:' активирует фильтр для вышеуказаного массива.'},
//     {title : 'Photo', body:'принимает какой-либо элемент DOM'},
//     {title : 'Twiter', body:'нажатие "вперед" позволяет '},
//     ]
// const pComment=document.getElementById('comment')
// for (let comentElement of coment) {
//     let remove=document.createElement('button')
//     let div=document.createElement('div')
//     div.className='comment_item'
//     div.innerHTML=`<h1>${comentElement.title}</h1><a>${comentElement.body}</a> <br> --------------------------`
//     pComment.appendChild(div).textContent
//     remove.innerText='remove'
//     div.appendChild(remove)
//     remove.addEventListener("click", (ev => {
//         console.log(ev);
//         ev.target.parentNode.children[1].style.display='none'
//     }))
// }

// //створити 2 форми  по 2 інпути в кожній.
//
// const nameInput=document.getElementById('name')
// const surnameInput=document.getElementById('surname')
// const yearInput=document.getElementById('year')
// const telInput=document.getElementById('tel')
// const button=document.getElementById('button')
//
// button.addEventListener("click", ()=>{
//     console.log(nameInput.value);
//     console.log(surnameInput.value);
//     console.log(yearInput.value);
//     console.log(telInput.value);
// })

// //Створити функцію, яка генерує таблицю.
// function generationTable(rowNum,columnsNum,tagName){
//     const table=document.createElement('table')
//     for(let i=0;i<rowNum;i++){
//         const row=document.createElement('tr')
//         table.appendChild(row)
//         for(let j=0;j<columnsNum;j++){
//             const columns=document.createElement('th')
//             row.appendChild(columns)
//             columns.textContent='hello'
//         }
//     }
//     const tag=document.createElement(tagName)
//     document.body.appendChild(tag)
//     tag.appendChild(table)
// }
// generationTable(3,4,'a')

//