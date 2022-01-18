import React from 'react';
import NameTag from './components/NameTag/Nametag';
import Box from './components/Box/Box';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="flex-layout">
        <NameTag name="Gayathri" active empId={1234} depts={["Fin", "Tech"]}/>
        <Box>
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box>
          <h2>Another React component with one child.</h2>
        </Box>
        <Box>
          <h2>A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box>
      </section>
    </div>
  );
}

export default App;
