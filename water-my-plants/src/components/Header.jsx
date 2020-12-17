import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  color: #000;
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
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
