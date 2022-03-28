import React from "react";
import { connect } from 'react-redux';
import Header from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import News from "../components/News";
import '../assets/styles/App.scss';

const Home = ({ news, savedNews ,currentOption }) => {
    let storyId = 0;

    return (
        <>
            <Header />
            { news && currentOption == 'all' &&
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
            { savedNews && currentOption == 'savedNews' &&
                <NewsContainer>
                    {savedNews.map( news => 
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
        news: state.news[0],
        savedNews: state.savedNews,
        filter: state.filter,
        currentOption: state.currentOption,
        page: state.page
    }
}

export default connect(mapStateToProps, null)(Home)