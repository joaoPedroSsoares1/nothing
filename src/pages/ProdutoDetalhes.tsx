import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { CartButton } from "@/components/CartButton";
import { useCart } from "@/contexts/CartContext";
import { sendProductWhatsApp } from "@/utils/whatsapp";
import { formatPrice } from "@/utils/formatPrice";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, MessageCircle, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProdutoDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [selectedFlavor, setSelectedFlavor] = useState<string>("");

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4 font-[Montserrat]">
            Produto não encontrado
          </h1>
          <Button onClick={() => navigate("/produtos")} className="bg-primary text-secondary">
            Voltar para Produtos
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.flavors.length > 0 && !selectedFlavor) {
      toast({
        title: "Sabor obrigatório",
        description: "Por favor, selecione um sabor antes de adicionar ao carrinho.",
        variant: "destructive",
      });
      return;
    }
    
    addItem(product, selectedFlavor || undefined);
    toast({
      title: "Produto adicionado!",
      description: selectedFlavor 
        ? `${product.name} - ${selectedFlavor} foi adicionado ao carrinho.`
        : `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const handleWhatsAppBuy = () => {
    if (product.flavors.length > 0 && !selectedFlavor) {
      toast({
        title: "Sabor obrigatório",
        description: "Por favor, selecione um sabor antes de comprar.",
        variant: "destructive",
      });
      return;
    }
    
    sendProductWhatsApp(product, selectedFlavor || undefined);
  };

  return (
    <div className="h-screen overflow-hidden bg-background flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link to="/">
            <h1 className="text-xl font-bold text-primary font-[Montserrat] hover:text-primary/80 transition-colors">
              Natural Físico
            </h1>
          </Link>
          <div className="flex gap-6 items-center">
            <Link to="/" className="text-white hover:text-primary transition-colors font-[Montserrat] font-semibold">
              Home
            </Link>
            <Link to="/produtos" className="text-primary hover:text-primary/80 transition-colors font-[Montserrat] font-semibold">
              Produtos
            </Link>
            <CartButton />
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-16 pb-3 hidden md:block">
        <div className="flex items-center gap-2 text-sm font-[Open_Sans] animate-fade-in">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <Link to="/produtos" className="text-muted-foreground hover:text-primary transition-colors">
            Produtos
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">{product.category}</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-primary font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="flex-1 flex items-center container mx-auto px-4 overflow-auto md:pt-16 pt-20">
        <div className="grid md:grid-cols-5 gap-6 items-center w-full">
          {/* Image */}
          <div className="md:col-span-3 animate-slide-in-left">
            <div className="aspect-[4/3] max-h-[500px] overflow-hidden rounded-lg border-4 border-primary shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2 space-y-4 animate-slide-in-right">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary text-secondary rounded-full text-xs font-bold font-[Montserrat] mb-3 animate-pulse uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-[Montserrat] leading-tight">
                {product.name}
              </h1>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[Montserrat] animate-pulse-glow">
                {formatPrice(product.price)}
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <h2 className="text-xl font-bold text-secondary mb-2 font-[Montserrat]">
                Descrição
              </h2>
              <p className="text-foreground leading-relaxed font-[Open_Sans] text-sm line-clamp-3">
                {product.detailedDescription}
              </p>
            </div>

            {/* Flavor Selector */}
            {product.flavors.length > 0 && (
              <div className="border-t border-border pt-4 bg-muted/30 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-secondary mb-3 font-[Montserrat]">
                  Escolha o sabor <span className="text-destructive">*</span>
                </h2>
                <Select value={selectedFlavor} onValueChange={setSelectedFlavor}>
                  <SelectTrigger className="w-full border-2 border-primary text-foreground bg-background h-11 text-sm">
                    <SelectValue placeholder="Selecione um sabor" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-2 border-primary z-50">
                    {product.flavors.map((flavor) => (
                      <SelectItem key={flavor} value={flavor} className="cursor-pointer hover:bg-primary/10 text-sm">
                        {flavor}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1.5 font-[Open_Sans]">* Obrigatório</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 border-t border-border pt-4">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-primary text-secondary hover:bg-primary/90 font-bold text-base py-3 font-[Montserrat] active:scale-95 transition-all shadow-lg hover:shadow-2xl"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Adicionar ao Carrinho
              </Button>
              <Button
                onClick={handleWhatsAppBuy}
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary/10 font-bold text-base py-3 font-[Montserrat] active:scale-95 transition-all"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Comprar via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="font-[Open_Sans] text-xs">&copy; 2025 Natural Físico Suplementos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProdutoDetalhes;
