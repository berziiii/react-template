import React  from 'react';
import ReactDOM from 'react-dom';
import { Test } from './main.js';

class RenderMain extends React.Component {
    render() {
        let template = <Test title="My Minimal React Webpack Babel Setup" description="Real Description"/>;
        return template;  
    }
};
ReactDOM.render(
  <RenderMain />,
  document.getElementById('app')
);

module.hot.accept();