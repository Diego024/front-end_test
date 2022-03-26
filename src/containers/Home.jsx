import React from "react";
import Header from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import '../assets/styles/App.scss';

const Home = () => {
    return(
        <>
            <Header/>
            <NewsContainer/>
        </>
    )
}

export default Home