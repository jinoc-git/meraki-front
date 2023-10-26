import styled, { css } from 'styled-components';

interface ButtonStyleProps {
  useTo: 'normal' | 'filter' | 'select';
  isActive?: boolean;
}

export const Button = styled.button<ButtonStyleProps>`
  ${(props) => {
    const { isActive } = props;
    switch (props.useTo) {
      case 'normal':
        return css`
          width: 100%;
          height: 60px;
          border-radius: 16px;
          color: #fff;
          font-family: 'AppleSDGothicNeoSemiBold';
          background-color: #3478f6;

          &:active {
            background-color: #165bdb;
          }
        `;
      case 'filter':
        return css`
          display: flex;
          align-items: center;
          gap: 3px;
          height: 34px;
          padding: 6px 12px 4px;
          color: ${isActive === true ? '#3478F6' : '#6D6D6D'};
          font-family: 'AppleSDGothicNeoReguler';
          line-height: 24px;
          border: 1px solid ${isActive === true ? '#82B0F4' : '#C4C4C4'};
          border-radius: 30px;
        `;
      case 'select':
        return css`
          display: flex;
          align-items: center;
          gap: 3px;
          height: 34px;
          padding: 6px 12px 4px;
          color: ${isActive === true ? '#FFF' : '#6D6D6D'};
          font-family: 'AppleSDGothicNeoReguler';
          line-height: 24px;
          border: 1px solid #f2f2f2;
          border-radius: 30px;
          background-color: ${isActive === true ? '#82B0F4' : '#FFF'};
        `;
    }
  }}
`;
