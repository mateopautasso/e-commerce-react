import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { changeCategory } from "../app/categorySlice/categorySlice";
import { setPage } from "../app/paginationSlice/paginationSlice";
import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";

const HeaderAnchors = styled.a`
    font-size: ${(props)=>props.theme.fontMd};
    font-weight: ${(props)=>props.theme.font500};
    color: ${(props)=>props.theme.grey};
    display: block;
    border-radius: 8px;
    padding: 8px 14px;
    cursor: pointer;
    &.active {
        border: 1px solid ${(props)=>props.theme.hospitalGreen};
        color: ${(props)=>props.theme.hospitalGreen};
    }
`;
const HeaderAnchorsMobile = styled.a`
    font-size: ${(props)=>props.theme.fontMd};
    font-weight: ${(props)=>props.theme.font700};
    color: ${(props)=>props.theme.black};
    display: block;
    border-radius: 8px;
`;

export function HeaderAnchor({ category, children, isActive }) {

    const dispatch = useDispatch();
    const handleClick = (category)=>{
        dispatch(setPage(1))
        dispatch(changeCategory(category))
    }

  return (
    <HeaderAnchors className={isActive ? "active" : ""} onClick={() => handleClick(category)}>
        {children}
    </HeaderAnchors>
  )
}

export function HeaderAnchorMobile({ category, children }) {

    const dispatch = useDispatch();
    const { openCloseMenuMobile } = useContext(HeaderContext);

    const handleClick = (category)=>{
        dispatch(setPage(1));
        openCloseMenuMobile();
        dispatch(changeCategory(category));
    }

  return (
    <HeaderAnchorsMobile onClick={() => handleClick(category)}>
        {children}
    </HeaderAnchorsMobile>
  )
}
