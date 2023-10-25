import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/gnb/GNB';
import Nav from '../components/nav/Nav';
import Home from '../pages/Home';
import Scrap from '../pages/Scrap';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
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
