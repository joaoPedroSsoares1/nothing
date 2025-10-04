import { Product } from "./Product";

export interface CartItem extends Product {
  quantity: number;
  selectedFlavor?: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, selectedFlavor?: string) => void;
  removeItem: (productName: string, selectedFlavor?: string) => void;
  updateQuantity: (productName: string, quantity: number, selectedFlavor?: string) => void;
  clearCart: () => void;
  totalItems: number;
}
