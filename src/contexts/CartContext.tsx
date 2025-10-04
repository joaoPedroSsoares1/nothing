import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/Product";
import { CartItem, CartContextType } from "@/types/Cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (productName: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== productName));
  };

  const updateQuantity = (productName: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productName);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === productName ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
