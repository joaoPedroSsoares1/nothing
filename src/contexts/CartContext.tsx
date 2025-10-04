import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/Product";
import { CartItem, CartContextType } from "@/types/Cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, selectedFlavor?: string) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.name === product.name && item.selectedFlavor === selectedFlavor
      );
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name && item.selectedFlavor === selectedFlavor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1, selectedFlavor }];
    });
  };

  const removeItem = (productName: string, selectedFlavor?: string) => {
    setItems((prevItems) => 
      prevItems.filter((item) => 
        selectedFlavor !== undefined
          ? !(item.name === productName && item.selectedFlavor === selectedFlavor)
          : item.name !== productName
      )
    );
  };

  const updateQuantity = (productName: string, quantity: number, selectedFlavor?: string) => {
    if (quantity <= 0) {
      removeItem(productName, selectedFlavor);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        selectedFlavor !== undefined
          ? (item.name === productName && item.selectedFlavor === selectedFlavor ? { ...item, quantity } : item)
          : (item.name === productName ? { ...item, quantity } : item)
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
