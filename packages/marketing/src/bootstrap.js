import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';

const mount = (el) => {
    ReactDOM.render(<Application />,el );
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot) {
        mount(devRoot);
    }
}

export { mount };