import {AXIOS} from './axiosConfig'
class SearchServices {
    async getMoviesBySearch(params){
        const {data} = await AXIOS.get(`/search/movie`,{
            params
        })
        return data
    }

}

export const searchService=new SearchServices();
