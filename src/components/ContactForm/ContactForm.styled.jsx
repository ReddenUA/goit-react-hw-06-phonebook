import styled from '@emotion/styled';

export const Form = styled.form`
  border: 2px solid #000;
  margin: 20px 0;
  padding: 12px;
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  & + & {
    margin-top: 12px;
  }
`;

export const BtnAdd = styled.button`
  margin-top: 12px;
  border-radius: 5px;
  cursor: pointer;
  border:none;
 box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  transition: background-color 250ms linear;
  
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.green};
    
  }
`;
