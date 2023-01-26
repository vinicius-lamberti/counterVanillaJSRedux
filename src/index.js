// const Redux = require('react-redux');

const showCountValue = ({ counter }) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue({ counter: 0 });
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = () => {
  // DISPARA A ACTION DE ADICIONAR + 1 AO COUNTER
  store.dispatch({ type: INCREMENTO });
};

const actionDecremento = () => {
  // DISPARA A ACTION DE REMOVER - 1 AO COUNTER
  store.dispatch({ type: DECREMENTO });
};
// ========== REDUCER ==========
const initialState = { counter: 0 };
const reducer = (state = initialState, action) => {
  console.log(action, state);

  switch (action.type) {
    case INCREMENTO:
      const add = state.counter + 1;
      return { counter: add };
    case DECREMENTO:
      const subtract = Number(state.counter) - 1;
      return { counter: subtract };
    default:
      return state;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  console.log("xablau");

  const counter = store.getState();
  showCountValue(counter);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

btnInc.addEventListener("click", actionIncremento);
btnDec.addEventListener("click", actionDecremento);
