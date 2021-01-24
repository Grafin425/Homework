import {moviesService, filterServices} from '../../services'
import {SET_MOVIES,SET_MOVIES_SEARCH} from "../action-types";
export const setMovies=(params)=>async(dispatch)=>{
    let promise = await moviesService.getMovies(params).then();
    dispatch({type:SET_MOVIES,payload:promise})
}
export const setMoviesSearch=(query)=>async (dispatch)=>{
     let data=await filterServices.getMoviesBySearch(query).then()
    dispatch({type:SET_MOVIES_SEARCH,payload: data})
}
