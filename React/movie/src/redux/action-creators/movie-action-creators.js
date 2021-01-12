import {moviesService} from '../../services'
import {SET_MOVIES} from "../action-types";
export const setMovies=()=>async(dispatch)=>{
    let promise = await moviesService.getMovies().then();
    dispatch({type:SET_MOVIES,payload:promise})

}