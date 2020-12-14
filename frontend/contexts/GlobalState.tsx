import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  TermLength: 5,
  Type: 'FIXED',
  HomePrice: 500000,
  DownPayment: 10,
  MortgageAmount: 450000,
  Amortization: 10
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function changeTermLength(length) {
    dispatch({
      type: 'CHANGE_TERM_LENGTH',
      payload: length
    });
  }

  function changeType(type) {
    dispatch({
      type: 'CHANGE_TYPE',
      payload: type
    });
  }

  function changeHomePrice(price) {
      dispatch({
          type: 'CHANGE_PRICE',
          payload: price
      })
  }

  function changeDownPayment(dp) {
    dispatch({
        type: 'CHANGE_DOWN_PAYMENT',
        payload: dp
    })
}
function changeMortgageAmount(amount) {
    dispatch({
        type: 'CHANGE_MORTGAGE_AMOUNT',
        payload: amount
    })
}
function changeAmortization(amortization) {
    dispatch({
        type: 'CHANGE_AMORTIZATION',
        payload: amortization
    })
}

  return (<GlobalContext.Provider value={{
    TermLength: state.TermLength,
    Type: state.Type,
    HomePrice: state.HomePrice,
    DownPayment: state.DownPayment,
    MortgageAmount: state.MortgageAmount,
    Amortization: state.Amortization,
    changeTermLength,
    changeType,
    changeHomePrice,
    changeDownPayment,
    changeMortgageAmount,
    changeAmortization
  }}>
    {children}
  </GlobalContext.Provider>);
}