import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/home/HomeView';

export const renderRoutes = (routes = []) => (
  <Switch>
    {routes.map((route, i) => {
      const Guard = route.guard || Fragment;
      const Layout = route.layout || Fragment;
      const Component = route.component;
      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={props => (
            <Guard>
              <Layout>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </Layout>
            </Guard>
          )}
        />
      );
    })}
  </Switch>
);

const routes = [
  {
    path: '/app',
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/app',
        component: HomeView
      }
    ]
  },

  {
    path: '/',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: HomeView
      }
    ]
  }
];

export default routes;
