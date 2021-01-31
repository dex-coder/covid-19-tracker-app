import React, { useState } from 'react';
import  { InfoPanel } from './components/InfoPanel'
import { Chart } from './components/Chart/Chart'
import Navbar  from './components/Navbar/Navbar'
import FootNav from './components/FootNav'


function App() {
 const screenConfig = useState(0)
  return (
    <div className="App">
      <Navbar />
      <InfoPanel currentScreen={screenConfig[0]}/>
      <FootNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
