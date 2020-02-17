import React from 'react';
import { connect } from 'react-redux';

import { addExpenses } from '../actions';
import { isPositiveNumber } from '../utilities';

const AddExpenses = ({
  generalSum,
  isCurrentSumPositive,
  dispatch,
}) => {
  let expenseName = '';
  let expenseValue = '';

  const addExpenseToList = () => {
    if (expenseName.value.trim() === '' || expenseValue.value.trim() === ''
        || !isPositiveNumber(expenseValue.value)) { return; }

    dispatch(addExpenses(Number(expenseValue.value), expenseName.value));

    expenseName.value = '';
    expenseValue.value = '';
  };

  if (isPositiveNumber(generalSum)) {
    return (
      <div className="addExpense">
        <p className="addExpense__info">
          Введите вид товара, на который вы собираетесь тратить деньги и сколько
          вы планируете на него потратить.
        </p>
        <label>
          Вид товара:
          <br />
          <input ref={(input) => { expenseName = input; }} type="text" />
          <br />
        </label>
        <label>
          Планируемые расходы:
          <br />
          <input ref={(input) => { expenseValue = input; }} type="text" />
          <br />
        </label>
        <button type="button" onClick={addExpenseToList}>Добавить расходы</button>
        <p>
          {isCurrentSumPositive ? ''
            : 'Не хватает средств, чтобы добавить категорию'}
        </p>
      </div>
    );
  }

  return '';
};

const mapStateToProps = (state) => ({
  generalSum: state.generalSum,
  isCurrentSumPositive: state.isCurrentSumPositive,
});

const AddExpensesContainer = connect(
  mapStateToProps,
)(AddExpenses);

export default AddExpensesContainer;
