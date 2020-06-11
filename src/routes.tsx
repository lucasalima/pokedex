import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import store from './pokemon-react/store';

import Header from './pokemon-react/components/Templates/Core/Header';

import List from './pokemon-react/components/Pages/List';
import Detail from './pokemon-react/components/Pages/Detail';

const Routes = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="content">
          <Header />

          <BrowserRouter>
            <Route component={List} path="/" exact />
            <Route component={Detail} path="/detail/:name" />
          </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
};

export default Routes;
