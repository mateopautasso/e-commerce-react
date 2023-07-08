// Css
import './App.css';
import ResetCss from './utils/reset-css/ResetCss';
import StylesVariables from './components/styles-variables/StylesVariables';

// Comps
import Header from './layouts/Header';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home'
import Login from './pages/Login'

// Utils
import store from './app/store';

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
          <Header />
          <Routes>
            <Route path='./' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create' element={<CreateAccount />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
