import { styled } from "styled-components";
import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";
import iconMenu from "../assets/icons/icon_menu.png";

const Icon = styled.img`
    width: 25px;
    height: 19px;
    @media(min-width: 1024px) {
        display: none;
    }
`;

function IconMenuMobile() {

    const { menuCart, openCloseMenuMobile, openCloseMenuCart } = useContext(HeaderContext);
    const handleClick = ()=>{
        if(menuCart){
            openCloseMenuCart()
        }
        openCloseMenuMobile() 
    }
  return (
    <Icon
        src={iconMenu}
        alt="Botón con las demás categorías de productos"
        onClick={handleClick}>

    </Icon>
  )
}

export default IconMenuMobile;