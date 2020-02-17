import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ExpensesList } from '../../components/ExpensesList';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const expensesList = [{
  id: 1,
  value: 2000,
  name: 'food',
  purchases: [],
}];

it('renders expenses list', () => {
  act(() => {
    render(<ExpensesList />, container);
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();

  act(() => {
    render(<Router><ExpensesList expensesList={expensesList} /></Router>, container);
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
