// Comps
import { SectionTitle, PrimaryButton } from "./styled-components/StyledComponents";
// Deps
import { styled } from "styled-components";
import ProductInCart from "./ProductInCart";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";

const MainContainer = styled.div`
    width: 400px;
    height: 89.8%;
    padding: 12px;
    position: fixed;
    background-color: white;
    bottom: 0;
    right: -410px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    box-shadow: -1px 6px 10px 0px rgba(199,199,199,1);
    border-radius: 4px;
    overflow-y: scroll;
    transition: 0.5s;
    &.active {
      transform: translateX(-410px);
    }
    @media (max-width: 1024px) {
        width: 100%;
        padding: 12px 100px;
        right: -1020px;
        &.active {
            transform: translateX(-1020px);
        }
    }
    @media (max-width: 600px) {
        width: 100%;
        padding: 12px 16px;
    }
`;
const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
const ProductsContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start!important;
    align-items: flex-start!important;
    gap: 24px;
    margin-top: 36px;
    margin-bottom: 48px;
    padding-left: 8px;
`
const ArrowClose = styled.p`
    font-size: 2.5rem;
    cursor: pointer;
`;
const PriceContainer = styled.div`
    width: 100%;
    height: 70px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background-color: ${(props)=>props.theme.textInputGrey};
`
const TotalPriceP = styled.p`
    font-size: ${(props)=>props.theme.fontSm};
    font-weight: ${(props)=>props.theme.font700};
`
const Price = styled.p`
    font-family: ${(props)=>props.theme.sf};
    font-weight: ${(props)=>props.theme.font700}
`

function CardPreviewCart({isActive}) {

    const { inCart } = useSelector(store=>store.cart);
    const { openCloseMenuCart } = useContext(HeaderContext)

    const closeMenu = () => {
        openCloseMenuCart()
    }

    return (
        <MainContainer className={isActive ? "active" : ""}>
            <TopContainer>
                <TitleContainer>
                    <ArrowClose onClick={closeMenu} alt="Cerrar carrito" title="Cerrar carrito">
                        {'🡲'}
                    </ArrowClose>
                    <SectionTitle>Carrito de compra</SectionTitle>
                </TitleContainer>
                <ProductsContainer>
                    {
                        inCart.map((product)=>{
                            return (
                                <ProductInCart
                                key={product.id}
                                id={product.id}
                                src={product.src}
                                title={product.title}
                                price={product.price}
                                />
                            )
                        })
                    }
                </ProductsContainer>
            </TopContainer>
            <BottomContainer>
                <PriceContainer>
                    <TotalPriceP>
                        Total:
                    </TotalPriceP>
                    <Price>
                        $&nbsp;
                        {
                            inCart.map(product => product.price).reduce((accumulated, accumulator)=>{
                                return accumulated + accumulator;
                            }, 0)
                        },00
                    </Price>
                </PriceContainer>
                <PrimaryButton
                    text="Realizar compra"
                    action={()=>alert("Hasta acá han llegado las funcionalidades del sitio!")}/>
            </BottomContainer>
        </MainContainer>
    )
}

export default CardPreviewCart