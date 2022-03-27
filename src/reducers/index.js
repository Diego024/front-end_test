import { GET_ANGULAR_NEWS, GET_REACT_NEWS, GET_VUE_NEWS, GET_NEWS, GET_FILTER } from "../actions";

const reducer = (state, action) => {
    switch (action.type) {
        case GET_ANGULAR_NEWS:
            return {
                ...state,
                angularNews: [action.payload.angularNews]
            }
        case GET_REACT_NEWS:
            return {
                ...state,
                reactNews: [action.payload.reactNews]
            }
        case GET_VUE_NEWS:
            return {
                ...state,
                vueNews: [action.payload.vueNews]
            }
        case GET_NEWS:
            return {
                ...state,
                news: [action.payload.news]
            }
        case GET_FILTER:
            return {
                ...state,
                filter: action.payload.filter
            }
        default:
            return state
    }
}

export default reducer