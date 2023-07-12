import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { changeCategory } from "../app/categorySlice/categorySlice";

const HeaderAnchors = styled.a`
    font-size: ${(props)=>props.theme.fontMd};
    font-weight: ${(props)=>props.theme.font500};
    color: ${(props)=>props.theme.softPinkGrey};
    display: block;
    border-radius: 8px;
    padding: 8px 14px;
    cursor: pointer;
    &.active {
        border: 1px solid ${(props)=>props.theme.hospitalGreen};
        color: ${(props)=>props.theme.hospitalGreen};
    }
`;

function HeaderAnchor({ category, children, isActive }) {

    const dispatch = useDispatch();
    const handleClick = (category)=>{
        dispatch(changeCategory(category))
    }

  return (
    <HeaderAnchors className={isActive ? "active" : ""} onClick={() => handleClick(category)}>
        {children}
    </HeaderAnchors>
  )
}

export default HeaderAnchor;
