import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Topbar from './Topbar';
import AddExpenses from './AddExpenses';
import ExpensesList from './ExpensesList';
import RefreshButton from './RefreshButton';

import { decrementAmountOfDays } from '../store/actions';

import {
  decrementAmountOfDaysAction,
} from '../store/types';

interface AppProps {
  decrementAmountOfDays: () => decrementAmountOfDaysAction,
}

function App({ decrementAmountOfDays }: AppProps): JSX.Element {

  const checkTime = () => {
    if (new Date().getHours()+"" === '05') {
      decrementAmountOfDays();
    }
  }

  useEffect(() => {
    const intervalId = setInterval(checkTime, 3600000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <RefreshButton/>
    <div className="App wrapper">
      <Topbar/>
      <AddExpenses/>
      <ExpensesList/>
    </div>
    </>
  );
}

const mapDispatchToProps = {
  decrementAmountOfDays,
};

const AppContainer = connect(
  null,
  mapDispatchToProps,
)(App);

export default AppContainer;
