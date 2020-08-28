import React from 'react';
import { connect } from 'react-redux';

import { addPurchase } from '../../store/actions';
import { isPositiveNumber } from '../../utils/isPositiveNum';

import {
    addPurchaseAction,
    PurchasePayload,
    Expense
} from '../../store/types';

interface AddPurchaseProps {
    expenseItem: Expense,
    addPurchase: (payload: PurchasePayload) => addPurchaseAction,
}

const AddPurchases: React.FC<AddPurchaseProps> = ({ expenseItem, addPurchase }) => {
  let purchaseName: HTMLInputElement | null = null;
  let purchaseValue: HTMLInputElement | null = null;

  const addPurchaseToList = (): void => {
    if ((purchaseName as HTMLInputElement).value.trim() === '' || (purchaseValue as HTMLInputElement).value.trim() === ''
         || !isPositiveNumber((purchaseValue as HTMLInputElement).value)) { return; }

    addPurchase({
        expenseId: expenseItem.id,
        value: Number((purchaseValue as HTMLInputElement).value),
        name: (purchaseName as HTMLInputElement).value,
     });

      (purchaseName as HTMLInputElement).value = '';
      (purchaseValue as HTMLInputElement).value = '';
  };

  return (
    <div className="addPurchase">
      <h3>
        Введите ваши покупки в категории
        &quot;
        {expenseItem.name}
        &quot;.
      </h3>
      <label>
        Покупка:
        <br />
        <input ref={(input) => { purchaseName = input; }} type="text" />
        <br />
      </label>
      <label>
        Сколько потратили:
        <br />
        <input ref={(input) => { purchaseValue = input; }} type="text" />
        <br />
      </label>
      <button type="button" onClick={addPurchaseToList}>Добавить покупку</button>
      <p>
        { expenseItem.isExpensePositive ? ''
          : 'Не хватает средств, чтобы добавить покупку'}
      </p>
    </div>
  );
};

const mapDispatch = {
  addPurchase,
};

const AddPurchasesContainer = connect(null, mapDispatch)(AddPurchases);

export default AddPurchasesContainer;
