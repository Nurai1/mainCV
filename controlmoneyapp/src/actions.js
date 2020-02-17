import { ADD_EXPENSES, ADD_PURCHASE, ADD_GENERAL_SUM } from './constants';

// ACTION CREATORS

export function addExpenses(value, name) {
  return { type: ADD_EXPENSES, value, name };
}

export function addPurchase(expenseId, value, name) {
  return {
    type: ADD_PURCHASE, expenseId, value, name,
  };
}

export function addGeneralSum(value) {
  return { type: ADD_GENERAL_SUM, value };
}
