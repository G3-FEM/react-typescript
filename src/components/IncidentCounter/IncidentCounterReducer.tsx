import { CounterState, CounterAction } from './IncidentCounter';

export const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'SET':
      return { value: action.payload };
    default:
      return state;
  }
};
