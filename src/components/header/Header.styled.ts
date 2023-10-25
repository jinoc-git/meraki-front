import styled from "styled-components";

export const HeaderContainer = styled.header`
  @media screen and (max-width: 560px) {
    width: 100vw;
    height: 44px;
  }

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 560px;
  height: 44px;
  padding: 0 15px 0 30px;
`

export const TimeParagraph = styled.p`
  font-family: 'SFProTextSemiBold';
  font-size: 15px;
`

export const IconWrapper = styled.div`
  display: flex;
  gap: 4px;
`