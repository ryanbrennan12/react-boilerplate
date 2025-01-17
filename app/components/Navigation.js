import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//I know, very basic:-(
const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

export default () => (
   <NavigationBar>
    <Link className="btn btn-primary" to="/">
      Home/List 🏡
    </Link>
    <Link className="btn btn-secondary" to="/new-item">
      + Add New Thing 🚀
    </Link>
    </NavigationBar>
);

