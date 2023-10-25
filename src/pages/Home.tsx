import React from 'react';

import { useQuery } from '@tanstack/react-query';

// import { getArticleList } from '../api/article';
import MainLayout from '../components/common/mainLayout/MainLayout';
import Filter from '../components/main/filter/Filter';

const Home = () => {
  const { data } = useQuery<any, any, any, string[]>({
    queryKey: ['article'],
    // queryFn: getArticleList,
  });

  console.log(data);

  return (
    <MainLayout>
      <Filter></Filter>
    </MainLayout>
  );
};

export default Home;
