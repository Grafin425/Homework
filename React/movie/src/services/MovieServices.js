import {AXIOS} from './axiosConfig'

class MoviesService {
   async getMovies(){
        const {data}= await AXIOS.get('/discover/movie')
        return data
    }
}

export const moviesService=new MoviesService()