import { useMemo } from "react";
import { Product } from "@/types/Product";

export const useFilteredProducts = (products: Product[], activeFilter: string) => {
  return useMemo(() => {
    if (activeFilter === "Todos") {
      return products;
    }
    return products.filter(product => product.category === activeFilter);
  }, [products, activeFilter]);
};
