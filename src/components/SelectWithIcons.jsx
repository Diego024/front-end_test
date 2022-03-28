import React, { useEffect } from 'react'
import '../assets/styles/SelectWithIcons.scss'
import angularIcon from '../assets/icons/angular-icon.png'
import reactIcon from '../assets/icons/react-icon.png'
import vueIcon from '../assets/icons/vue-icon.png'
// REDUX
import { connect } from 'react-redux'
import { getNews, setFilter, setPage } from '../actions'
//API REQUEST
import axios from 'axios'

const SelectWithIcons = props => {
    let currentPage = props.page
    const ANGULAR_API_URL = 'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=' + props.page
    const REACT_API_URL = 'https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=' + props.page
    const VUE_API_URL = 'https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=' + props.page

    //LOADING THE NEWS OF THE PRESELECTED FILTER
    useEffect(() => {
        (props.filter) ? getNews(props.filter) : getNews('Angular')
    }, []);

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
            props.setPage({ page: props.page + 1 })
            currentPage++
            getNews(props.filter)
        }
    }

    const dropDownClickListener = () => {
        const dropdown = document.querySelector('.dropdown')
        dropdown.classList.toggle('active')
    }

    const persistFilter = filter => {
        try {
            if (props.filter != filter) {
                window.localStorage.setItem("filter", filter)
                props.setFilter({ filter: filter })
                props.setPage({ page: 0 })
                currentPage = 0
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getNews = filter => {
        document.querySelector('.textBox').value = filter;
        persistFilter(filter)
        switch (filter) {
            case 'Angular':
                if (props.filter != filter || props.news.length == 0 || currentPage > 0)
                    getListNews(ANGULAR_API_URL)
                break;
            case 'React':
                if (props.filter != filter || props.news.length == 0 || currentPage > 0)
                    getListNews(REACT_API_URL)
                break;
            case 'Vue':
                if (props.filter != filter || props.news.length == 0 || currentPage > 0)
                    getListNews(VUE_API_URL)
                break;
            default:
                break;
        }
    }

    const getListNews = API_URL => {
        axios.get(API_URL)
            .then(newsFromApi => {
                if (currentPage == 0) {
                    props.getNews({ news: newsFromApi.data.hits })
                } else {
                    props.getNews({ news: [...props.news[0] || [], ...newsFromApi.data.hits] })
                }
            })
            .catch(error => {
                alert('Error fetching angular news' + error)
                console.log('Error fetching angular news' + error)
            })
    }

    return (
        <div className="dropdown" onClick={dropDownClickListener}>
            <input type="text" className='textBox' placeholder='Select your news' readOnly={true} />
            <div className="option">
                <div onClick={() => getNews("Angular")}>
                    <img src={angularIcon} alt="Angular JS icon" />
                    Angular
                </div>
                <div onClick={() => getNews("React")}>
                    <img src={reactIcon} alt="React JS icon" />
                    React
                </div>
                <div onClick={() => getNews("Vue")}>
                    <img src={vueIcon} alt="Vue JS icon" />
                    Vue
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        news: state.news,
        filter: state.filter,
        page: state.page
    }
}

const mapDispatchToProps = {
    getNews,
    setFilter,
    setPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectWithIcons)