import React from 'react'
import { Link } from 'react-router-dom'
import './header.component'
import {auth} from'../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/original.svg'
import './header.styles.scss'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser}) => {
    return(
        <div className="header">
            
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/contact" className="option">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :<Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            <CartDropdown />

        </div>
    )
}

const mapStateToProps = (state) =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)