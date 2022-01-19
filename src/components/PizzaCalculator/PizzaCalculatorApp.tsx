import { useReducer } from "react";
import { Calculation } from "./PizzaCalculator";
import Calculator from "./PizzaCalculator";
import { reducer } from "./PizzaCalculatorReducer";

export type PizzaData = {
    numberOfPeople: number;
    slicesPerPerson: number;
    slicesPerPie: number;
  };
  
export type PizzaState = PizzaData & { pizzasNeeded: number };

const initialState: PizzaState = {
    numberOfPeople: 8,
    slicesPerPerson: 2,
    slicesPerPie: 8,
    pizzasNeeded: 2
  };

const PizzaCalculatorApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <main className="calculator">
        <header>
          <h1>Pizza Calculator</h1>
        </header>
        <Calculation count={state.pizzasNeeded} />
        <Calculator state={state} dispatch={dispatch} />
      </main>
    );
  };
  
  export default PizzaCalculatorApp;