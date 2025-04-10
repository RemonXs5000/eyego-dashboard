import React from 'react';
import { Routes, Route } from 'react-router-dom';

import OverviewPage from './pages/OverviewPage';
import EmployeePage from './pages/EmployeePage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import Layout from './components/Layout/Layout';
import AuthenticationProvider from './context/AuthenticationContext';
import ProtectedRoute from './components/Layout/ProtectedRoute';



export default function App() {
  return (
    <AuthenticationProvider>
      <Routes>
        {/* ProtectedRoutes with layout   */}
        <Route element={<Layout />}>
          <Route path="/overview"  element={<ProtectedRoute><OverviewPage /></ProtectedRoute>} />
          <Route path="/employee"element={<ProtectedRoute><EmployeePage /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
        </Route>

        {/* Routes without layout */}
        <Route index element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignUpPage />} />

      </Routes>
    </AuthenticationProvider>
  );
}
