import { styled } from "styled-components";
import { PrimaryButton, SectionTitle } from "../components/styled-components/StyledComponents";
import emailLogo from "../assets/icons/email.png";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const CardRegistered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px
`;
const Figure = styled.figure`
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props)=>props.theme.textInputGrey};
    border-radius: 50%;
    object-fit: contain;
    overflow: hidden;
`;
const Img = styled.img`
    width: 60%;
    height: auto;
`;
const P = styled.p`
    font-weight: ${(props)=>props.theme.font400};
    color: ${(props)=>props.theme.grey};
`

function Registered() {

    const navigate = useNavigate();
    const handleButton = () => {
        navigate("/e-commerce-react/login")
    }

  return (
    <MainContainer>
        <CardRegistered>
            <SectionTitle>Felicitaciones, te has registrado correctamente!</SectionTitle>
            <P>Por favor, inicia sesión para seguir navegando en nuestro sitio.</P>
            <Figure>
                <Img src={emailLogo} alt="logo email" />
            </Figure>
            <PrimaryButton text="Iniciar Sesión" action={handleButton}/>
        </CardRegistered>
    </MainContainer>

  )
}

export default Registered