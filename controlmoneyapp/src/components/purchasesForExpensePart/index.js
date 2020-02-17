import React from 'react';
import { connect } from 'react-redux';

import AddPurchases from './AddPurchases';
import PurchasesList from './PurchasesList';

const Purchases = ({ expenseItem }) => {
  if (expenseItem === null) {
    return (
      <div className="purchases wrapper">
        Это оповещательное сообщение. Хранилище с данными о покупках не имеет
        информации, чтобы ее показать. Скорее всего, вы обновили страницу или
        перешли на поддомен, введя его в поисковой строке.
        Так как данное приложение не работает с базой данных, для проверки
        логики приложения пожалуйста пользуйтесь кнопками &quot;вернуться на
        предыдущую страницу&quot; в браузере.
      </div>
    );
  }

  return (
    <div className="purchases wrapper">
      <AddPurchases expenseItem={expenseItem} />
      <PurchasesList expenseItem={expenseItem} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  if (state.expenses === undefined) {
    return {
      expenseItem: null,
    };
  }
  return {
    expenseItem: state.expenses.find((item) => item.id === Number(ownProps.match.params.expenseId)),
  };
};

const PurchasesContainer = connect(
  mapStateToProps,
)(Purchases);

export default PurchasesContainer;
