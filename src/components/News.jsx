import React from 'react'
import PropTypes from 'prop-types'
import timeIcon from '../assets/icons/time.svg'
import like from '../assets/icons/like.svg'
import liked from '../assets/icons/liked.svg'
import '../assets/styles/News.scss'

const News = props => {

    const { created_at, story_title, story_url, author } = props

    return (
        <>
            <div className='news-item_container'>
                <a href={story_url} className="news-link" target="_blank">
                    <div className="news-info_container">
                        <div className='news-time_container'>
                            <img className="" src={timeIcon} alt="time icon"/>
                            <p className='news-story_time'>2 {created_at} by {author}</p>
                        </div>
                        <h4 className='news-story_title'>{story_title}</h4>
                    </div>
                </a>
                <div className="news-favorite_container">
                    <img className="" src={like} alt="liked icon"/>
                </div>
            </div>
        </>
    )
}

export default News;
