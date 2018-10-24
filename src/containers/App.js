import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './Navbar';

const App = () => (
  <Router>
    <div className="onboarding">
      <Navbar />
    </div>
  </Router>
)

export default App;
