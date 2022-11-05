import MyButton from './MyButton';
import MyList from './MyList';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App, { MyComponent } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// render(appState);

// setTimeout(() => {
//   appState.disabled = false;
//   appState.items.push("Fourth");
  
//   render(appState);
// }, 1000);