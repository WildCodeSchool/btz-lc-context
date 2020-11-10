import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import authContext from './contexts/Auth';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Users from './pages/Users';

const Router = () => {
  const [token, setToken] = useState(null);
  const [avatar, setAvatar] = useState(null);

  return (
    <BrowserRouter>
      <authContext.Provider value={{ token, setToken, avatar, setAvatar }}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/users" component={Users} />
          </Switch>
        </Layout>
      </authContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
