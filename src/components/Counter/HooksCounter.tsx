import * as React from 'react';

type HooksCounterProps = {
    incident: string;
}
const HooksCounter = (props: HooksCounterProps) => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1)
    }

    const reset = () => {
        setCount(0)
    }

    const changeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(+event.target.value);
    }
    return (
      <main className="Counter">
        <h1>Days Since {props.incident}</h1>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={reset}>Reset</button>
          <button onClick={decrement}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={() => {}}>
            <label htmlFor="set-to">Set Count</label>
            <input id="set-to" type="number" onChange={changeCount} value={count}/>
            <input type="submit" />
          </form>
        </section>
      </main>
    );
  };

  export default HooksCounter;