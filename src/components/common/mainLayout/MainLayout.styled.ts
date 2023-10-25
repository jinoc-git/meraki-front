import styled from 'styled-components';

export const MainLayoutContainer = styled.main`
  @media screen and (max-width: 560px) {
    width: 100vw;
  }

  width: 560px;
  height: 100vh;
  padding: 60px 20px 20px;
  background-color: #f0f1f4;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
