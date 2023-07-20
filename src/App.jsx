// Css
import './App.css';
import ResetCss from './utils/ResetCss';
import StylesVariables from './components/styles-variables/StylesVariables';

// Comps
import Header from './layouts/Header';
import Home from './pages/Home'
import CreateAccount from './pages/CreateAccount';
import Registered from './pages/Registered';
import Login from './pages/Login';

// Contexts
import store from './app/store';
import { HomeContextProvider } from "./context/HomeContext";
import { HeaderContextProvider } from "./context/HeaderContext";

// Deps
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <ResetCss />
      <ThemeProvider theme={StylesVariables}>
        <Provider store={store}>
          <HeaderContextProvider>
            <Header />
          </HeaderContextProvider>
          <HomeContextProvider>
            <Routes>
              <Route path='/e-commerce-react' element={<Home />} />
              <Route path='/e-commerce-react/login' element={<Login />} />
              <Route path='/e-commerce-react/create' element={<CreateAccount />} />
              <Route path='/e-commerce-react/registered' element={<Registered />} />
            </Routes>
          </HomeContextProvider>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
