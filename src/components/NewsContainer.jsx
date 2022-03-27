import React from 'react'
import News from './News'
import '../assets/styles/NewsContainer.scss'

const NewsContainer = ({children}) => (
    <section className='news-container'>
        {children}
    </section>
)

export default NewsContainer