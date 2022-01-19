import {ChangeEvent, useState} from 'react';
import { fetchDogFacts, DogFactType } from "./DogFactsService";
import './DogFacts.scss';


const DogFacts = () => {

  const [facts, setFacts] = useState<DogFactType[] | null>(null);
  const [numberOfFacts, setNumberOfFacts] = useState(0);

  const handleNumberOfFacts = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberOfFacts(+event.target.value)
  }

    return (
      <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetchDogFacts(numberOfFacts).then((facts) => {
            setFacts(facts);
          })
        }}
      >
        <div className="fact-input">
          <label htmlFor="number-of-facts">Number of Dog Facts</label>
          <input type="number" value={numberOfFacts} min="1" max="10" id="number-of-facts" onChange={handleNumberOfFacts}/>
        </div>
        <input className="dog-fact-input" type="submit" value="Fetch Dog Facts" />
      </form>
        {facts && facts.map((fact) => (
          <Fact fact={fact.fact} />
        ))}
      </div>
    );
  };
  
  const Fact = ({ fact }: { fact: string }) => {
    return (
      <article className="dog-fact">
        <h3>Dog Fact</h3>
        <p>{fact}</p>
      </article>
    );
  };

  export default DogFacts;