import * as actions from '../actions';
import * as types from '../constants';

describe('actions', () => {
  it('should create an action to add general sum', () => {
    const value = 20000;
    const expectedGeneralSum = {
      type: types.ADD_GENERAL_SUM,
      value,
    }
    expect(actions.addGeneralSum(value)).toEqual(expectedGeneralSum);
  });

  it('should create an action to add expense', () => {
    const value = 200;
    const name = 'lunch';
    const expectedExpense = {
      type: types.ADD_EXPENSES,
      value,
      name,
    }
    expect(actions.addExpenses(value, name)).toEqual(expectedExpense);
  });

  it('should create an action to add purchase', () => {
    const expenseId = 1;
    const value = 200;
    const name = 'lunch';
    const expectedPurchase = {
      type: types.ADD_PURCHASE,
      expenseId,
      value,
      name,
    }
    expect(actions.addPurchase(expenseId, value, name)).toEqual(expectedPurchase);
  });
});
