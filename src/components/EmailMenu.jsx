// Comps
import arrow from '../assets/icons/flechita.png';
import CardLogout from "./CardLogout";
// Deps
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";
import { useDispatch } from 'react-redux';
import { logOut } from '../app/userSlice/userSlice';

const EmailDesktopContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    @media (max-width: 1024px) {
      display: none;
  }
`;
const EmailMobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
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


export function EmailDesktop() {

  const { email } = useSelector(store => store.user);
  const { openCloseMenuDesktop } = useContext(HeaderContext);

  if(email) {
    return (
        <EmailDesktopContainer>
            <P>{email}</P>
            <CardLogout />
            <figure
              style={{width: '7px', marginTop: '2px'}}
              onClick={openCloseMenuDesktop}
            >
                <img src={arrow} alt="" style={stylesArrow}/>
            </figure>
        </EmailDesktopContainer>
      )
  }
  return (
    <EmailDesktopContainer>
      <LoginP>
        <Link to="/e-commerce-react/login">
          Iniciar Sesión
        </Link>
      </LoginP>
    </EmailDesktopContainer>

  )
}

export function EmailMobile() {

  const { email } = useSelector(store => store.user);
  const { openCloseMenuMobile } = useContext(HeaderContext);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogOut = ()=>{
    dispatch(logOut());
    openCloseMenuMobile();
    navigate("/e-commerce-react");
}

  if(email) {
    return (
        <EmailMobileContainer>
            <P>{email}</P>
            <LoginP>
              <Link to="/e-commerce-react/" onClick={handleLogOut}>
                Cerrar sesión
              </Link>
            </LoginP>
        </EmailMobileContainer>
        
      )
  }
  return (
    <EmailMobileContainer>
      <LoginP>
        <Link to="/e-commerce-react/login" onClick={openCloseMenuMobile}>
          Iniciar Sesión
        </Link>
      </LoginP>
    </EmailMobileContainer>

  )
}