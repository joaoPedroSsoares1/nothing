import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { sendCartWhatsApp } from "@/utils/whatsapp";
import { Minus, Plus, Trash2, ShoppingBag, Coffee } from "lucide-react";
import { CartButton } from "@/components/CartButton";

const Carrinho = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCart();

  const handleSendOrder = () => {
    if (items.length === 0) return;
    sendCartWhatsApp(items);
  };

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
          <div className="flex gap-6 items-center">
            <Link to="/" className="text-white hover:text-primary transition-colors font-[Montserrat] font-semibold">
              Home
            </Link>
            <Link to="/produtos" className="text-white hover:text-primary transition-colors font-[Montserrat] font-semibold">
              Produtos
            </Link>
            <CartButton />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-primary font-[Montserrat]">
            Meu Carrinho
          </h1>
          <p className="text-xl text-muted-foreground font-[Open_Sans]">
            Revise seus produtos e finalize o pedido
          </p>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-secondary font-[Montserrat]">
                Seu carrinho está vazio
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-[Open_Sans]">
                Adicione produtos para começar seu pedido
              </p>
              <Link to="/produtos">
                <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-[Montserrat]">
                  Ver Produtos
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {items.map((item, index) => (
                  <Card key={`${item.name}-${item.selectedFlavor || 'default'}-${index}`} className="border-2 border-border">
                    <CardContent className="p-6">
                      <div className="flex gap-6 items-center">
                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <span className="text-sm text-primary font-semibold font-[Montserrat]">
                            {item.category}
                          </span>
                          <h3 className="text-xl font-bold text-secondary font-[Montserrat]">
                            {item.name}
                          </h3>
                          {item.selectedFlavor && (
                            <div className="flex items-center gap-2 mt-1">
                              <Coffee className="h-4 w-4 text-primary" />
                              <p className="text-sm text-primary font-semibold font-[Open_Sans]">
                                Sabor: {item.selectedFlavor}
                              </p>
                            </div>
                          )}
                          <p className="text-sm text-muted-foreground font-[Open_Sans] mt-1">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.name, item.quantity - 1, item.selectedFlavor)}
                            className="border-primary text-primary hover:bg-primary/10"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-xl font-bold w-12 text-center font-[Montserrat]">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.name, item.quantity + 1, item.selectedFlavor)}
                            className="border-primary text-primary hover:bg-primary/10"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeItem(item.name, item.selectedFlavor)}
                          className="border-destructive text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex gap-4 justify-between flex-wrap">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="border-destructive text-destructive hover:bg-destructive/10 font-[Montserrat]"
                >
                  Limpar Carrinho
                </Button>
                
                <Button
                  size="lg"
                  onClick={handleSendOrder}
                  className="bg-primary text-secondary hover:bg-primary/90 font-bold text-lg px-8 font-[Montserrat]"
                >
                  Finalizar Pedido via WhatsApp
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-[Open_Sans]">&copy; 2025 Natural Físico Suplementos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Carrinho;
