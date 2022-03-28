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
    let query = 'angular'

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
        query = filter.toLowerCase()
        persistFilter(filter)
        switch (filter) {
            case 'Angular':
                if (props.filter != filter || props.news.length == 0 || currentPage > 0)
                    getListNews(query)
                break;
            case 'ReactJS':
                if (props.filter != filter || props.news.length == 0 || currentPage > 0)
                    getListNews(query)
                break;
            case 'VueJS':
                if (props.filter != filter || props.news.length == 0 || currentPage > 0)
                    getListNews(query)
                break;
            default:
                break;
        }
    }

    const getListNews = query => {
        axios.get('https://hn.algolia.com/api/v1/search_by_date?query=' + query + '&page=' + props.page)
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
                <div onClick={() => getNews("ReactJS")}>
                    <img src={reactIcon} alt="React JS icon" />
                    React
                </div>
                <div onClick={() => getNews("VueJS")}>
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