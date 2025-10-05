import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CartButton } from "@/components/CartButton";
import { useCart } from "@/contexts/CartContext";
import { sendProductWhatsApp } from "@/utils/whatsapp";
import { formatPrice } from "@/utils/formatPrice";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, MessageCircle, ChevronRight, Shield, Zap, Award, Instagram, Facebook, MapPin } from "lucide-react";
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
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-[Montserrat]">
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

  const benefits = [
    { icon: Shield, text: "Produto Original" },
    { icon: Zap, text: "Entrega Rápida" },
    { icon: Award, text: "Melhor Preço" },
  ];

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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-4 md:pb-6">
        <div className="flex items-center gap-2 text-xs md:text-sm font-[Open_Sans] animate-fade-in overflow-x-auto">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <Link to="/produtos" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
            Produtos
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-muted-foreground whitespace-nowrap">{product.category}</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-primary font-semibold truncate">{product.name}</span>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Image */}
            <div className="animate-slide-in-left">
              <div className="aspect-square overflow-hidden rounded-2xl border-4 border-primary shadow-2xl sticky top-24">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 md:space-y-8 animate-slide-in-right">
              {/* Category Badge */}
              <span className="inline-block px-4 py-2 bg-primary text-secondary rounded-full text-xs md:text-sm font-bold font-[Montserrat] uppercase tracking-wider">
                {product.category}
              </span>

              {/* Title & Price */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 md:mb-6 font-[Montserrat] leading-tight">
                  {product.name}
                </h1>
                <p className="text-5xl md:text-6xl font-bold text-primary font-[Montserrat]">
                  {formatPrice(product.price)}
                </p>
              </div>

              {/* Description Card */}
              <Card className="border-2 border-border shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 md:mb-4 font-[Montserrat]">
                    Sobre o Produto
                  </h2>
                  <p className="text-foreground leading-relaxed font-[Open_Sans] text-sm md:text-base">
                    {product.detailedDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Flavor Selector */}
              {product.flavors.length > 0 && (
                <Card className="border-2 border-primary shadow-lg bg-primary/5">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 font-[Montserrat]">
                      Escolha o sabor <span className="text-destructive">*</span>
                    </h2>
                    <Select value={selectedFlavor} onValueChange={setSelectedFlavor}>
                      <SelectTrigger className="w-full border-2 border-primary text-foreground bg-background h-12 md:h-14 text-sm md:text-base font-[Montserrat]">
                        <SelectValue placeholder="Selecione um sabor" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-2 border-primary z-50">
                        {product.flavors.map((flavor) => (
                          <SelectItem 
                            key={flavor} 
                            value={flavor} 
                            className="cursor-pointer hover:bg-primary/10 text-sm md:text-base font-[Open_Sans] py-3"
                          >
                            {flavor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2 font-[Open_Sans]">* Obrigatório</p>
                  </CardContent>
                </Card>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-4">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full bg-primary text-secondary hover:bg-primary/90 font-bold text-base md:text-lg py-6 md:py-7 font-[Montserrat] active:scale-95 transition-all shadow-lg hover:shadow-2xl"
                >
                  <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <Button
                  onClick={handleWhatsAppBuy}
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary/10 font-bold text-base md:text-lg py-6 md:py-7 font-[Montserrat] active:scale-95 transition-all"
                >
                  <MessageCircle className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                  Comprar via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-secondary font-[Montserrat]">
            Por que comprar conosco?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center border-2 hover:border-primary transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-8 md:p-10">
                    <Icon className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-primary" />
                    <p className="text-lg md:text-xl font-semibold font-[Montserrat] text-secondary">{benefit.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-[Montserrat]">
                Natural Físico
              </h3>
              <p className="text-sm md:text-base font-[Open_Sans] leading-relaxed">
                Suplementos de qualidade para sua melhor versão
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 font-[Montserrat]">Nossas Redes</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-primary rounded-full hover:scale-110 transition-all">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </a>
                <a href="#" className="p-3 bg-primary rounded-full hover:scale-110 transition-all">
                  <Facebook className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 font-[Montserrat]">Visite-nos</h4>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm md:text-base font-[Open_Sans]">
                  Unidade Centro<br />
                  Rua Principal, 123
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
            <p className="font-[Open_Sans] text-sm md:text-base">&copy; 2025 Natural Físico Suplementos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProdutoDetalhes;
