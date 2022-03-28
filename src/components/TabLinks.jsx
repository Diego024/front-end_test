import React from 'react'
import { connect } from "react-redux";
import { setCurrentOption } from '../actions'
import '../assets/styles/Header.scss'

const TabLinks = props => {
    let currentOption = window.localStorage.getItem('currentOption')

    const allLinkClickListener = () => {
        const allLink = document.getElementById('allLink')
        const favesLink = document.getElementById('favesLink')
        
        allLink.classList.add('active')
        favesLink.classList.remove('active')
        props.setCurrentOption({currentOption: 'all'})
        window.localStorage.setItem('currentOption', 'all')
    }

    
    const favesLinkClickListener = () => {
        const allLink = document.getElementById('allLink')
        const favesLink = document.getElementById('favesLink')
        
        allLink.classList.remove('active')
        favesLink.classList.add('active')
        props.setCurrentOption({currentOption: 'savedNews'})
        window.localStorage.setItem('currentOption', 'savedNews')
        window.location.reload(false);
    }
    
    if(currentOption === 'all') {
        return (
            <>
                <button className="tabs-links active" id="allLink" onClick={allLinkClickListener}>All</button>
                <button className="tabs-links" id="favesLink" onClick={favesLinkClickListener}>My faves</button>
            </>
        )
    } else {
        return (
            <>
                <button className="tabs-links" id="allLink" onClick={allLinkClickListener}>All</button>
                <button className="tabs-links active" id="favesLink" onClick={favesLinkClickListener}>My faves</button>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentOption : state.currentOption,
        savedNews: state.savedNews
    }
}

const mapDispatchToProps = {
    setCurrentOption,
}

export default connect(mapStateToProps, mapDispatchToProps)(TabLinks)