import {createStore} from 'redux'
import { create } from 'domain';

const initialState = {
  name: '',
  category: '',
  authorLast: '',
  authorFirst: '',
  ingredients: [],
  instructions: [],
  recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_FIRST_NAME = 'UDATE_FIRST_NAME'
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const ADD_INSTRUCTION = "UPDATE_INSTRUCTIONS"
export const ADD_RECIPE = "ADD_RECIPE"
export const CLEAR ="CLEAR"


function reducer(state = initialState, action){
  const {type, payload} = action
 switch(type){
   case UPDATE_NAME:
     return{ ...state, name: payload}
   case UPDATE_CATEGORY:
     return{ ...state, category: payload}
   case UPDATE_FIRST_NAME:
       return{...state, authorFirst: payload}
   case UPDATE_LAST_NAME:
     return{...state, authorLast: payload}
   case UPDATE_INGREDIENTS:
     const newIngredients = [...state.ingredients, payload]
       return{...state, ingredients: newIngredients}
   case ADD_INSTRUCTION:
     const newInstructions= [...state.instructions, payload]
     return{...state, instructions: newInstructions} 
   case ADD_RECIPE: 
   const {
     name, category, authorFirst, authorLast, ingredients, instructions
   } = state;
   const recipe = {
     name, category, authorFirst, authorLast, ingredients, instructions
   }  
   const newRecipes = [...state.recipes, recipe]
   return{ ...state, recipes: newRecipes}
   case CLEAR:
    return {...state, name:'', category:'', authorFirst:'', authorLast:'', ingredients:[], instructions: []}
   default:
     return state
 }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())