import { styled } from "styled-components";

const BtnStyled = styled.button`
    padding: 16px;
    background-color: ${(props)=>props.theme.hospitalGreen};
    cursor: pointer;
    border-radius: 8px;
    color: ${(props)=>props.theme.white};
    font-size: ${(props)=>props.theme.fontBg};
    font-weight: ${(props)=>props.theme.font700};
`

function BtnNextPage ({text, handleClick}) {
    return (
        <BtnStyled onClick={handleClick} className="nextBtn">
            {text}
        </BtnStyled>
    )    
}

export default BtnNextPage