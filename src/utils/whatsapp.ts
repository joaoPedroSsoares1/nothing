import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_PREFIX } from "@/config/constants";
import { CartItem } from "@/types/Cart";
import { Product } from "@/types/Product";

export const sendProductWhatsApp = (product: Product, selectedFlavor?: string) => {
  const message = selectedFlavor
    ? `${WHATSAPP_MESSAGE_PREFIX} ${product.name} - Sabor: ${selectedFlavor}`
    : `${WHATSAPP_MESSAGE_PREFIX} ${product.name}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const sendCartWhatsApp = (items: CartItem[]) => {
  let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
  
  items.forEach((item) => {
    const flavorText = item.selectedFlavor ? ` - Sabor: ${item.selectedFlavor}` : '';
    message += `• ${item.name}${flavorText} - Quantidade: ${item.quantity}\n`;
  });
  
  message += "\nAguardo retorno!";
  
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
