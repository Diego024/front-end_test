import React from "react";
import { connect } from "react-redux";
import { setCurrentOption } from '../actions'
import SelectWithIcons from "./SelectWithIcons";
import '../assets/styles/Header.scss'

const Header = props => {

    const allLinkClickListener = () => {
        const allLink = document.getElementById('allLink')
        const favesLink = document.getElementById('favesLink')
        
        allLink.classList.add('active')
        favesLink.classList.remove('active')
        props.setCurrentOption({currentOption: 'all'})
    }

    
    const favesLinkClickListener = () => {
        const allLink = document.getElementById('allLink')
        const favesLink = document.getElementById('favesLink')
        
        allLink.classList.remove('active')
        favesLink.classList.add('active')
        props.setCurrentOption({currentOption: 'savedNews'})
    }

    return (
        <>
            <header className="header-container">
                <h1 className="header-title">HACKER NEWS</h1>
            </header>
            <nav className="tabs-container">
                <button className="tabs-links active" id="allLink" onClick={allLinkClickListener}>All</button>
                <button className="tabs-links" id="favesLink" onClick={favesLinkClickListener}>My faves</button>
            </nav>
            <div className="filter-container">
                <SelectWithIcons/>
            </div>
        </>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)