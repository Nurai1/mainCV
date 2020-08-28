import React from 'react';
import { connect } from 'react-redux';

import { Expense, AppState } from '../../store/types';

type PurchasesListProps = {
    expenseItem: Expense,
    days: number,
};

const PurchasesList: React.FC<PurchasesListProps> = ({ expenseItem, days }) => (
  <div className="purchasesList">
    {expenseItem.everyDayExpenseValue ?
      <div>
      <p className="purchasesList__info">
        На {days} дней осталось
        {' '}
        {expenseItem.value}
        {' '}
        рублей.
      </p>
      <p className="purchasesList__info">
        На сегодня выделено
        {' '}
        {expenseItem.currentDayExpenseValue}
        {' '}
        рублей.
      </p>
      </div>
      :
      <p className="purchasesList__info">
        На категорию &quot;
        {expenseItem.name}
        &quot; осталось
        {' '}
        {expenseItem.value}
        {' '}
        рублей.
      </p>
    }
    <table className="purchasesList__table">
      <tr>
        <th>Название продукта</th>
        <th>Цена</th>
      </tr>
      {expenseItem.purchases.map((purchase) => (
        <tr>
          <td>{purchase.name}</td>
          <td>{purchase.value}</td>
        </tr>
      ))}
    </table>
  </div>
);

const mapState = (state: AppState) => ({
  days: state.days,
})

const PurchasesListContainer = connect(mapState)(PurchasesList)

export default PurchasesListContainer;
