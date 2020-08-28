import {
  ADD_EXPENSES,
  ADD_PURCHASE,
  ADD_INITIAL_VALUES,
  DECREMENT_AMOUNT_OF_DAYS,
} from './constants';

import {
  appActionTypes,
  AppState,
  Expense,
} from './types';

let idCounter: number = 0;
let thisExpense: Expense;

export const initialState: AppState = {
  generalSum: 0,
  currentSum: 0,
  days: 0,
  isCurrentSumPositive: true,
  expenses: [],
};

const controlMoneyApp = (state: AppState = initialState, action: appActionTypes) => {
  switch (action.type) {
    case ADD_INITIAL_VALUES:
      return {
        generalSum: action.payload.value,
        currentSum: action.payload.value,
        days: action.payload.days,
        isCurrentSumPositive: true,
        expenses: [],
      };
    case ADD_EXPENSES:
      if (state.currentSum - action.payload.value < 0) {
        return { ...state, isCurrentSumPositive: false };
      }

      return {
        ...state,
        isCurrentSumPositive: true,
        currentSum: state.currentSum - action.payload.value,
        expenses: [
          ...state.expenses,
          {
            id: ++idCounter,
            value: action.payload.value,
            name: action.payload.name,
            everyDayExpenseValue: action.payload.everyDayExpenseValue,
            currentDayExpenseValue: action.payload.everyDayExpenseValue,
            isExpensePositive: true,
            purchases: [],
          },
        ],
      };
    case ADD_PURCHASE:
      return {
        ...state,
        expenses: state.expenses.map((expense) => {
          if (action.payload.expenseId === expense.id) {
            if (expense.value - action.payload.value < 0) {
              thisExpense = { ...expense, isExpensePositive: false };
              return thisExpense;
            }

            thisExpense = {
              ...expense,
              value: expense.value - action.payload.value,
              isExpensePositive: true,
              currentDayExpenseValue: expense.currentDayExpenseValue ? expense.currentDayExpenseValue - action.payload.value : null,
              purchases: [
                ...expense.purchases,
                {
                  value: action.payload.value,
                  name: action.payload.name,
                },
              ],
            };

            return thisExpense;
          }
          return expense;
        }),
        generalSum: thisExpense.isExpensePositive
          ? (state.generalSum - action.payload.value) : state.generalSum,
      };
    case DECREMENT_AMOUNT_OF_DAYS:
      return {
        ...state,
        days: state.days - 1,
        expenses: state.expenses.map((expense) => {
          if (expense.everyDayExpenseValue && expense.currentDayExpenseValue) {
            return {
              ...expense,
              currentDayExpenseValue: expense.currentDayExpenseValue + expense.everyDayExpenseValue,
            };
          }
          return expense;
        }),
      };
    default:
      return state;
  }
};

export default controlMoneyApp;
