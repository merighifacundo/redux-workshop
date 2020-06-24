import configureStore from 'redux-mock-store';
import reducer, {transfer, extraction} from './account';

describe('Tests Counter Slice', () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  beforeEach(() => {
    reduxStore.clearActions();
  });



  it('should have an action for transfer', () => {
    const expectedActions = [
      {
        payload: { from: 1, to: 2, amount: 10 },
        type: 'account/transfer',
      },
    ];

    reduxStore.dispatch(transfer({ from: 1, to: 2, amount: 10 }));
    expect(reduxStore.getActions()).toEqual(expectedActions);
  });

  it('transfer reducer', () => {
    const action = transfer({ from: 1, to: 2, amount: 10 });
    const initState = {
      accounts: [{type:'saving', balance: 100, id: 1},
      {type:'checking', balance: 10, id: 2}]
    };
    
    const resultState = reducer( initState, action)
    expect(resultState.accounts.find(item => item.id === 2).balance).toEqual(20);
  });

  it('extraction reducer', () => {
    const action = extraction({ from: 1,  amount: 10 });
    const initState = {
      accounts: [{type:'saving', balance: 100, id: 1},
      {type:'checking', balance: 10, id: 2}]
    };
    
    const resultState = reducer( initState, action)
    expect(resultState.accounts.find(item => item.id === 1).balance).toEqual(90);
  });
});
