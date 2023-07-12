// Comps
import arrow from '../assets/icons/flechita.png';
import CardLogout from "./CardLogout";
// Deps
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";

const MenuDesktopContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;
const P = styled.p`
    font-size: ${(props)=>props.theme.fontSm}
`;
const stylesArrow = {
    width: '100%', 
    height: 'auto', 
    transform: 'rotate(90deg)'
};
const LoginP = styled.p`
  font-size: ${(props)=>props.theme.fontSm};
  font-weight: ${(props)=>props.theme.font700};
  color: ${(props)=>props.theme.hospitalGreen};
`;


function MenuDesktop() {

  const { email } = useSelector(store => store.user);
  const { openCloseMenuDesktop } = useContext(HeaderContext);

  if(email) {
    return (
        <MenuDesktopContainer>
            <P>{email}</P>
            <CardLogout />
            <figure
              style={{width: '7px', marginTop: '2px'}}
              onClick={openCloseMenuDesktop}
            >
                <img src={arrow} alt="" style={stylesArrow}/>
            </figure>
        </MenuDesktopContainer>
      )
  }
  return (
    <MenuDesktopContainer>
      <LoginP>
        <Link to="/e-commerce-react/login">
          Iniciar Sesión
        </Link>
      </LoginP>
    </MenuDesktopContainer>

  )
}

export default MenuDesktop;