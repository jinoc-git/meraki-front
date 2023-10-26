import styled from 'styled-components';

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
  border-radius: 30px;
  transform: translate(-50%, 0);
  background-color: #000;
`;
