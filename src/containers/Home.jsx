import React from "react";
import { connect } from 'react-redux';
import Header from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import News from "../components/News";
import '../assets/styles/App.scss';

const Home = ({ news}) => {
    let storyId = 0;

    return (
        <>
            <Header />
            { news &&
                <NewsContainer>
                    {news.map( news => 
                            <News
                                key={++storyId}
                                {...news}
                            />
                        )
                    }
                </NewsContainer>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        news: state.news[0]
    }
}

export default connect(mapStateToProps, null)(Home)