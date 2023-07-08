import { styled } from "styled-components";

const CampFormContainer = styled.div`
    &.error {
        label {
            color: ${(props)=>props.theme.red};
        }
        input {
            background-color: ${(props)=>props.theme.softRed};
            border: 1px solid ${(props)=>props.theme.red};
        }
    }
`;

const Label = styled.label`
    font-size: ${(props)=>props.theme.fontSm};
    font-weight: ${(props)=>props.theme.font700};
    color: ${(props)=>props.theme.black};
    margin-bottom: 4px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    outline: none;
    font-size: ${(props)=>props.theme.fontMd};
    font-weight: ${(props)=>props.theme.font400};
    color: ${(props)=>props.theme.black};
    background-color: ${(props)=>props.theme.textInputGrey};

    &::placeholder {
        color: ${(props)=>props.theme.grey};
    }
    &.error {
        background-color: ${(props)=>props.theme.softRed};
        border: 1px solid ${(props)=>props.theme.red};
    }
`

function CampForm ({typeInput, idInput, nameInput, textLabel, placeholder, action, isError}) {
    return(
        <CampFormContainer className={isError ? "error" : ""}>
            <Label htmlFor={nameInput}>{textLabel}</Label>
            <Input onChange={action} type={typeInput} name={nameInput} id={idInput} placeholder={placeholder}/>
        </CampFormContainer>
    )
}

export default CampForm;
