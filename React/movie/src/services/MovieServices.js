import {AXIOS} from './axiosConfig'

class MoviesService {

   async getMovies(params){

       try {
           const {data}= await AXIOS.get('/discover/movie',{
               params
           })
           return data

       } catch (e){

           console.error(e)
       }

    }
    async getMovieById(movieId){
       try {
           const {data}=await AXIOS.get(`/movie/${movieId}`)
           return data

       }catch (e){
           console.error(e)
       }

    }
}

export const moviesService=new MoviesService()
