import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-secondary vh-100 d-flex flex-column">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
