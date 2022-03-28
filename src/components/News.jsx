import React from 'react'
import timeIcon from '../assets/icons/time.svg'
import LikeIcon from './LikeIcon'
import '../assets/styles/News.scss'

const News = props => {

    const { created_at, story_title, story_url, author, story_id } = props
    const story = { created_at, story_title, story_url, author, story_id }

    console.log(story)

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
                    <LikeIcon story={story}/>
                </div>
            </div>
        </>
    )
}

export default News;
