import React from 'react';
import NameTag from './components/NameTag/Nametag';
import Box from './components/Box/Box';
import Question from './components/Question/Question';
import {questions} from './components/Question/Questions';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="flex-layout">
        <NameTag name="Gayathri" active empId={1234} depts={["Fin", "Tech"]}/>
        <Box style={{color: 'green'}}>
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box style={{backgroundColor: '#ccc'}}>
          <h2>Another React component with one child.</h2>
        </Box>
        <Box>
          <h2>A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box>
      <section>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    
      </section>
      </section>
    </div>
  );
}

export default App;
