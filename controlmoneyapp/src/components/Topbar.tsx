import React from 'react';
import { connect } from 'react-redux';

import { addInitialValues } from '../store/actions';
import { isPositiveNumber } from '../utils/isPositiveNum';

import {
  addInitialValuesAction,
  initialValuesPayload,
  AppState
} from '../store/types';

interface TopbarProps {
    generalSum: number;
    currentSum: number;
    days: number;
    addInitialValues: (payload: initialValuesPayload) => addInitialValuesAction;
}

export const Topbar: React.FC<TopbarProps> = ({ generalSum, currentSum, days, addInitialValues }) => {
  let sumInput: HTMLInputElement | null = null;
  let daysInput: HTMLInputElement | null = null;

  const getGeneralSum = () => {
    addInitialValues({value: Number((sumInput as HTMLInputElement).value), days: Number((daysInput as HTMLInputElement).value)});
  };

  if (isPositiveNumber(generalSum) && isPositiveNumber(days)) {
    return (
      <div className="topbar">
        <h2 className="topbar__title">Добро пожаловать в Control Money App.</h2>
        <div className="topbar__counters">
          <p className="topbar__counter">
            Ваша общая сумма в наличии
            <p>(в рублях):</p>
            <span className="num-count">{generalSum}</span>
          </p>
          <p className="topbar__counter">
            Ваша сумма в остатке после вычета категорий
            <p>(в рублях):</p>
            <span className="num-count">{currentSum}</span>
          </p>
          <p className="topbar__counter">
            Осталось <span className="num-count">{days}</span> дней
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="topbar">
      <h2 className="topbar__title">Добро пожаловать в Control Money App.</h2>
      <label>
        Введите сумму, которой вы распологаете.
        <br />
        <input ref={(input) => { sumInput = input; }} type="text" />
        <br />
      </label>
      <label>
        Введите на сколько дней у вас данная сумма.
        <br />
        <input ref={(input) => { daysInput = input; }} type="text" />
        <br />
      </label>
      <button type="button" onClick={getGeneralSum}>Начать учет</button>
      <h3 className="topbar__mistake-text">
        {(generalSum === undefined || isPositiveNumber(generalSum))
          ? '' : 'Пожалуйста, введите корректное число.'}
      </h3>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  generalSum: state.generalSum,
  currentSum: state.currentSum,
  days: state.days,
});

const mapDispatchToProps = {
  addInitialValues
};

const TopbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Topbar);

export default TopbarContainer;
