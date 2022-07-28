import React, { LazyExoticComponent, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/Home/index'));
const About = React.lazy(() => import('@/pages/About/index'));

interface RoutesTy {
  path: string;
  element: LazyExoticComponent<any>;
  title: string;
}

const routes: RoutesTy[] = [
  { path: '/', element: Home, title: '首页' },
  { path: '/about', element: About, title: '关于' }
];
const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          {routes?.map((item: RoutesTy) => {
            return <Route key={item.path} path={item.path} element={<item.element />} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteConfig;
