// import './App.css';
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import GlobalStyle from '../src/assets/styles/global-styles';
import HomePage from './pages/home/home.page'

// Pages
// * - Lazy Loading
const SignInPage = lazy(() => import('./pages/sign-in/sign-in.page'));


function App() {
  return (
    <>
      <Suspense>
        <GlobalStyle />
        {/* HEADER COMPONENT */}
        {/* Header */}
        <Routes>
          {/* Home page */}
          <Route path='/' element={<HomePage />} />
          {/* SignIn Page */}
          <Route exact path='/sign-in' element={<SignInPage />} />
          <Route exact path='/sign-up' element={<SignInPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
