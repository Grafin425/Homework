import {AXIOS} from './axiosConfig'
class SearchServices {
    async getMoviesBySearch(query){
        console.log(query);
        const {movies} = await AXIOS.get(`/search/movie?query=${query}`)
        return movies
    }

}

export const searchService=new SearchServices();