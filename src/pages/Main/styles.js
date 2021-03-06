import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
      color: #eb1c29;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SelectOptions = styled.select`
  background: #fff;
  border: 1px solid #eee;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 10px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #eb1c29;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
