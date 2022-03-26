import React from "react";
import SelectWithIcons from "./SelectWithIcons";
import '../assets/styles/Header.scss'

const Header = () => {

    const allLinkClickListener = () => {
        const allLink = document.getElementById('allLink')
        const favesLink = document.getElementById('favesLink')
        
        allLink.classList.add('active')
        favesLink.classList.remove('active')
    }

    
    const favesLinkClickListener = () => {
        const allLink = document.getElementById('allLink')
        const favesLink = document.getElementById('favesLink')
        
        allLink.classList.remove('active')
        favesLink.classList.add('active')
    }

    return (
        <>
            <header className="header-container">
                <h1 className="header-title">HACKER NEWS</h1>
            </header>
            <nav className="tabs-container">
                <button className="tabs-links" id="allLink" onClick={allLinkClickListener}>All</button>
                <button className="tabs-links" id="favesLink" onClick={favesLinkClickListener}>My faves</button>
            </nav>
            <div className="filter-container">
                <SelectWithIcons/>
            </div>
        </>
    )
}

export default Header