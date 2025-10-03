import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Dumbbell, Users, Instagram, Facebook, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-training.jpg";
import wheyImage from "@/assets/whey-protein.jpg";
import creatinaImage from "@/assets/creatina.jpg";
import preTreinoImage from "@/assets/pre-treino.jpg";

const Home = () => {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary font-[Montserrat]">Natural Físico</h1>
          <div className="flex gap-6">
            <Link to="/" className="text-primary hover:text-primary/80 transition-colors font-[Montserrat] font-semibold">
              Home
            </Link>
            <Link to="/produtos" className="text-white hover:text-primary transition-colors font-[Montserrat] font-semibold">
              Produtos
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-left max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary font-[Montserrat] animate-fade-in">
            Natural Físico Suplementos
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-white font-[Open_Sans] animate-fade-in">
            Te inspiramos na busca da sua Melhor Versão!
          </p>
          <Link to="/produtos">
            <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-bold text-lg px-8 py-6 font-[Montserrat] transition-all hover:scale-105">
              Conheça nossos produtos
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary font-[Montserrat]">
            Destaques
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden border-2 border-border hover:border-primary transition-all hover:shadow-xl hover:scale-105 duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-secondary font-[Montserrat]">{product.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary font-[Montserrat]">
            Sobre Nós
          </h2>
          <p className="text-lg text-foreground leading-relaxed font-[Open_Sans]">
            Na Natural Físico Suplementos, acreditamos em saúde, energia e performance. 
            Trabalhamos com suplementos de qualidade para apoiar sua melhor versão.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary font-[Montserrat]">
            Nossos Diferenciais
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-8 rounded-lg bg-secondary-foreground/10 hover:bg-primary/10 transition-all hover:scale-105 duration-300">
                  <Icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <p className="text-xl font-semibold font-[Montserrat]">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-secondary font-[Montserrat]">
            Siga nossas redes
          </h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="p-4 bg-primary rounded-full hover:scale-110 transition-transform duration-300">
              <Instagram className="w-8 h-8 text-secondary" />
            </a>
            <a href="#" className="p-4 bg-primary rounded-full hover:scale-110 transition-transform duration-300">
              <Facebook className="w-8 h-8 text-secondary" />
            </a>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary font-[Montserrat]">
            Nossas Unidades
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 duration-300 border-2 hover:border-primary">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-secondary font-[Montserrat]">{store.name}</h3>
                  <p className="text-muted-foreground font-[Open_Sans]">{store.address}</p>
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
