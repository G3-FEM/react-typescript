
import React, { ChangeEvent, Component, EventHandler } from 'react';

type ClassCounterProps = {
  incident: string
}

type ClassCounterState = {
  count: number
}

class ClassCounter extends Component<ClassCounterProps, ClassCounterState> {
  state:ClassCounterState = {
    count: 0
  }

  increment = () => {
    this.setState(({count}) => ({count: count+1}))
  }

  decrement = () => {
    this.setState(({count}) => ({count: count-1}))
  }

  reset = () => {
    this.setState({count : 0})
  }

  changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({count: +event.target.value});
  }

  render() {
    const {incident} = this.props;
    const {count} = this.state;
    return (
      <main className="Counter">
        <h1>Days Since {incident}</h1>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.decrement}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={() => {}}>
            <label htmlFor="set-to">Set Count</label>
            <input id="set-to" type="number" onChange={this.changeCount} value={count}/>
            <input type="submit" />
          </form>
        </section>
      </main>
    );
  }
}

export default ClassCounter;