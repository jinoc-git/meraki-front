import styled from 'styled-components';

export const FilterContainer = styled.header`
  @media screen and (max-width: 560px) {
    width: 100vw;
    left: 0;
    transform: translate(0, 0);
  }

  position: fixed;
  top: 0;
  left: 50%;
  width: 560px;
  height: 60px;
  padding: 13px 20px;
  transform: translate(-50%, 0);
  font-family: 'AppleSDGothicNeoSemiBold';
  border-bottom: 1px solid #c4c4c4;
  background-color: #fff;
`;

export const FilterBtnWrapper = styled.ul`
  display: flex;
  gap: 7px;
`
