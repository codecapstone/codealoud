import axios from 'axios'

//ACTION TYPES
const SET_USERPROMPT = 'SET_USERPROMPT'
const SET_APPROACH = 'SET_APPROACH'
const SET_EXAMPLE = 'SET_EXAMPLE'
const CLEAR_INPUT = 'CLEAR_INPUT'

//ACTION CREATORS
export const setPrompt = userPrompt => ({type: SET_USERPROMPT, userPrompt})
export const setApproach = userApproach => ({type: SET_APPROACH, userApproach})
export const setExamples = example => ({type: SET_EXAMPLE, example})
export const clearInput = () => ({type: CLEAR_INPUT})

// REDUCER
const initialState = {
  userPrompt: '',
  example: '',
  approach: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERPROMPT:
      return {...state, userPrompt: action.userPrompt}
    case SET_EXAMPLE:
      return {...state, example: action.example}
    case CLEAR_INPUT:
      return initialState
    case SET_APPROACH:
      return {...state, approach: action.userApproach}
    default:
      return state
  }
}

export default reducer
