import { GET_NEWS, SET_FILTER, GET_SAVED_NEWS, SET_CURRENT_OPTION, SET_PAGE } from "../actions";

const reducer = (state, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: [action.payload.news]
            }
        case GET_SAVED_NEWS:
            return {
                ...state,
                savedNews: [action.payload.savedNews]
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload.filter
            }
        case SET_CURRENT_OPTION:
            return {
                ...state,
                currentOption: action.payload.currentOption
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload.page
            }
        default:
            return state
    }
}

export default reducer