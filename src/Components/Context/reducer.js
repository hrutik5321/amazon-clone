//data layer logic

export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Id is not in basket");
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;