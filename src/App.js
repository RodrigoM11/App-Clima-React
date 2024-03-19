import React, { useContext, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from './styles/styles';
import { Context } from './contextAuth';
import { HomePage } from './pages/home';
import { RegisterPage } from './pages/register';
import { UserPage } from './pages/user';

export const App = () => {

  const { isAuth } = useContext(Context);
  // const isAuth = null;
  console.log('isAuth', isAuth);

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Router>
      <Routes>
          <Route path='/' element={isAuth ? <HomePage /> : <Navigate to='/login' />} />
          <Route path='/user' element={isAuth ? <UserPage /> : <Navigate to='/login' />} />
          {!isAuth && <Route path='/login' element={<RegisterPage />} />}
          {!isAuth && <Route path='*' element={<Navigate to='/login' />} />}
          {isAuth && <Route path='/login' element={<Navigate to='/' />} />}
        </Routes>
      </Router>
    </Suspense>
  )
}
