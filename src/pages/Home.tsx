import React from 'react';

// import { getArticleList } from '../api/article';
import MainLayout from '../components/common/mainLayout/MainLayout';
import ArticleList from '../components/main/articleList/ArticleList';
import Filter from '../components/main/filter/Filter';

const Home = () => {
  return (
    <>
      <Filter></Filter>
      <MainLayout>
        <ArticleList></ArticleList>
      </MainLayout>
    </>
  );
};

export default Home;
