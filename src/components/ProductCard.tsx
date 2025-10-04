import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/Product";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { formatPrice } from "@/utils/formatPrice";

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

  return (
    <Card className="group overflow-hidden border-2 border-border hover:border-primary transition-all hover:shadow-2xl hover:-translate-y-2 duration-500 will-change-transform">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <span className="text-sm text-primary font-semibold font-[Montserrat] animate-pulse">
            {product.category}
          </span>
          <h3 className="text-xl font-bold mt-2 mb-2 text-secondary font-[Montserrat]">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 font-[Open_Sans]">
            {product.description}
          </p>
          <p className="text-3xl font-bold text-primary mb-4 font-[Montserrat]">
            {formatPrice(product.price)}
          </p>
          <div className="flex gap-2">
            <Link to={`/produto/${product.id}`} className="flex-1">
              <Button 
                className="w-full bg-primary text-secondary hover:bg-primary/90 font-[Montserrat] active:scale-95 transition-transform"
              >
                <Eye className="h-4 w-4 mr-2" />
                Ver Detalhes
              </Button>
            </Link>
            <Button 
              onClick={handleAddToCart}
              className="border-primary text-primary hover:bg-primary/10 font-[Montserrat] active:scale-95 transition-transform"
              variant="outline"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
