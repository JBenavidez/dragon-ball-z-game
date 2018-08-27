import Characters_json from '../data/characters';
import {ADD_CHARACTER}   from  '../actions';
import characters from './characters_reducer';
import heroes from './heroes_reducer';







export function createCharacter(id){
    let character = Characters_json.find(c => c.id ===id);

    return character;
}


