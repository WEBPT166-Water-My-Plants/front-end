import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  color: #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-family: 'Merienda', cursive;
    font-size: 80px;
    color: darkorange;
    text-shadow: 0 0 0.1em black;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <h1>
        <Link to="/">Water My Plant</Link>
      </h1>
    </HeaderStyle>
  );
}

export default Header;
