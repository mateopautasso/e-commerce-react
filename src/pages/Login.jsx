import { styled } from 'styled-components';
import CampForm from '../components/CampForm';
import { PrimaryButton, SectionTitle, ErrorP } from '../components/styled-components/StyledComponents';
import { Link, useNavigate } from 'react-router-dom';
import { getAccountInLocalStorage } from '../utils/account-local-storage';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../app/userSlice/userSlice';

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [errorForm, setErrorForm] = useState('');

  const handleEmail = (e)=>{
    setEmailInput(e.target.value)
  }
  const handlePassword = (e)=>{
    setPasswordInput(e.target.value)
  }
  const handleButton = ()=>{
    const response = getAccountInLocalStorage(emailInput, passwordInput);
    if(typeof response === 'object') {
      dispatch(logIn(response));
      navigate("/e-commerce-react");
    } else {
      setErrorForm(response)
    }
  }


  return (
    <MainContainer>
        <FormContainer>
        <SectionTitle style={{marginBottom: '20px', textAlign: "start"}}>Ingresar</SectionTitle>
            <CampForm
              typeInput='email'
              idInput='emailLogin'
              nameInput='email'
              textLabel='Email'
              placeholder='ejemplo@gmail.com'
              action={handleEmail}
              isError={errorForm ? true : false}
            />

            <CampForm
              typeInput='password'
              idInput='passwordLogin'
              nameInput='password'
              textLabel='Contraseña'
              placeholder='*********'
              action={handlePassword}
              isError={errorForm ? true : false}
            />

            <PrimaryButton text='Iniciar Sesión' action={(e)=>{
              e.preventDefault();
              handleButton();
            }}/>
        </FormContainer>
            {
              errorForm && <ErrorP style={{marginTop: '12px'}}>{errorForm}</ErrorP>
            }

        <CreateAccountContainer>
          <p>¿No tienes cuenta?</p>
          <Link to="/e-commerce-react/create">
            <PrimaryButton text='Crear Cuenta' isSecondary/>
          </Link>
        </CreateAccountContainer>
    </MainContainer>
  )
}

export default Login