import React from 'react';
import { connect } from 'react-redux';

import { addGeneralSum } from '../actions';
import { isPositiveNumber } from '../utilities';

export const Topbar = ({ generalSum, currentSum, dispatch }) => {
  let sumInput = '';

  const getGeneralSum = () => {
    dispatch(addGeneralSum(Number(sumInput.value)));
  };

  if (isPositiveNumber(generalSum)) {
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
      <button type="button" onClick={getGeneralSum}>Начать учет</button>
      <h3 className="topbar__mistake-text">
        {(generalSum === undefined || isPositiveNumber(generalSum))
          ? '' : 'Пожалуйста, введите корректное число.'}
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  generalSum: state.generalSum,
  currentSum: state.currentSum,
});

const TopbarContainer = connect(
  mapStateToProps,
)(Topbar);

export default TopbarContainer;
