import { addPizzasNeededToPizzaData } from "./PizzaCalculator";
import { PizzaState } from "./PizzaCalculatorApp";

export type PizzaAction = {
    type: 'UPDATE_NUMBER_OF_PEOPLE' | 'UPDATE_SLICES_PER_PERSON' | 'UPDATE_SLICES_PER_PIE',
    payload: number
}

export const reducer = (state: PizzaState, action: PizzaAction) => {
    if (action.type === 'UPDATE_NUMBER_OF_PEOPLE') {
      return addPizzasNeededToPizzaData({
        ...state,
        numberOfPeople: action.payload
      });
    }
  
    if (action.type === 'UPDATE_SLICES_PER_PERSON') {
      return addPizzasNeededToPizzaData({
        ...state,
        slicesPerPerson: action.payload
      });
    }
  
    if (action.type === 'UPDATE_SLICES_PER_PIE') {
      return addPizzasNeededToPizzaData({
        ...state,
        slicesPerPie: action.payload
      });
    }
  
    return state;
  };



