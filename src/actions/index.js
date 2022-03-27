export const GET_ANGULAR_NEWS = 'GET_ANGULAR_NEWS'
export const GET_REACT_NEWS = 'GET_REACT_NEWS'
export const GET_VUE_NEWS = 'GET_VUE_NEWS'
export const GET_NEWS = 'GET_NEWS'
export const GET_FILTER = 'GET_FILTER'

export const getAngularNews = payload => ({
    type: GET_ANGULAR_NEWS,
    payload,
})

export const getReactNews = payload => ({
    type: GET_REACT_NEWS,
    payload,
})

export const getVueNews = payload => ({
    type: GET_VUE_NEWS,
    payload,
})

export const getNews = payload => ({
    type: GET_NEWS,
    payload,
})

export const setFilter = payload => ({
    type: GET_FILTER,
    payload
})