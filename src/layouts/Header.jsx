//Comps
import logo from  "../assets/logos/logo_yard_sale.png";
import EmailMenu from "../components/EmailMenu";
import Cart from "../components/Cart";
import HeaderAnchor from "../components/HeaderAnchor";
import CardPreviewCart from "../components/CardPreviewCart";

//Deps
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";

const HeaderStyled = styled.header`
    width: 100%;
    height: 10%;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 1px 10px 0px rgba(199,199,199,1);
    background-color: ${(props)=>props.theme.white}
`
const Nav = styled.nav`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props)=>props.theme.paddingLaterales};
`;
const stylesFigure = {
    width: '144px',
    height: '30px'
}
const stylesLogo = {
    width: '100%',
    cursor: 'pointer'
}

function Header() {

    const { category } = useSelector(store=>store.category);
    const { menuCart } = useContext(HeaderContext)

  return (
    <HeaderStyled>
        <Nav>
            <div style={{display: 'flex', gap:'32px'}}>
                <Link to="/e-commerce-react">
                    <figure style={stylesFigure}>
                        <img style={stylesLogo} src={logo} alt="" />
                    </figure>
                </Link>
                <ul style={{display: 'flex'}}>
                    <li>
                        <HeaderAnchor 
                            isActive={category === "all" ? true : false}
                            category="all">Todos
                        </HeaderAnchor>
                    </li>
                    <li>
                        <HeaderAnchor
                            isActive={category === "clothes" ? true : false}
                            category="clothes">Ropa
                        </HeaderAnchor>
                    </li>
                    <li>
                        <HeaderAnchor
                        isActive={category === "accessories" ? true : false}
                        category="accessories">Accesorios
                        </HeaderAnchor>
                    </li>
                    <li>
                        <HeaderAnchor
                        isActive={category === "furnitureHome" ? true : false}
                        category="furnitureHome">Muebles y Hogar
                        </HeaderAnchor>
                    </li>
                    <li>
                        <HeaderAnchor
                        isActive={category === "electronics" ? true : false}
                        category="electronics">Electrónica
                        </HeaderAnchor>
                    </li>
                </ul>
            </div>
            <div style={{display: 'flex', gap:'24px'}}>
                <EmailMenu />
                <Cart />
                <CardPreviewCart isActive={menuCart}/>
            </div>
        </Nav>
    </HeaderStyled>
  )
}

export default Header