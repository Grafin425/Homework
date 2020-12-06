 class UserServices {
     url = 'https://jsonplaceholder.typicode.com'

     getAll(url) {
       return   fetch(`${this.url}/${url}`)
             .then(value => value.json())
             .then(value => {return value})
     }
     getCarById(url,id){
         console.log('ftc');
         return  fetch(`${this.url}/${url}/${id}`).then(value => value.json()).then(value => value)
     }
 }
export default UserServices;