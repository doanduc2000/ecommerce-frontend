'use client';
import { Product } from '@/models/product';
import { ReactNode, createContext, useContext, useReducer } from 'react';



interface CartState {
  items: Product[];
}

interface CartContextType {
  cartState: CartState;
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};
const cartReducer = (state: CartState, action: { type: string; payload: Product }): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};
const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (item: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (item: Product) => {
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
