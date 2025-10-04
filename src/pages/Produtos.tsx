import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import { ProductCard } from "@/components/ProductCard";

const Produtos = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filteredProducts = useFilteredProducts(products, activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <h1 className="text-2xl font-bold text-primary font-[Montserrat] hover:text-primary/80 transition-colors">
              Natural Físico
            </h1>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-white hover:text-primary transition-colors font-[Montserrat] font-semibold">
              Home
            </Link>
            <Link to="/produtos" className="text-primary hover:text-primary/80 transition-colors font-[Montserrat] font-semibold">
              Produtos
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-primary font-[Montserrat]">
            Nossa Vitrine de Suplementos
          </h1>
          <p className="text-xl text-muted-foreground font-[Open_Sans]">
            Encontre o suplemento ideal para seus objetivos
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`font-[Montserrat] transition-all ${
                  activeFilter === filter 
                    ? "bg-primary text-secondary hover:bg-primary/90" 
                    : "border-primary text-primary hover:bg-primary/10"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground font-[Open_Sans]">
                Nenhum produto encontrado nesta categoria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-primary font-[Montserrat]">
            Visite nossas lojas
          </h2>
          <p className="text-xl mb-8 text-white font-[Open_Sans]">
            Consulte disponibilidade em nossas unidades
          </p>
          <Link to="/">
            <Button 
              size="lg" 
              className="bg-primary text-secondary hover:bg-primary/90 font-bold text-lg px-8 py-6 font-[Montserrat] transition-all hover:scale-105"
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
