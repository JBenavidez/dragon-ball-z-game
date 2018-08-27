import {combineReducers} from 'redux';
import Characters_json from '../data/characters';
import {ADD_CHARACTER}   from  '../actions';
import characters from './characters_reducer';
import heroes from './heroes_reducer';







 


const rootReducer = combineReducers({
    characters,
    heroes
})



export default rootReducer;
