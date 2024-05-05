import React from 'react'
import "./Navbar.css"
import Searchbar from '../SearchBar/Searchbar'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'

const Navbar = ({onButtonClick}) => {
    return (
        <div className='navbar'>
            <div className='logo'><Logo/></div>
            <div>
                <Searchbar />
            </div>
            <div className='feedback'><Button children={onButtonClick}/></div>
        </div>
    )
}

export default Navbar