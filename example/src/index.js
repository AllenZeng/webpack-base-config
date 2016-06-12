import React from 'react';
import { render } from 'react-dom';
import App from './App';

const RootElement = document.createElement('div');
document.body.appendChild(RootElement);

render(<App />, RootElement);
