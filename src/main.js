// import React from 'react';
// import ReactDom from 'react-dom';
//
// let divElement = React.createElement(
//   'div',
//   null,
//   React.createElement(
//     'h1',
//     { id: 'special-header', className: 'header', onClick: event => alert('Heyo') },
//     'React element right here!'
//   ),
//   React.createElement(
//     'ul',
//     null,
//     React.createElement(
//       'li',
//       null,
//       'eat'
//     ),
//     React.createElement(
//       'li',
//       null,
//       'sleep'
//     ),
//   )
// );
//
// ReactDom.render(
//   divElement,
//   document.getElementById('app')
// );

import React from 'react';
import ReactDOM from 'react-dom';

let divElement = <div>
<h1 id="special-header" className="header" onClick={event => alert('Waazzapp!')}>
I am a React element
  </h1>
  <ul>
    <li>eat</li>
    <li>sleep</li>
  </ul>
</div>;

ReactDOM.render(
  divElement,
  document.getElementById('app')
);
