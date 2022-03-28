import React from 'react'
import { connect } from 'react-redux'
import { getSavedNews } from '../actions'
import like from '../assets/icons/like.svg'
import liked from '../assets/icons/liked.svg'
import '../assets/styles/News.scss'

const LikeIcon = props => {
    const { story } = props

    const verifySavedNew = story => {
        for(let savedStory of savedNews ) {
            if (savedStory.story_id == story.story_id) {
                return true
            }
        }
        return false
    }

    const saveNew = story => {
        let savedNews = JSON.parse(window.localStorage.getItem("savedNews")) || []
        if(!verifySavedNew(story.story_id)) {
            savedNews.push(story)
            props.getSavedNews({ savedNews:savedNews })
            window.localStorage.setItem("savedNews", JSON.stringify(savedNews))
        }
    }

    const deleteNew = story => {
        let savedNews = JSON.parse(window.localStorage.getItem("savedNews"))
        if(verifySavedNew(story)) {
            savedNews = savedNews.filter( savedStory => {
                return savedStory.story_id !== story.story_id
            })
            props.getSavedNews({ savedNews:savedNews })
            window.localStorage.setItem("savedNews", JSON.stringify(savedNews))
        }
    }

    let savedNews = JSON.parse(window.localStorage.getItem("savedNews")) || []
    if (verifySavedNew(story)) {
        return (<img className="news-favorite_icon" src={liked} alt="liked icon" onClick={() => deleteNew(story)} />)
    } else {
        return (<img className="news-favorite_icon" src={like} alt="like icon" onClick={() => saveNew(story)} />)
    }
}

const mapStateToProps = state => {
    return {
        savedNews: state.savedNews
    }
}

const mapDispatchToProps = {
    getSavedNews
}


export default connect(mapStateToProps, mapDispatchToProps)(LikeIcon)