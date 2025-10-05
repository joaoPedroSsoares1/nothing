import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import { ProductCard } from "@/components/ProductCard";
import { CartButton } from "@/components/CartButton";

const Produtos = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filteredProducts = useFilteredProducts(products, activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <Link to="/">
            <h1 className="text-xl md:text-2xl font-bold text-primary font-[Montserrat] hover:text-primary/80 transition-colors">
              Natural Físico
            </h1>
          </Link>
          <div className="flex gap-3 md:gap-6 items-center">
            <Link to="/" className="text-white hover:text-primary transition-colors font-[Montserrat] font-semibold text-sm md:text-base">
              Home
            </Link>
            <Link to="/produtos" className="text-primary hover:text-primary/80 transition-colors font-[Montserrat] font-semibold text-sm md:text-base">
              Produtos
            </Link>
            <CartButton />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary font-[Montserrat] animate-slide-in-down">
            Nossa Vitrine de Suplementos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-[Open_Sans] animate-slide-in-down delay-100">
            Encontre o suplemento ideal para seus objetivos
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 md:py-8 bg-background top-20 z-40 border-b-2 border-border backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`font-[Montserrat] transition-all duration-300 active:scale-95 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base ${
                  activeFilter === filter 
                    ? "bg-primary text-secondary hover:bg-primary/90 scale-105 border-4 border-primary shadow-lg" 
                    : "border-2 border-primary text-primary hover:bg-primary/10"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
            {filteredProducts.map((product, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 md:py-24">
              <p className="text-xl md:text-2xl text-muted-foreground font-[Open_Sans]">
                Nenhum produto encontrado nesta categoria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-primary font-[Montserrat]">
            Visite nossas lojas
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-white font-[Open_Sans]">
            Consulte disponibilidade em nossas unidades
          </p>
          <Link to="/">
            <Button 
              size="lg" 
              className="bg-primary text-secondary hover:bg-primary/90 font-bold text-base md:text-lg px-6 py-4 md:px-8 md:py-6 font-[Montserrat] transition-all hover:scale-105"
            >
              Ver Unidades
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-[Open_Sans]">&copy; 2025 Natural Físico Suplementos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Produtos;
