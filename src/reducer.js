export const initialState = {
  basket: [
    {
      id: '12345',
      title: "Oh, the Places You'll Go!",
      price: 18.99,
      rating: 5.0,
      image: 'https://images-na.ssl-images-amazon.com/images/I/81YsKZ7EuWL.jpg',
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      // we cloned the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id})`);
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
