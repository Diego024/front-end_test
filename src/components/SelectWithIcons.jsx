import React from 'react'
import '../assets/styles/SelectWithIcons.scss'
import angularIcon from '../assets/icons/angular-icon.png'
import reactIcon from '../assets/icons/react-icon.png'
import vueIcon from '../assets/icons/vue-icon.png'

const SelectWithIcons = () => {

    const showSelectedFIlter = filter => {
        document.querySelector('.textBox').value = filter;
    }
    
    const dropDownClickListener = () => {
        const dropdown = document.querySelector('.dropdown')
        dropdown.classList.toggle('active')
    }

    return (
        <div className="dropdown" onClick={dropDownClickListener}>
            <input type="text" className='textBox' placeholder='Select your news' readOnly={true}/>
            <div className="option">
                <div onClick={ () => showSelectedFIlter("Angular") }>
                    <img src={angularIcon} alt="Angular JS icon"/>
                    Angular
                </div>
                <div onClick={ () => showSelectedFIlter("React") }>
                    <img src={reactIcon} alt="React JS icon"/>
                    React
                </div>
                <div onClick={ () => showSelectedFIlter("Vue") }>
                    <img src={vueIcon} alt="Vue JS icon"/>
                    Vuejs
                </div>
            </div>
        </div>
    )
}

export default SelectWithIcons