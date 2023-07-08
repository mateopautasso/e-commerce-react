import { styled } from "styled-components";
import imgAddToCart from "../assets/icons/bt_add_to_cart.png"

const MainContainer = styled.div`
    width: 216px;
    height: 269px;
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
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
`;
const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
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

function CardProduct({src, price, article}) {
  return (
    <MainContainer>
        <Figure>
            <Img src={src}>
            </Img>
        </Figure>
        <InfoContainer>
            <div style={{display: 'flex', flexDirection: 'column', gap:'4px'}}>
                <PriceArticle>$ {price},00</PriceArticle>
                <NameArticle>{article}</NameArticle>
            </div>
            <figure style={{width: '40px', height: '40px', cursor: 'pointer'}}>
                <img src={imgAddToCart} alt="" />
            </figure>
        </InfoContainer>
    </MainContainer>
  )
}

export default CardProduct