import reducer from '../reducer';
import * as actions from '../actions';

describe('reducer', () => {
  const initSum = 50000;

  const initStore = {
    generalSum: initSum,
    currentSum: initSum,
    isCurrentSumPositive: true,
    expenses: [],
  };

  const testExpenseVal = 1200;
  const testExpenseName = 'books';

  const expectedStoreAfterAddedExp = {
    generalSum: initSum,
    currentSum: initSum - testExpenseVal,
    isCurrentSumPositive: true,
    expenses: [{
      id: 1,
      value: testExpenseVal,
      name: testExpenseName,
      isExpensePositive: true,
      purchases: [],
    }],
  };

  it('should create an initial store with general sum', () => {
    expect(reducer(
      {},
      actions.addGeneralSum(initSum)
    )).toEqual(initStore);
  });

  it('should create store with expense list', () => {
    expect(reducer(
      initStore,
      actions.addExpenses(testExpenseVal, testExpenseName)
    )).toEqual(expectedStoreAfterAddedExp);
  })

  it('should create store with purchase list in expense item', () => {
    const testId = 1;
    const testPurchaseVal = 500;
    const testPurchaseName = 'Martin Iden';
    const expectedStore = {
      ...expectedStoreAfterAddedExp,
      generalSum: expectedStoreAfterAddedExp.generalSum - testPurchaseVal,
      expenses: expectedStoreAfterAddedExp.expenses.map((exp) => {
        if (testId === exp.id) {
          return {
            ...exp,
            value: exp.value - testPurchaseVal,
            purchases: [{
              value: testPurchaseVal,
              name: testPurchaseName,
            }],
          }
        }
        return exp;
      })
    };
    expect(reducer(
      expectedStoreAfterAddedExp,
      actions.addPurchase(testId, testPurchaseVal, testPurchaseName)
    )).toEqual(expectedStore);
  })
});
