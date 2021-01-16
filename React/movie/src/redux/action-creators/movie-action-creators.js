import {moviesService, searchService} from '../../services'
import {SET_MOVIES,SET_MOVIES_SEARCH} from "../action-types";
export const setMovies=()=>async(dispatch)=>{
    let promise = await moviesService.getMovies().then();
    dispatch({type:SET_MOVIES,payload:promise})
}
export const setMoviesSearch=(query)=>async (dispatch)=>{
     let data=await searchService.getMoviesBySearch(query).then()
    dispatch({type:SET_MOVIES_SEARCH,payload:data})
}