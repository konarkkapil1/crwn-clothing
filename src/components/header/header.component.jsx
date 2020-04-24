import React from 'react'
import { Link } from 'react-router-dom'
import './header.component'
import { ReactComponent as Logo } from '../../assets/original.svg'

const Header = () => {
    return(
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
        </div>
    )
}

export default Header