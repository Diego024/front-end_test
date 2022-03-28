export const GET_NEWS = 'GET_NEWS'
export const GET_SAVED_NEWS = 'GET_SAVED_NEWS'
export const SET_FILTER = 'SET_FILTER'
export const SET_CURRENT_OPTION = 'SET_CURRENT_OPTION'
export const SET_PAGE = 'SET_PAGE'

export const getNews = payload => ({
    type: GET_NEWS,
    payload,
})

export const getSavedNews = payload => ({
    type: GET_SAVED_NEWS,
    payload,
})

export const setFilter = payload => ({
    type: SET_FILTER,
    payload
})

export const setCurrentOption = payload => ({
    type: SET_CURRENT_OPTION,
    payload
})

export const setPage = payload => ({
    type: SET_PAGE,
    payload
})