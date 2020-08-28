import {
    ADD_EXPENSES,
    ADD_PURCHASE,
    ADD_INITIAL_VALUES,
    DECREMENT_AMOUNT_OF_DAYS,
} from './constants';

export interface ExpensePayload {
    value: number;
    name: string;
    everyDayExpenseValue: number | null;
}

export interface PurchasePayload {
    expenseId: number;
    value: number;
    name: string;
}

export interface initialValuesPayload {
    value: number;
    days: number;
}

export type addExpenseAction = {
    type: typeof ADD_EXPENSES;
    payload: ExpensePayload;
}

export interface addPurchaseAction {
    type: typeof ADD_PURCHASE;
    payload: PurchasePayload;
}

export interface addInitialValuesAction {
    type: typeof ADD_INITIAL_VALUES;
    payload: initialValuesPayload;
}

export type decrementAmountOfDaysAction = {
    type: typeof DECREMENT_AMOUNT_OF_DAYS;
}

export type appActionTypes = addExpenseAction | addPurchaseAction | addInitialValuesAction | decrementAmountOfDaysAction

export interface Purchase {
    value: number;
    name: string;
}

export interface Expense {
    id: number;
    value: number;
    name: string;
    isExpensePositive: boolean;
    everyDayExpenseValue: number | null;
    currentDayExpenseValue?: number | null;
    purchases: Purchase[];
}

export interface AppState {
    generalSum: number;
    currentSum: number;
    days: number;
    isCurrentSumPositive: boolean;
    expenses: Expense[];
}