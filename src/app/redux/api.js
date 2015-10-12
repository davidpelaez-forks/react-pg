const initialDemoState = {
  accounts: {
    a: {
      name: "Alfa",
      transactions: [
        {amount: -100, description: 'debit'},
        {amount: 500, description: 'credit'}
      ]
    },
    b: {
      name: "Beta",
      transactions: [
        {amount: -100, description: 'debit'},
        {amount: -800, description: 'debit'}
      ]
    },
    c: {
      name: "Gamma",
      transactions: [
        {amount: 1000, description: 'credit'},
        {amount: 1060, description: 'credit'}
      ]
    }
  },
  currentAccount: 'c'
};

export function loadAccounts(){
  function loadFunction (resolve,reject){
    setTimeout(()=>{
      resolve(initialDemoState);
    },10);
  }
  return new Promise(loadFunction);
}