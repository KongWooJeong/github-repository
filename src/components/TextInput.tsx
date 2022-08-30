import styled from "styled-components";

const TextInput = styled.input`
  background-color: #f7fafc;
  color: lightgray;
  height: 52px;
  font-weight: 500;
  font-size: 30px;
  border-radius: 1px;
  outline: none;
  border: 0 none;
  border-bottom: 2px solid lightgray;

  :focus {
    border-bottom-color: skyblue;
  }
`;

export default TextInput;
