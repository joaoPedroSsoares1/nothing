import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

export const CartButton = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/carrinho">
      <Button variant="outline" className="relative border-primary text-primary hover:bg-primary/10">
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-secondary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
};
