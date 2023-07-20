//Comps
import logo from  "../assets/logos/logo_yard_sale.png";
import { EmailDesktop } from "../components/EmailMenu";
import Cart from "../components/Cart";
import { HeaderAnchor } from "../components/HeaderAnchor";
import CardPreviewCart from "../components/CardPreviewCart";
import MenuMobile from "../components/MenuMobile";
import IconMenuMobile from "../components/IconMenuMobile";

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
    background-color: ${(props)=>props.theme.white};
`
const Nav = styled.nav`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props)=>props.theme.paddingLaterales};
    @media (max-width: 475px) {
        padding: 0px 16px;
    }
`;
const UlWithCategories = styled.ul`
    display: flex;
    @media (max-width: 1024px) {
        display: none;
    };
`
const Logo = styled.img`
    width: 100%;
    cursor: pointer;
`;
const FigureLogo = styled.figure`
    width: 144px;
    height: 30px;
`;



function Header() {

    const { category } = useSelector(store=>store.category);
    const { menuCart, menuMobile } = useContext(HeaderContext);

    const reLoadSite = ()=>{
        location.load();
    }

  return (
    <HeaderStyled>
        <Nav>
            <IconMenuMobile />
            <MenuMobile isActive={menuMobile}/>
            <div style={{display: 'flex', gap:'32px'}}>
                <Link to="/e-commerce-react" onClick={reLoadSite}>
                    <FigureLogo>
                        <Logo src={logo} alt="Logo principal" />
                    </FigureLogo>
                </Link>
                <UlWithCategories>
                    <li>
                        <HeaderAnchor 
                            isActive={category === "all" ? true : false}
                            category="all">Todas
                        </HeaderAnchor>
                    </li>
                    <li>
                        <HeaderAnchor
                            isActive={category === "mens-shirts" ? true : false}
                            category="mens-shirts">Remeras Hombre
                        </HeaderAnchor>
                    </li>
                    <li>
                        <HeaderAnchor
                        isActive={category === "womens-dresses" ? true : false}
                        category="womens-dresses">Vestidos
                        </HeaderAnchor>
                    </li>
                    <li>
                        <HeaderAnchor
                        isActive={category === "fragrances" ? true : false}
                        category="fragrances">Fragancias
                        </HeaderAnchor>
                    </li>
                    <li>
                        <HeaderAnchor
                        isActive={category === "smartphones" ? true : false}
                        category="smartphones">Electrónica
                        </HeaderAnchor>
                    </li>
                </UlWithCategories>
            </div>
            <div style={{display: 'flex', gap:'24px'}}>
                <EmailDesktop />
                <Cart />
                <CardPreviewCart isActive={menuCart}/>
            </div>
        </Nav>
    </HeaderStyled>
  )
}

export default Header