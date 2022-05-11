import React from 'react';
import './App.css';
import Form from './containers/form/form';

function App() {
  return (
    <div className="form-wrapper">
      <div>
        <strong> PERSONAL DETAILS</strong>
      </div>
      <Form />
    </div>
  );
}

export default App;