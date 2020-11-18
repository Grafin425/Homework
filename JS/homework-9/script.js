// //Дана textarea.
// // В неё вводится текст.
// // Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// const textArea=document.getElementById('textarea');
// textArea.addEventListener("input", ()=>{
//     localStorage.setItem("textArea",textArea.value)
// })
// let text = localStorage.getItem('textArea');
// textArea.textContent=text

// //- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// const nameInput=document.getElementById('name')
// const surnameInput=document.getElementById('surname')
// const subscInput=document.getElementById('subsc')
// const checkInput=document.getElementById('check')
// const radioInput=document.getElementById('radio')
//     nameInput.addEventListener("input", ()=>{
//         localStorage.setItem('name',nameInput.value)
// })
// let nameText = localStorage.getItem('name');
// nameInput.value=nameText;
//
// surnameInput.addEventListener("input", ()=>{
//     localStorage.setItem('surname',surnameInput.value)
// })
// let surnameText = localStorage.getItem('surname');
// surnameInput.value=surnameText;
//
// subscInput.addEventListener("input", ()=>{
//     localStorage.setItem('textArea',subscInput.value)
// })
// let subscText = localStorage.getItem('textArea');
// subscInput.value=subscText;
//
//
// checkInput.addEventListener("click", ()=>{
//     localStorage.setItem('check',checkInput.checked)
//     // console.log(checkInput.checked);
// });
//
// let parseCheck = JSON.parse(localStorage.getItem('check'));
// checkInput.checked=parseCheck;
//
// radioInput.addEventListener("click", ()=>{
//     localStorage.setItem('radio',radioInput.checked)
//     console.log(radioInput.checked);
// })
// let parseRadio=JSON.parse(localStorage.getItem('radio'))
// radioInput.checked=parseRadio;

// // //-Дан текстареа. В него можно ввести данные, нажать кноп
// // // ку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще по
// // // редактировать и возможно еще....
// const textarea=document.getElementById('textarea1')
// const areaButton=document.getElementById('areaButton')
// const version=document.getElementById('version');
// let array=[]
// areaButton.addEventListener("click", ()=>{
//     array.push(textarea.value);
//     localStorage.setItem('user',JSON.stringify(array))
// })
//
// let parseArrText = JSON.parse(localStorage.getItem('user'));
// for (let parseArrTextElement of parseArrText) {
//     console.log(parseArrTextElement);
//     textarea.value=parseArrTextElement;
// }
//
// version.addEventListener("click", ()=>{
//     for (let i=0; i<parseArrText.length ; i++) {
//         textarea.value=parseArrText[i-1]
//     }
// })

//
// const nameInp=document.getElementById('named')
// const noteInp=document.getElementById('note')
// const createButton=document.getElementById('create')
// const notesDiv=document.getElementById('notes')
// const form=document.getElementById('notesForm')
//
//
// form.oninput = (ev) => {
//     console.log(ev);
//     const obj = {[ev.target.id]: ev.target.value,}
//     let objStr=JSON.stringify(obj)
// localStorage.setItem('obj', objStr)
//     console.log(obj);
// }
