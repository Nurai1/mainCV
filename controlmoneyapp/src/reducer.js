import {
  ADD_EXPENSES,
  ADD_PURCHASE,
  ADD_GENERAL_SUM,
} from './constants';

let idCounter = 0;
let thisExpense;

const controlMoneyApp = (state = {}, action) => {
  switch (action.type) {
    case ADD_GENERAL_SUM:
      return {
        generalSum: action.value,
        currentSum: action.value,
        isCurrentSumPositive: true,
        expenses: [],
      };
    case ADD_EXPENSES:
      if (state.currentSum - action.value < 0) {
        return { ...state, isCurrentSumPositive: false };
      }

      return {
        ...state,
        isCurrentSumPositive: true,
        currentSum: state.currentSum - action.value,
        expenses: [
          ...state.expenses,
          {
            id: ++idCounter,
            value: action.value,
            name: action.name,
            isExpensePositive: true,
            purchases: [],
          },
        ],
      };
    case ADD_PURCHASE:
      return {
        ...state,
        expenses: state.expenses.map((expense) => {
          if (action.expenseId === expense.id) {
            if (expense.value - action.value < 0) {
              thisExpense = { ...expense, isExpensePositive: false };
              return thisExpense;
            }

            thisExpense = {
              ...expense,
              value: expense.value - action.value,
              isExpensePositive: true,
              purchases: [
                ...expense.purchases,
                {
                  value: action.value,
                  name: action.name,
                },
              ],
            };

            return thisExpense;
          }
          return expense;
        }),
        generalSum: thisExpense.isExpensePositive
          ? (state.generalSum - action.value) : state.generalSum,
      };
    default:
      return state;
  }
};

export default controlMoneyApp;
