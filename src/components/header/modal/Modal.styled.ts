import styled from 'styled-components';

export const ModalContainer = styled.dialog`
  @media screen and (max-width: 560px) {
    width: 100vw;
  }

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 560px;
  height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
  border: none;
  border-radius: 0 0 30px 30px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 480px;
  padding: 20px;
  border-radius: 16px;
  background-color: #fff;
`;
