import {AXIOS} from './axiosConfig'
class FilterServices {
    async getMoviesBySearch(params){
        const {data} = await AXIOS.get(`/search/movie`,{
           params
        })
        return data
    }

}

export const filterServices=new FilterServices();
