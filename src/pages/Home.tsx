import React from 'react';

import MainLayout from '../components/common/mainLayout/MainLayout';
import Filter from '../components/header/filter/Filter';
import ArticleList from '../components/main/articleList/ArticleList';

const Home = () => {
  return (
    <>
      <Filter />
      <MainLayout>
        <ArticleList />
      </MainLayout>
    </>
  );
};

export default Home;
