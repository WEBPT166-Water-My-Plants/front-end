import styled from 'styled-components';

const StyledTextInput = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 0.5em;

  input,
  select {
    padding: 5px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    border-radius: 5px;
    border: 1px solid rgb(0, 0, 0);
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: #227744;
  margin: 0.5em;
  padding: 0.5em 1em;
  border: 2px solid black;
  border-radius: 5px;
  color: white;
  font-size: 25px;
  max-width: 100%;

  :hover {
    opacity: 80%;
  }
`;

const StyledForm = styled.div`
  width: 100%;
  form {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 1.15em;
    box-shadow: 0px 0px 5px 5px #010101aa;
    background-color: white;
    border-radius: 10px;
    width: 30%;
    margin: 0 35% 0 35%;
    background: rgba(255, 165, 0, 0.73);
    color: white;
    font-family: 'Merienda', cursive;
    text-shadow: 3px 3px 5px black;
  }

  img {
    width: 250px;
    border-radius: 50%;
  }
`;

const HeaderText = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  text-align: center;
  padding: 2rem;
  :hover {
    color: #90ee90;
  }
`;

export { StyledTextInput, StyledButton, StyledForm };
