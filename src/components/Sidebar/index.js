import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as BookActions from '../../store/actions/book';

const Sidebar = ({ modules, toggleBook }) => ( 
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleBook(module, lesson)}>Selecionar</button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.book.modules
});

const mapDispatchToProps = dispatch => bindActionCreators(BookActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);