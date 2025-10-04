import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
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
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary hover:text-secondary font-[Montserrat]"
          >
            Consulte disponibilidade
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
