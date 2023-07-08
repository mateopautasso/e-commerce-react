import { styled } from "styled-components";
import { HeaderAnchors } from "../components/styled-components/StyledComponents";
import { Link } from "react-router-dom";
import logo from  "../assets/logos/logo_yard_sale.png";
import EmailMenu from "../components/EmailMenu";
import Cart from "../components/Cart";

const HeaderStyled = styled.header`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 3px 3px 0px rgba(247,247,247,1);
    background-color: ${(props)=>props.theme.white}
`
const Nav = styled.nav`
    width: 100%;
    height: 100%;
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
  return (
    <HeaderStyled>
        <Nav>
            <div style={{display: 'flex', gap:'32px'}}>
                <Link to="/">
                    <figure style={stylesFigure}>
                        <img style={stylesLogo} src={logo} alt="" />
                    </figure>
                </Link>
                <ul style={{display: 'flex'}}>
                    <li>
                        <HeaderAnchors>All</HeaderAnchors>
                    </li>
                    <li>
                        <HeaderAnchors>Clothes</HeaderAnchors>
                    </li>
                    <li>
                        <HeaderAnchors>Electronics</HeaderAnchors>
                    </li>
                    <li>
                        <HeaderAnchors>Forniture</HeaderAnchors>
                    </li>
                    <li>
                        <HeaderAnchors>Toys</HeaderAnchors>
                    </li>
                    <li>
                        <HeaderAnchors>Others</HeaderAnchors>
                    </li>
                </ul>
            </div>
            <div style={{display: 'flex', gap:'24px'}}>
                <EmailMenu></EmailMenu>
                <Cart></Cart>
            </div>
        </Nav>
    </HeaderStyled>
  )
}

export default Header