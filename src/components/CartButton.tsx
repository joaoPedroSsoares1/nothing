import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const CartButton = () => {
  const { totalItems } = useCart();
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setShake(true);
      const timer = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return (
    <Link to="/carrinho">
      <Button 
        variant="outline" 
        className={`relative border-primary text-primary hover:bg-primary/10 transition-all hover:scale-110 hover:rotate-6 ${
          shake ? 'animate-bounce-subtle' : ''
        }`}
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-secondary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-bounce">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
};
