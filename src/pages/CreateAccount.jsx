import { styled } from 'styled-components';
import CampForm from '../components/CampForm';
import { PrimaryButton, SectionTitle } from '../components/styled-components/StyledComponents';
import { setAccountInLocalStorage } from '../utils/account-local-storage';
import { useState } from 'react';
import { ErrorP } from '../components/styled-components/StyledComponents';


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


function Login() {

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [repeatPasswordInput, setRepeatPasswordInput] = useState('');
  const [errorForm, setErrorForm] = useState('');

  const handleButton = (email, password, repeatPasswordInput)=>{
    if(emailInput && passwordInput) {
      const response = setAccountInLocalStorage(email, password, repeatPasswordInput);
      response ? setErrorForm(response) : setErrorForm('')
    } else setErrorForm('Campos incompletos')

  }

  const handleEmail = (e)=>{
    setEmailInput(e.target.value)
  }
  const handlePassword = (e)=>{
    setPasswordInput(e.target.value)
  }
  const handleRepeatPassword = (e)=>{
    setRepeatPasswordInput(e.target.value)
  }

  return (
    <MainContainer>
        <FormContainer method='post'>
            <SectionTitle style={{marginBottom: '20px'}}>Mi cuenta</SectionTitle>

            <CampForm action={handleEmail}
              typeInput='email'
              idInput='emailLogin'
              nameInput='email'
              textLabel='Email'
              placeholder='ejemplo@gmail.com'
              isError={errorForm ? true : false}
            />

            <CampForm action={handlePassword} 
              typeInput='password'
              idInput='passwordLogin'
              nameInput='password'
              textLabel='Contraseña'
              placeholder='*********'
              isError={errorForm ? true : false}
            />

            <CampForm action={handleRepeatPassword}
              typeInput='password'
              idInput='repeatPasswordLogin'
              nameInput='password'
              textLabel='Confirmar contraseña'
              placeholder='*********'
              isError={errorForm ? true : false}
            />

            <PrimaryButton text='Crear Cuenta' action={(e)=>{
              e.preventDefault();
              handleButton(emailInput, passwordInput, repeatPasswordInput);
            }}/>
            {
              errorForm && <ErrorP>{errorForm}</ErrorP>
            }
            
        </FormContainer>
    </MainContainer>
  )
}

export default Login