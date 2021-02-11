import React, { Component } from 'react';

import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>Livro "{activeModule.title}"</strong>
    <br/>
    <span>{activeLesson.title}</span>
  </div>
);

export default connect(state => ({
  activeLesson: state.book.activeLesson,
  activeModule: state.book.activeModule,
}))(Video);