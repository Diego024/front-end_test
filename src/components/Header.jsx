import React from "react";
import { connect } from "react-redux";
import { setCurrentOption } from '../actions'
import SelectWithIcons from "./SelectWithIcons";
import TabLinks from "./TabLinks";
import '../assets/styles/Header.scss'

const Header = props => {

    return (
        <>
            <header className="header-container">
                <h1 className="header-title">HACKER NEWS</h1>
            </header>
            <nav className="tabs-container">
                <TabLinks/>
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