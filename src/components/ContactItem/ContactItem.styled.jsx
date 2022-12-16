import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 5px;
  margin-left: 10px;
  display: inline-block;
  margin-left: auto;
  border-radius: 5px;
  cursor: pointer;

 box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  transition: background-color 250ms linear;
  
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.red};
    
  }
 
`;
