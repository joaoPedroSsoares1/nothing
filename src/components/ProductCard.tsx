import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/Product";
import { useCart } from "@/contexts/CartContext";
import { sendProductWhatsApp } from "@/utils/whatsapp";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const handleWhatsAppContact = () => {
    sendProductWhatsApp(product);
  };

  return (
    <Card className="overflow-hidden border-2 border-border hover:border-primary transition-all hover:shadow-xl hover:scale-105 duration-300">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <span className="text-sm text-primary font-semibold font-[Montserrat]">
            {product.category}
          </span>
          <h3 className="text-xl font-bold mt-2 mb-2 text-secondary font-[Montserrat]">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 font-[Open_Sans]">
            {product.description}
          </p>
          <div className="flex gap-2">
            <Button 
              onClick={handleAddToCart}
              className="flex-1 bg-primary text-secondary hover:bg-primary/90 font-[Montserrat]"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Adicionar
            </Button>
            <Button 
              variant="outline"
              onClick={handleWhatsAppContact}
              className="border-primary text-primary hover:bg-primary/10 font-[Montserrat]"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
