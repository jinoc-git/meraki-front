import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from '../components/nav/Nav';
import Home from '../pages/Home';
import Scrap from '../pages/Scrap';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scrap" element={<Scrap />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
