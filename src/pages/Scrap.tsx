import React from 'react';

import MainLayout from '../components/common/mainLayout/MainLayout';
import Filter from '../components/header/filter/Filter';
import ScrapList from '../components/main/scrapList/ScrapList';

const Scrap = () => {
  return (
    <>
      <Filter></Filter>
      <MainLayout>
        <ScrapList />
      </MainLayout>
    </>
  );
};

export default Scrap;
