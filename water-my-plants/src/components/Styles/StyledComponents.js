import styled from 'styled-components';

const StyledTextInput = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 0.5em;

  input {
    padding: 5px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: #2ecc71;
  margin: 0.5em;
  padding: 0.5em 1em;
  border-radius: 5px;

  :hover {
    opacity: 80%;
  }
`;

const StyledForm = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    flex-basis: 50%;
    padding: 1.15em;
    box-shadow: 0px 1px 3px #010101;
  }
`;

export { StyledTextInput, StyledButton, StyledForm };
