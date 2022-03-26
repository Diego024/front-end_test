import React from 'react'
import PropTypes from 'prop-types'
import timeIcon from '../assets/icons/time.svg'
import like from '../assets/icons/like.svg'
import liked from '../assets/icons/liked.svg'
import '../assets/styles/News.scss'

const News = () => {
    return (
        <>
            <div className='news-item_container'>
                <div className="news-info_container">
                    <div className='news-time_container'>
                        <img className="" src={timeIcon} alt="time icon"/>
                        <p className='news-story_time'>2 hours ago by author</p>
                    </div>
                    <h4 className='news-story_title'>Event-driven state management in React using Storeon</h4>
                </div>
                <div className="news-favorite_container">
                    <img className="" src={liked} alt="liked icon"/>
                </div>
            </div>
        </>
    )
}

export default News;
