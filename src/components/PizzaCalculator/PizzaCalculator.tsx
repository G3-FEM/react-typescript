import { PizzaData, PizzaState } from "./PizzaCalculatorApp";
import { PizzaAction } from "./PizzaCalculatorReducer";

export const addPizzasNeededToPizzaData = (data: PizzaData): PizzaState => {
    return { ...data, pizzasNeeded: calculatePizzasNeeded(data) };
  };

export const calculatePizzasNeeded = ({
    numberOfPeople,
    slicesPerPerson,
    slicesPerPie
  }: PizzaData): number => {
    return Math.ceil((numberOfPeople * slicesPerPerson) / slicesPerPie);
  };

  export const Calculation = ({ count }: { count: number }) => {
    return (
      <section className="calculation">
        <p className="count">{count}</p>
        <p className="caption">Pizzas Needed</p>
      </section>
    );
  };
  
  const Calculator = ({ dispatch, state }: { state: PizzaState; dispatch: React.Dispatch<PizzaAction> }) => {
    return (
      <form onSubmit={() => {}}>
        <label htmlFor="number-of-people">Number of People</label>
        <input
          id="number-of-people"
          type="number"
          value={state.numberOfPeople}
          onChange={(event) =>
            dispatch({
              type: 'UPDATE_NUMBER_OF_PEOPLE',
              payload: +event.target.value
            })
          }
        />
        <label htmlFor="slices-per-person">Slices Per Person</label>
        <input
          id="slices-per-person"
          type="number"
          value={state.slicesPerPerson}
          onChange={(event) =>
            dispatch({
              type: 'UPDATE_SLICES_PER_PERSON',
              payload: +event.target.value
            })
          }
        />
        <label htmlFor="slices-per-Pie">Slices Per Pie</label>
        <input
          id="slices-per-Pie"
          type="number"
          value={state.slicesPerPie}
          onChange={(event) =>
            dispatch({
              type: 'UPDATE_SLICES_PER_PIE',
              payload: +event.target.value
            })
          }
        />
      </form>
    );
  };

  export default Calculator;