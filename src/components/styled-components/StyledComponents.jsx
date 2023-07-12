import { styled } from "styled-components";

export const SectionTitle = styled.h2`
    font-size: ${(props)=>props.theme.fontBg};
    font-weight: ${(props)=>props.theme.font700};
    color: ${(props)=>props.theme.black}
`;

export const ErrorP = styled.p`
    font-weight: ${(props)=>props.theme.font500};
    font-size: ${(props)=>props.theme.fontSm};
    color: ${(props)=>props.theme.red};
`;

const Button = styled.button`
    width: 100%;
    height: 6rem;
    background-color: ${(props)=>props.theme.hospitalGreen};
    border-radius: 8px;
    font-size: ${(props)=>props.theme.fontBg};
    font-weight: ${(props)=>props.theme.font700};
    color: ${(props)=>props.theme.white};
    cursor: pointer;
    &:active {
        background-color: ${(props)=>props.theme.softHospitalGreen};
    }
    &.secondary-btn {
        background-color: ${(props)=>props.theme.white};
        color: ${(props)=>props.theme.hospitalGreen};
        border: 2px solid ${(props)=>props.theme.hospitalGreen};
        &:active {
            border: 2px solid ${(props)=>props.theme.softHospitalGreen};
            color: ${(props)=>props.theme.softHospitalGreen};
        }
    }
`;
export function PrimaryButton({text, action, isSecondary}) {
    return(
        <Button onClick={action} className={isSecondary ? "secondary-btn" : ""}>
            {text}
        </Button>
    )
}

export const Loader = styled.div`
    height: 6rem;
    width: 6rem;

    /* Create a curve at the top */
    border: 6px solid #F7F7F7;
    border-top-color:#ACD9B2;
    border-radius: 50%;

    animation: spinner 800ms linear infinite;

    @keyframes spinner {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`