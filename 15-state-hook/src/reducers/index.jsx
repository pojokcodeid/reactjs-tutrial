import kontakReducer from "./kontak/index";
const initialState = {
  getKontakResult: false,
  getKontakLoading: false,
  getKontakError: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakError: false,

  deleteKontakResult: false,
  deleteKontakLoading: false,
  deleteKontakError: false,

  updateKontakResult: false,
  updateKontakLoading: false,
  updateKontakError: false,

  detailKontakResult: false,
};

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: state[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  kontakReducer,
});

export { initialState, combineReducers, appReducers };
