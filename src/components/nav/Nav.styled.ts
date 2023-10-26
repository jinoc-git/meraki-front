import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

interface NavLinkProps {
  color: string;
}

export const NavContainer = styled.nav`
  @media screen and (max-width: 560px) {
    width: 100vw;
    left: 0;
    transform: translate(0, 0);
  }

  position: fixed;
  bottom: 0;
  left: 50%;
  width: 560px;
  height: 85px;
  padding: 20px 85px;
  border-radius: 30px;
  transform: translate(-50%, 0);
  background-color: #000;
`;

export const NavBtnWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled(Link)<NavLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  font-family: 'AppleSDGothicNeoSemiBold';
  font-size: 10px;
  letter-spacing: 0;
  text-decoration: none;
  color: ${({ color }) => {
    return css`
      ${color}
    `;
  }};
`;
