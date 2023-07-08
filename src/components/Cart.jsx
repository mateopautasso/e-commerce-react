import { styled } from 'styled-components';
import cart from '../assets/icons/icon_shopping_cart.png';
import cartWithProducts from '../assets/icons/icon_shopping_cart_notification.png';
import { useState } from 'react';

const Figure = styled.figure`
    width: 28px;
    padding: 4px;
    height: auto;
    position: relative;
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

  const [productsInCart, setProductsInCart] = useState(0)
  
    const addProduct = ()=>{
        setProductsInCart(productsInCart + 1)
    }

    if(!productsInCart) {
        return (
            <Figure onClick={addProduct}>
                <img src={cart} alt="" />
            </Figure>
        )
    }
    return(
        <Figure onClick={addProduct} className='with-products'>
            <Img src={cartWithProducts} alt=""/>
        </Figure>
    )
}

export default Cart;