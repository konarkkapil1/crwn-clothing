import React from 'react'
import {ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import "./cart-icon.styles.scss"
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'

const cartIcon = ({toggleCartHidden,itemCount}) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(cartIcon)