import React from 'react'
import '../assets/styles/NewsContainer.scss'

const NewsContainer = ({children}) => (
    <section className='news-container'>
        {children}
    </section>
)

export default NewsContainer