import React, { useContext } from 'react';

import Layout from './components/Layout/Layout';

import Dashboard from './screens/Dashboard';
import Login from './screens/Login';

import SessionContext from './contexts/SessionContext';

const Router = () => {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <Layout className="layout">
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Dashboard />}
    </Layout>
  );
};

export default Router;
