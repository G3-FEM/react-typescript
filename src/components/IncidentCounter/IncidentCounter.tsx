import { ChangeEvent, useReducer, useState } from 'react';
import { reducer } from './IncidentCounterReducer';
import './IncidentCounter.scss';

// export type CounterAction = {
//   type: 'INCREMENT' | 'DECREMENT' | 'SET';
//   payload?: number;
// };

export type BasicCounterAction = {
  type: 'INCREMENT' | 'DECREMENT';
};

export type SetCounterAction = {
  type: 'SET';
  payload: number;
};

export type CounterAction = BasicCounterAction | SetCounterAction;

export type CounterState = {
  value: number;
};

const initialState = {
  value: 0
};

const IncidentCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState(state.value);

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'SET', payload: 0 });
  const set = (n: number) => dispatch({ type: 'SET', payload: n });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };
  return (
    <main className="incident-counter">
      <h1>Days Since Last Incident</h1>
      <p className="incident-count">{state.value}</p>
      <section className="incident-controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
      <section className="set-controls">
        <p>Set Count</p>
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={() => set(value)}>Submit</button>
      </section>
    </main>
  );
};

export default IncidentCounter;
