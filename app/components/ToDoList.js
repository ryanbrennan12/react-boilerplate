import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ToDo from './ToDo';
import styled from 'styled-components';

const ToDoList = ({ toDoList }) => (
  <Jumbotron>
    <ListGroup>
      {toDoList.map((toDo, index) => (
        <ToDo key={index} {...toDo} />
      ))}
    </ListGroup>
  </Jumbotron>
);

export default ToDoList;
