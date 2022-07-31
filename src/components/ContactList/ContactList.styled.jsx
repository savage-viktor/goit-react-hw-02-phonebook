import styled from '@emotion/styled';

export const ContactListStyled = styled.ul`
  background-color: white;
  width: 700px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 50%;
  padding: 10px;
  font-weight: 500;

  :hover {
    background-color: #f9faff;
    outline: 1px solid #9bafff;
  }
`;

export const Button = styled.button`
  font-size: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #fd9090;
  }
`;
