import React from 'react'
import {ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import "./cart-icon.styles.scss"
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const cartIcon = ({toggleCartHidden}) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(cartIcon)