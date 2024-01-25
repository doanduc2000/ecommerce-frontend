'use client'
import { ReactNode, createContext, useContext, useReducer } from 'react';

interface Item {
  id: string;
  name: string;
}

interface CartState {
  items: Item[];
}

interface CartContextType {
  cartState: CartState;
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};
const cartReducer = (state: CartState, action: { type: string; payload: Item }): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (item: Item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (item: Item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return <CartContext.Provider value={{ cartState, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};
const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
export { CartProvider, useCart };
