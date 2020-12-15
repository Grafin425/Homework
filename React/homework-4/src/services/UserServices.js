export default class UserServices{
    urlUsers='https://jsonplaceholder.typicode.com/users'
    async getUsers(){
        return await fetch(this.urlUsers).then(value => value.json());
    }
  async  getUserById(UserId){
        return await fetch(`${this.urlUsers}/${UserId}`).then(value => value.json())
    }
}