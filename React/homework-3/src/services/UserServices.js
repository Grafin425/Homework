export default class UserServices {
    urlUsers ='https://jsonplaceholder.typicode.com/users';
    urlComment='https://jsonplaceholder.typicode.com/comments'
    urlPosts='https://jsonplaceholder.typicode.com/posts'

   async getAllUsers(){
      return  await fetch(this.urlUsers).then(value => value.json());
    }
    async getAllComments(){
        return  await fetch(this.urlComment).then(value => value.json());
    }
    async getAllPosts(){
        return  await fetch(this.urlPosts).then(value => value.json());
    }

};