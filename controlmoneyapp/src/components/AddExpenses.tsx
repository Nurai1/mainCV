import React from 'react';
import { connect } from 'react-redux';

import { addExpenses } from '../store/actions';
import { isPositiveNumber } from '../utils/isPositiveNum';

import {
    AppState,
    addExpenseAction,
    ExpensePayload
} from '../store/types';

interface AddExpensesProps {
  generalSum: number,
  isCurrentSumPositive: boolean,
  days: number,
  addExpenses: (payload: ExpensePayload) => addExpenseAction,
}

const AddExpenses: React.FC<AddExpensesProps> = ({
  generalSum,
  isCurrentSumPositive,
  days,
  addExpenses,
}) => {
  let expenseName: HTMLInputElement | null = null;
  let expenseValue: HTMLInputElement | null = null;
  let everyDayExpenseValue: HTMLInputElement | null = null;

  const addExpenseToList = () => {
    console.dir((everyDayExpenseValue as HTMLInputElement))
    if ((expenseName as HTMLInputElement).value.trim() === '' || (expenseValue as HTMLInputElement).value.trim() === ''
        || !isPositiveNumber((expenseValue as HTMLInputElement).value)) { return; }
    addExpenses({
      value: Number((expenseValue as HTMLInputElement).value),
      name: (expenseName as HTMLInputElement).value,
      everyDayExpenseValue: ((everyDayExpenseValue as HTMLInputElement).checked ? Number((expenseValue as HTMLInputElement).value)/days : null),
    });

      (expenseName as HTMLInputElement).value = '';
      (expenseValue as HTMLInputElement).value = '';
  };

  if (isPositiveNumber(generalSum) && isPositiveNumber(days)) {
    return (
      <div className="addExpense">
        <p className="addExpense__info">
          Введите вид товара, на который вы собираетесь тратить деньги и сколько
          вы планируете на него потратить.
        </p>
        <div className="addExpense__fields-wrapper">
          <label className="addExpense__field">
            <span className="addExpense__field__title">Вид товара:</span>
            <input ref={(input) => { expenseName = input; }} type="text" />
          </label>
          <label className="addExpense__field">
            <span className="addExpense__field__title">Планируемые расходы:</span>
            <input ref={(input) => { expenseValue = input; }} type="text" />
          </label>
          <label className="addExpense__field">
            <span className="addExpense__field__title">Каждодневная трата:</span>
            <input ref={(input) => { everyDayExpenseValue = input; }} type="checkbox" />
          </label>
        </div>
        <button className="addExpense__btn" type="button" onClick={addExpenseToList}>Добавить расходы</button>
        <p>
          {isCurrentSumPositive ? ''
            : 'Не хватает средств, чтобы добавить категорию'}
        </p>
      </div>
    );
  }

  return null;
};

const mapStateToProps = (state: AppState) => ({
  generalSum: state.generalSum,
  isCurrentSumPositive: state.isCurrentSumPositive,
  days: state.days
});

const mapDispatchToProps = {
    addExpenses
};

const AddExpensesContainer = connect(
  mapStateToProps,
    mapDispatchToProps
)(AddExpenses);

export default AddExpensesContainer;
