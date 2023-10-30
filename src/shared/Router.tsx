import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from '../components/nav/Nav';

const Home = lazy(async () => await import('../pages/Home'));
const Scrap = lazy(async () => await import('../pages/Scrap'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scrap" element={<Scrap />} />
        </Routes>
      </Suspense>
      <Nav />
    </BrowserRouter>
  );
};

export default Router;
