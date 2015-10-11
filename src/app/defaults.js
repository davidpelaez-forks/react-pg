export const initialDefaultState = {
  currentAccount: undefined,
  accounts: []
};

export const initialDemoState = {
  accounts: {
    a: {
      transactions: [
        {amount: -100, description: 'debit'},
        {amount: 500, description: 'credit'}
      ]
    },
    b: {
      transactions: [
        {amount: -100, description: 'debit'},
        {amount: -800, description: 'debit'}
      ]
    },
    c: {
      transactions: [
        {amount: 1000, description: 'credit'},
        {amount: 1060, description: 'credit'}
      ]
    }
  },
  currentAccount: 'c'
};