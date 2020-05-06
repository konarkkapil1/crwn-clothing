import React from 'react'
import {ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import "./cart-icon.styles.scss"
const cartIcon = () => {
    return(
        <div className="cart-icon">
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default cartIcon