export default class UserServices {
    baseUrl='https://jsonplaceholder.typicode.com/'
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
    async getPostByUserId(UserId){
        return await  fetch(`${this.urlPosts}?userId=${UserId}`)
    }
   async getCommentByPost(PostId){
    return await fetch(`${this.urlComment}?postId=${PostId}`)
    }

};