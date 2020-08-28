import { ADD_EXPENSES, ADD_PURCHASE, ADD_INITIAL_VALUES, DECREMENT_AMOUNT_OF_DAYS } from './constants';
import {
  addExpenseAction,
  addPurchaseAction,
  addInitialValuesAction,
  decrementAmountOfDaysAction,
  ExpensePayload,
  PurchasePayload,
  initialValuesPayload,
} from './types';

// ACTION CREATORS

export function addExpenses(payload: ExpensePayload): addExpenseAction {
  return { type: ADD_EXPENSES, payload};
}

export function addPurchase(payload: PurchasePayload): addPurchaseAction {
  return {
    type: ADD_PURCHASE,
    payload,
  };
}

export function addInitialValues(payload: initialValuesPayload): addInitialValuesAction {
  return { type: ADD_INITIAL_VALUES, payload };
}

export function decrementAmountOfDays(): decrementAmountOfDaysAction {
  return { type: DECREMENT_AMOUNT_OF_DAYS };
}


