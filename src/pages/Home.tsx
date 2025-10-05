import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Dumbbell, Users, Instagram, Facebook, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartButton } from "@/components/CartButton";
import heroImage from "@/assets/hero-training.jpg";
import wheyImage from "@/assets/whey-protein.jpg";
import creatinaImage from "@/assets/creatina.jpg";
import preTreinoImage from "@/assets/pre-treino.jpg";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [enableTransition, setEnableTransition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableTransition(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    { name: "Whey Protein", image: wheyImage },
    { name: "Creatina", image: creatinaImage },
    { name: "Pré-treino", image: preTreinoImage },
  ];

  const benefits = [
    { icon: Shield, text: "Qualidade comprovada" },
    { icon: Dumbbell, text: "Variedade de suplementos" },
    { icon: Users, text: "Atendimento especializado" },
  ];

  const stores = [
    { name: "Unidade Centro", address: "Rua Principal, 123 - Centro" },
    { name: "Unidade Shopping", address: "Av. Shopping Mall, 456 - Zona Sul" },
    { name: "Unidade Bairro Norte", address: "Rua das Flores, 789 - Zona Norte" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${enableTransition ? 'transition-all duration-300' : ''} ${isScrolled ? 'bg-secondary/95 backdrop-blur-sm border-b border-primary/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-primary font-[Montserrat]">Natural Físico</h1>
          <div className="flex gap-3 md:gap-6 items-center">
            <Link to="/" className="text-primary hover:text-primary/80 transition-colors font-[Montserrat] font-semibold text-sm md:text-base">
              Home
            </Link>
            <Link to="/produtos" className="text-white hover:text-primary transition-colors font-[Montserrat] font-semibold text-sm md:text-base">
              Produtos
            </Link>
            <CartButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 top-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-primary font-[Montserrat] animate-slide-in-left">
            Natural Físico Suplementos
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-white font-[Open_Sans] animate-slide-in-left delay-200">
            Te inspiramos na busca da sua Melhor Versão!
          </p>
          <Link to="/produtos">
            <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-bold text-base md:text-lg px-6 py-4 md:px-8 md:py-6 font-[Montserrat] transition-all hover:scale-105">
              Conheça nossos produtos
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-secondary font-[Montserrat]">
            Destaques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {products.map((product, index) => (
              <Card key={product.name} className="overflow-hidden border-2 border-border hover:border-primary transition-all hover:shadow-2xl duration-500 hover:-translate-y-2 animate-fade-in">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-secondary font-[Montserrat]">{product.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-secondary font-[Montserrat]">
            Sobre Nós
          </h2>
          <p className="text-base md:text-lg text-foreground leading-relaxed font-[Open_Sans]">
            Na Natural Físico Suplementos, acreditamos em saúde, energia e performance. 
            Trabalhamos com suplementos de qualidade para apoiar sua melhor versão.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary font-[Montserrat]">
            Nossos Diferenciais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-10 rounded-lg bg-secondary-foreground/10 backdrop-blur-sm hover:bg-primary/10 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl animate-rotate-in border border-primary/20">
                  <Icon className="w-20 h-20 mx-auto mb-6 text-primary animate-bounce-subtle" />
                  <p className="text-xl font-semibold font-[Montserrat]">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-secondary font-[Montserrat]">
            Siga nossas redes
          </h2>
          <div className="flex justify-center gap-4 md:gap-6">
            <a href="#" className="p-3 md:p-4 bg-primary rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 animate-bounce-subtle">
              <Instagram className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
            </a>
            <a href="#" className="p-3 md:p-4 bg-primary rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 animate-bounce-subtle">
              <Facebook className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
            </a>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-secondary font-[Montserrat]">
            Nossas Unidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {stores.map((store, index) => (
              <Card key={index} className="transition-all duration-500 border-2 hover:border-primary hover:-translate-y-2 shadow-lg hover:shadow-2xl animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 md:p-8">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6" />
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-secondary font-[Montserrat]">{store.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground font-[Open_Sans] leading-relaxed">{store.address}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Home;
