import styled from 'styled-components';

export const NoScrapListContainer = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const GuideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 295px;
  height: 152px;
`;

export const GuideComment = styled.p`
  margin: 8px 0 20px;
  font-family: 'AppleSDGothicNeoSemiBold';
  font-size: 18px;
  line-height: 28px;
  color: #6d6d6d;
`;
