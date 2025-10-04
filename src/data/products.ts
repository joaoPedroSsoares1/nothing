import { Product } from "@/types/Product";
import wheyImage from "@/assets/whey-protein.jpg";
import creatinaImage from "@/assets/creatina.jpg";
import preTreinoImage from "@/assets/pre-treino.jpg";

export const products: Product[] = [
  { 
    id: "whey-isolado",
    name: "Whey Protein Isolado", 
    category: "Proteínas", 
    image: wheyImage, 
    description: "Proteína de alta qualidade",
    price: 129.90,
    flavors: ["Chocolate", "Baunilha", "Morango", "Cookies & Cream", "Banana"],
    detailedDescription: "Whey Protein Isolado de altíssima qualidade com 90% de proteína pura. Ideal para ganho de massa muscular e recuperação pós-treino. Baixo teor de carboidratos e gorduras. Absorção rápida. Modo de uso: 1 scoop (30g) com 200ml de água ou leite, 2-3x ao dia."
  },
  { 
    id: "whey-concentrado",
    name: "Whey Protein Concentrado", 
    category: "Proteínas", 
    image: wheyImage, 
    description: "Excelente custo-benefício",
    price: 89.90,
    flavors: ["Chocolate", "Baunilha", "Morango", "Côco"],
    detailedDescription: "Whey Protein Concentrado com excelente relação custo-benefício. Contém 80% de proteína e é perfeito para quem busca ganho de massa muscular sem gastar muito. Rico em aminoácidos essenciais. Modo de uso: 1-2 scoops ao dia."
  },
  { 
    id: "creatina-mono",
    name: "Creatina Monohidratada", 
    category: "Creatinas", 
    image: creatinaImage, 
    description: "Aumento de força e energia",
    price: 59.90,
    flavors: ["Sem sabor", "Limão", "Uva"],
    detailedDescription: "Creatina Monohidratada pura, a forma mais estudada e eficaz de creatina. Aumenta força, potência muscular e performance em treinos intensos. Auxilia no ganho de massa magra. Modo de uso: 3-5g por dia."
  },
  { 
    id: "creatina-micro",
    name: "Creatina Micronizada", 
    category: "Creatinas", 
    image: creatinaImage, 
    description: "Melhor absorção",
    price: 79.90,
    flavors: ["Sem sabor", "Frutas vermelhas", "Laranja"],
    detailedDescription: "Creatina Micronizada com partículas 20x menores que a creatina comum, garantindo melhor solubilidade e absorção. Mesmos benefícios da monohidratada com digestão ainda mais eficiente. Modo de uso: 3-5g ao dia."
  },
  { 
    id: "pre-energy",
    name: "Pré-treino Energy", 
    category: "Pré-treinos", 
    image: preTreinoImage, 
    description: "Energia e foco máximo",
    price: 99.90,
    flavors: ["Frutas tropicais", "Blue Ice", "Maçã Verde", "Melancia"],
    detailedDescription: "Pré-treino com alta concentração de cafeína, beta-alanina e arginina. Proporciona energia explosiva, foco mental intenso e aumento da resistência. Perfeito para treinos pesados. Modo de uso: 1 scoop 20-30 minutos antes do treino."
  },
  { 
    id: "pre-pump",
    name: "Pré-treino Pump", 
    category: "Pré-treinos", 
    image: preTreinoImage, 
    description: "Aumento de performance",
    price: 119.90,
    flavors: ["Fruit Punch", "Limão", "Uva", "Laranja"],
    detailedDescription: "Pré-treino focado em vasodilatação e pump muscular. Rico em citrulina, arginina e óxido nítrico. Aumenta fluxo sanguíneo, entrega de nutrientes e congestionamento muscular. Modo de uso: 1 scoop 30 minutos antes."
  },
  { 
    id: "multivitaminico",
    name: "Multivitamínico", 
    category: "Vitaminas", 
    image: wheyImage, 
    description: "Suporte nutricional completo",
    price: 49.90,
    flavors: ["Cápsulas"],
    detailedDescription: "Complexo multivitamínico completo com vitaminas A, C, D, E, K e complexo B, além de minerais essenciais. Fortalece o sistema imunológico, melhora recuperação e saúde geral. Modo de uso: 1-2 cápsulas ao dia com refeições."
  },
  { 
    id: "vitamina-d3",
    name: "Vitamina D3", 
    category: "Vitaminas", 
    image: wheyImage, 
    description: "Saúde óssea e imunidade",
    price: 39.90,
    flavors: ["Cápsulas"],
    detailedDescription: "Vitamina D3 (Colecalciferol) de alta potência. Essencial para saúde óssea, imunidade, regulação hormonal e absorção de cálcio. Particularmente importante para atletas. Modo de uso: 1 cápsula ao dia."
  },
];
