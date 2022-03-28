export const GET_NEWS = 'GET_NEWS'
export const GET_SAVED_NEWS = 'GET_SAVED_NEWS'
export const GET_FILTER = 'GET_FILTER'
//*TODO: CAMBIAR EL GET_FILTER POR SET_FILTER
export const SET_CURRENT_OPTION = 'SET_CURRENT_OPTION'

export const getNews = payload => ({
    type: GET_NEWS,
    payload,
})

export const getSavedNews = payload => ({
    type: GET_SAVED_NEWS,
    payload,
})

export const setFilter = payload => ({
    type: GET_FILTER,
    payload
})

export const setCurrentOption = payload => ({
    type: SET_CURRENT_OPTION,
    payload
})