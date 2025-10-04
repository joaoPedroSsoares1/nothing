import { Product } from "@/types/Product";
import wheyImage from "@/assets/whey-protein.jpg";
import creatinaImage from "@/assets/creatina.jpg";
import preTreinoImage from "@/assets/pre-treino.jpg";

export const products: Product[] = [
  { 
    name: "Whey Protein Isolado", 
    category: "Proteínas", 
    image: wheyImage, 
    description: "Proteína de alta qualidade" 
  },
  { 
    name: "Whey Protein Concentrado", 
    category: "Proteínas", 
    image: wheyImage, 
    description: "Excelente custo-benefício" 
  },
  { 
    name: "Creatina Monohidratada", 
    category: "Creatinas", 
    image: creatinaImage, 
    description: "Aumento de força e energia" 
  },
  { 
    name: "Creatina Micronizada", 
    category: "Creatinas", 
    image: creatinaImage, 
    description: "Melhor absorção" 
  },
  { 
    name: "Pré-treino Energy", 
    category: "Pré-treinos", 
    image: preTreinoImage, 
    description: "Energia e foco máximo" 
  },
  { 
    name: "Pré-treino Pump", 
    category: "Pré-treinos", 
    image: preTreinoImage, 
    description: "Aumento de performance" 
  },
  { 
    name: "Multivitamínico", 
    category: "Vitaminas", 
    image: wheyImage, 
    description: "Suporte nutricional completo" 
  },
  { 
    name: "Vitamina D3", 
    category: "Vitaminas", 
    image: wheyImage, 
    description: "Saúde óssea e imunidade" 
  },
];
