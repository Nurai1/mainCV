import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const ExpensesList = ({ expensesList }) => {
  if (expensesList !== undefined && expensesList.length !== 0) {
    return (
      <ul className="expensesList">
        {expensesList.map((expense, idx) => (
          <li key={idx}>
            <NavLink
              exact
              to={`/${expense.id}`}
            >
              На категорию &quot;
              {expense.name}
              &quot; осталось
              {' '}
              {expense.value}
              {' '}
              рублей.
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }

  return '';
};

const mapStateToProps = (state) => ({
  expensesList: state.expenses,
});

const ExpensesListContainer = connect(
  mapStateToProps,
)(ExpensesList);

export default ExpensesListContainer;
