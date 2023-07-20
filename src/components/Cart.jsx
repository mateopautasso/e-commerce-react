import { styled } from 'styled-components';
import cart from '../assets/icons/icon_shopping_cart.png';
import cartWithProducts from '../assets/icons/icon_shopping_cart_notification.png';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { HeaderContext } from '../context/HeaderContext';

const Figure = styled.figure`
    width: 28px;
    padding: 4px;
    max-height: 28px;
    position: relative;
    cursor: pointer;
    &.with-products {
        width: 25px;
        height: auto;
        padding: 0px;
        margin-left: 3px;
    }
`
const Img = styled.img`
    width: 100%;
    height: auto;
`

function Cart() {

    const { inCart } = useSelector(store => store.cart);
    const { openCloseMenuCart, openCloseMenuMobile, menuMobile } = useContext(HeaderContext);

    const handleClick = ()=>{
        if(menuMobile) {
            openCloseMenuMobile();
        }
        openCloseMenuCart();
    }

    if(inCart.length === 0) {
        return (
            <Figure onClick={handleClick}>
                <img src={cart} alt="Carrito" title="Carrito" />
            </Figure>
        )
    }
    return(
        <Figure className='with-products' onClick={handleClick}>
            <Img src={cartWithProducts} alt="Carrito" title="Carrito" />
        </Figure>
    )
}

export default Cart;