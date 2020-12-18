export default class UserServices {
  async  MessegeRandom(){
      return   await fetch('https://api.chucknorris.io/jokes/random').then(value => value.json())
    }
}