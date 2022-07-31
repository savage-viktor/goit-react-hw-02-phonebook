import styled from '@emotion/styled';

export const Form = styled.form`
  outline: blue;
  display: flex;
  flex-direction: column;
  border: 1px solid #b6b6b6;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  padding: 10px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 5px;
`;

export const Button = styled.button`
  width: 120px;
  padding: 5px;
  background-color: #a5ff9b;
  border-radius: 5px;
  border: 1px solid black;
  :hover {
    background-color: #76ff67;
    cursor: pointer;
  }
`;
