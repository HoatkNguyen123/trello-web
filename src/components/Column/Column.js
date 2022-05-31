import React from "react";

import './Column.scss';

import Task from 'components/Task/Task.js';


function Column() {
  return (
    <div className='column'>
      <header>header</header>
      <ul className="task-list">
        <Task />
        <li className="task-item">
          what your's name
        </li>
        <li className="task-item">
          what your's name
        </li>
        <li className="task-item">
          what your's name
        </li>
        <li className="task-item">
          what your's name
        </li>
        <li className="task-item">
          what your's name
        </li>
      </ul>
      <footer>footer</footer>
    </div>
  )
}

export default Column;