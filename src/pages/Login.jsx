import { styled } from 'styled-components';
import CampForm from '../components/CampForm';
import { PrimaryButton } from '../components/styled-components/StyledComponents';
import { Link } from 'react-router-dom';

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    align-items: center;
`
const FormContainer = styled.form`
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 425px) {
      width: 100%;
    }
`;

const CreateAccountContainer = styled.div`
    width: 400px;
    max-width: 600px;
    margin-top: 48px;
    p {
      text-align: center;
      margin-bottom: 8px;
    };
    @media (max-width: 425px) {
      width: 100%;
    }
`

function Login() {
  return (
    <MainContainer>
        <FormContainer>
            <CampForm typeInput='email' idInput='emailLogin' nameInput='email' textLabel='Email' placeholder='ejemplo@gmail.com'/>
            <CampForm typeInput='password' idInput='passwordLogin' nameInput='password' textLabel='Contraseña' placeholder='*********'/>
            <PrimaryButton text='Iniciar Sesión' />
        </FormContainer>
        <CreateAccountContainer>
          <p>¿No tienes cuenta?</p>
          <Link to="/create">
            <PrimaryButton text='Crear Cuenta' isSecondary/>
          </Link>
        </CreateAccountContainer>
    </MainContainer>
  )
}

export default Login