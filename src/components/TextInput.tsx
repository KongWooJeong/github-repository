import styled from "styled-components";

const TextInput = styled.input`
  height: 52px;
  border: 0 none;
  border-bottom: 2px solid #d3d3d3;
  border-radius: 1px;
  font-size: 30px;
  font-weight: 500;
  outline: none;
  color: #d3d3d3;
  background-color: #f7fafc;

  :focus {
    border-bottom-color: #87ceeb;
  }
`;

export default TextInput;
