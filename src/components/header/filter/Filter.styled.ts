import styled, { css } from 'styled-components';

interface FilterItemProps {
  isActive: boolean;
}

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

export const FilterListWrapper = styled.ul`
  display: flex;
  gap: 7px;
`;

export const FilterItem = styled.li<FilterItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 34px;
  padding: 6px 12px 4px;
  font-family: 'AppleSDGothicNeoReguler';
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.04em;
  border-radius: 30px;

  ${({ isActive }) => {
    return css`
      color: ${isActive ? '#3478F6' : '#6D6D6D'};
      border: 1px solid ${isActive ? '#82B0F4' : '#C4C4C4'};
    `;
  }}

  & > p {
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
