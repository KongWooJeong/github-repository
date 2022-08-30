import styled from "styled-components";

const TextInput = styled.input`
  background-color: #f7fafc;
  color: lightgray;
  height: 52px;
  padding: 0 0 8px;
  font-weight: 500;
  font-size: 30px;
  border-radius: 1px;
  caret-color: skyblue;
  outline: none;
  border: 0 none;
  border-bottom: 2px solid lightgray;
  :focus {
    border-bottom-color: skyblue;
  }
  transition: background-color 0.2s ease;
`;

export default TextInput;
