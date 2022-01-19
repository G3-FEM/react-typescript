import * as React from 'react';
import NameTag from './components/NameTag/Nametag';
import Box from './components/Box/Box';
import Question from './components/Question/Question';
import {questions} from './components/Question/Questions';
import { CharacterType, fetchCharacter } from './components/CharacterCard/characters';
import { Loading } from './components/CharacterCard/Loading';
import { CharacterInformation } from './components/CharacterCard/CharacterInformation';
import Counter from './components/Counter/Counter';
import ClassCounter from './components/Counter/ClassCounter';
import HooksCounter from './components/Counter/HooksCounter';
import './App.scss';
import DogFacts from './components/DogFacts/DogFacts';

function App() {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchCharacter().then(c => {
      setCharacter(c);
      setIsLoading(false);
    });
  }, [])
  return (
    <div className="App">
      <section className="flex-layout">
        <section className="flex-item">
        <NameTag name="Gayathri" active empId={1234} depts={["Fin", "Tech"]}/>
        </section>
        <section  className="flex-item">
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
      </section>
      <section  className="flex-item">
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
      </section>
      <section  className="flex-item">
        {isLoading && <Loading />}
        {character && <CharacterInformation character={character} /> } 
      </section>
      <section  className="flex-item">
        <Counter />
      </section>
      <section  className="flex-item">
        <ClassCounter incident='Spill Milk'/>
      </section>
      <section  className="flex-item">
        <HooksCounter incident="Wet flooring"/>
      </section>
      <section  className="flex-item">
        <DogFacts/>
      </section>
      </section>
    </div>
  );
}

export default App;
