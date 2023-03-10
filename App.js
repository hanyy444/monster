import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import HomePage from 'pages/home/home.page'
import GlobalStyle from 'assets/styles/global-styles';

// Pages
// const SignInPage = lazy(() => import('pages/sign-in/sign-in.page'));


function App() {
  return (
    <div className='app'>
      <GlobalStyle />
      <Suspense>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route exact path='/sign-in' element={<SignInPage />} />
          <Route exact path='/sign-up' element={<SignInPage />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
