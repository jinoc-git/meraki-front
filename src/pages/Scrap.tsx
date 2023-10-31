import React from 'react';

import MainLayout from '../components/common/mainLayout/MainLayout';
import Filter from '../components/header/filter/Filter';
import Modal from '../components/header/modal/Modal';
import ScrapList from '../components/main/scrapList/ScrapList';
import { modalStore } from '../store/modalStore';
import { scrapStore } from '../store/scrapStore';

const Scrap = () => {
  const isOpen = modalStore((state) => state.isOpen);
  const scrapArticleList = scrapStore((state) => state.scrapArticleList);

  const hasScrapList = scrapArticleList.length !== 0;
  return (
    <>
      {hasScrapList && <Filter />}
      <MainLayout>
        <ScrapList />
      </MainLayout>
      {isOpen && <Modal />}
    </>
  );
};

export default Scrap;
