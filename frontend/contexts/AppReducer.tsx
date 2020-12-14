export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_TERM_LENGTH':
      return {
        ...state,
        TermLength: action.payload,
      };
    case 'CHANGE_TYPE':
      return {
        ...state,
        Type: action.payload,
      };
    case 'CHANGE_PRICE':
      return {
        ...state,
        HomePrice: action.payload,
      };
    case 'CHANGE_DOWN_PAYMENT':
      return {
        ...state,
        DownPayment: action.payload,
      };
    case 'CHANGE_MORTGAGE_AMOUNT':
      return {
        ...state,
        MortgageAmount: action.payload,
      };
    case 'CHANGE_AMORTIZATION':
      return {
        ...state,
        Amortization: action.payload,
      };
    default:
      return state;
  }
};
