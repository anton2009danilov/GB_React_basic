import React from 'react';
import ReactDom from 'react-dom';

const element = <h1 className="element">Мы подключили React, но это не точно</h1>;

// const element = React.createElement(
//     'h1',
//     { className: "element" },
//     'Кажется, мы подключили React',
//  );

ReactDom.render(
    element,
    document.getElementById('root')
);
