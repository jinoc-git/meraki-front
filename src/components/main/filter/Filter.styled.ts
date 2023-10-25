import styled from 'styled-components';

export const FilterContainer = styled.header`
  @media screen and (max-width: 560px) {
    width: 100vw;
  }

  position: fixed;
  top: 44px;
  left: 0;
  width: 560px;
  height: 60px;
  padding: 13px 20px;
  font-family: 'AppleSDGothicNeoSemiBold';
  border-bottom: 1px solid #c4c4c4;
  background-color: #fff;
`;
