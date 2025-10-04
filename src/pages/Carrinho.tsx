import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { sendCartWhatsApp } from "@/utils/whatsapp";
import { Minus, Plus, Trash2, ShoppingBag, Coffee, Receipt } from "lucide-react";
import { CartButton } from "@/components/CartButton";
import { formatPrice } from "@/utils/formatPrice";

const Carrinho = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCart();

  const totalValue = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

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
              <div className="space-y-6 mb-8">
                {items.map((item, index) => (
                  <Card key={`${item.name}-${item.selectedFlavor || 'default'}-${index}`} className="border-2 border-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="w-28 h-28 rounded-lg overflow-hidden bg-muted flex-shrink-0 shadow-md">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="flex-grow space-y-2">
                          <span className="text-xs text-primary font-bold font-[Montserrat] uppercase tracking-wider">
                            {item.category}
                          </span>
                          <h3 className="text-2xl font-bold text-secondary font-[Montserrat] leading-tight">
                            {item.name}
                          </h3>
                          {item.selectedFlavor && (
                            <div className="flex items-center gap-2">
                              <Coffee className="h-4 w-4 text-primary" />
                              <p className="text-sm text-primary font-[Open_Sans]">
                                Sabor: {item.selectedFlavor}
                              </p>
                            </div>
                          )}
                          <p className="text-lg text-foreground font-medium font-[Montserrat] mt-3">
                            Preço unitário: {formatPrice(item.price)}
                          </p>
                        </div>

                        <div className="flex items-center gap-4 flex-shrink-0">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.name, item.quantity - 1, item.selectedFlavor)}
                            className="h-12 w-12 border-2 border-primary text-primary hover:bg-primary/10 active:scale-95 transition-all"
                          >
                            <Minus className="h-5 w-5" />
                          </Button>
                          <span className="text-2xl font-bold w-16 text-center font-[Montserrat] text-secondary">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.name, item.quantity + 1, item.selectedFlavor)}
                            className="h-12 w-12 border-2 border-primary text-primary hover:bg-primary/10 active:scale-95 transition-all"
                          >
                            <Plus className="h-5 w-5" />
                          </Button>
                        </div>

                        <div className="flex flex-col items-end gap-3 flex-shrink-0">
                          <p className="text-2xl font-bold text-primary font-[Montserrat]">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => removeItem(item.name, item.selectedFlavor)}
                            className="h-12 w-12 border-2 border-destructive text-destructive hover:bg-destructive/10 active:scale-95 transition-all"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <Card className="border-4 border-primary bg-gradient-to-br from-muted to-background shadow-2xl mb-8 animate-fade-in">
                <CardContent className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Receipt className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold text-secondary font-[Montserrat]">
                        Resumo do Pedido
                      </h2>
                    </div>
                  </div>
                  
                  <div className="border-t-2 border-border pt-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <p className="text-lg text-muted-foreground font-[Open_Sans]">
                        Total de itens:
                      </p>
                      <p className="text-xl font-semibold text-secondary font-[Montserrat]">
                        {items.reduce((acc, item) => acc + item.quantity, 0)}
                      </p>
                    </div>
                    
                    <div className="border-t-2 border-primary/20 pt-4 mt-4">
                      <div className="flex justify-between items-baseline">
                        <p className="text-2xl font-bold text-secondary font-[Montserrat]">
                          Valor Total:
                        </p>
                        <p className="text-5xl font-bold text-primary font-[Montserrat] animate-pulse-glow">
                          {formatPrice(totalValue)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="border-2 border-destructive text-destructive hover:bg-destructive/10 font-[Montserrat] py-3 active:scale-95 transition-all"
                >
                  Limpar Carrinho
                </Button>
                
                <Button
                  size="lg"
                  onClick={handleSendOrder}
                  className="bg-primary text-secondary hover:bg-primary/90 font-bold text-xl px-12 py-6 font-[Montserrat] active:scale-95 transition-all shadow-lg hover:shadow-2xl animate-pulse-glow"
                >
                  Finalizar Pedido ({formatPrice(totalValue)})
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
