import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { logOut } from "../app/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";

const Card = styled.div`
    visibility: hidden;
    height: auto;
    padding: 0px 12px 8px 12px;
    box-shadow: 0px 0px 3px 0px rgba(199,199,199,1);
    background-color: white;
    position: absolute;
    top: 66px;
    right: 81px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    &.active {
        visibility: visible;
    }
`;
const Pblack = styled.p`
    padding: 8px 0px;
    font-weight: ${(props)=>props.theme.font700};
`
const Pgreen = styled.p`
    padding-top: 8px;
    border-top: 1px solid ${(props)=>props.theme.softPinkGrey};
    font-size: ${(props)=>props.theme.fontSm};
    font-weight: ${(props)=>props.theme.font700};
    color: ${(props)=>props.theme.hospitalGreen};
`;

function CardLogout() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { menuDesktop, openCloseMenuDesktop } = useContext(HeaderContext)

    const handleLogOut = ()=>{
        dispatch(logOut());
        openCloseMenuDesktop();
        navigate("/e-commerce-react");
    }

  return (
    <Card className={ menuDesktop ? "active" : "" }>
        <Pblack>
            Mi cuenta
        </Pblack>
        <Pgreen onClick={handleLogOut}>
            Cerrar sesión
        </Pgreen>
    </Card>
  )
}

export default CardLogout;