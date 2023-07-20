// Comps
import imgAddToCart from "../assets/icons/bt_add_to_cart.png";
import imgAddedToCart from "../assets/icons/bt_added_to_cart.png";
// Deps
import { styled } from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../app/cartSlice/cartSlice";
import { useSelector } from "react-redux";

const MainContainer = styled.div`
    width: 216px;
    max-height: 269px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Figure = styled.figure`
    width: 100%;
    height: 216px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0px 0px 6px 0px rgba(199,199,199,1);
    background-color: #dcecde;
    margin-bottom: 12px
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
`;
const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const PriceArticle = styled.h4`
    font-family: ${(props)=>props.theme.sf};
    font-weight: ${(props)=>props.theme.font700};
`
const NameArticle = styled.h4`
    font-size: ${(props)=>props.theme.fontSm};
    font-weight: ${(props)=>props.theme.font500};
    color: ${(props)=>props.theme.grey};
`

function CardProduct({src, price, title, id, stock, description}) {

    const { email } = useSelector(store => store.user);
    const { inCart } = useSelector(store => store.cart);
    const dispatch = useDispatch();

    const [added, setAdded] = useState(false);

    const addOrRemoveProductToCart = (id, title, price, stock, description, src)=>{
        if(!email) alert("Debes iniciar sesión para agregar productos al carro!");
        if(!added && email) {
            dispatch(addToCart({
                id,
                title,
                price,
                stock,
                description,
                src
            }))
            setAdded(true);
        } else {
            dispatch(removeToCart({
                id
            }))
            setAdded(false);
        }
    }
    const isProductInCart = (id)=>{
        return inCart.some(product => product.id === id);
    }

  return (
    <MainContainer>
        <Figure>
            <Img src={src} alt={title} title={title}/>
        </Figure>
        <InfoContainer>
            <div style={{display: 'flex', flexDirection: 'column', gap:'4px', maxWidth: '170px'}}>
                <PriceArticle>$ {price},00</PriceArticle>
                <NameArticle>{title}</NameArticle>
            </div>
            <figure
                style={{width: '40px', height: '40px', cursor: 'pointer'}}
                onClick={() => addOrRemoveProductToCart(id, title, price, stock, description, src)}
                >
                <img
                style={{width: '40x', height: '40px'}}
                src={isProductInCart(id) ? imgAddedToCart : imgAddToCart}
                alt="Agregar producto al carrito"
                title="Agregar producto al carrito"/>
            </figure>
        </InfoContainer>
    </MainContainer>
  )
}

export default CardProduct