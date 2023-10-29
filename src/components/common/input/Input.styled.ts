import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 10px 20px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'AppleSDGothicNeoReguler';
`;

export const InputIcon = styled.label`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
`;
