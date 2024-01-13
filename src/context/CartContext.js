import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalPrice = () => {
    const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    return totalPrice.toFixed(2); 
  };

  const totalQuantity = () => {
    const totalQty = cart.reduce((acc, prod) => acc + prod.quantity, 0);
    return totalQty;
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
