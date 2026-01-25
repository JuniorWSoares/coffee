export interface Coffee {
  id: number;
  name: string;
  price: string;
  imagePath: string;
}

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Café Tradicional",
    price: "4,00",
    imagePath: "/cappuchino-1.jpg"
  },
  {
    id: 2,
    name: "Café Expresso",
    price: "5,00",
    imagePath: "/cappuchino-2.jpg"
  },
  {
    id: 3,
    name: "Café com Leite Cremoso",
    price: "6,00",
    imagePath: "/cappuchino-3.jpg"
  },
  {
    id: 4,
    name: "Mocha",
    price: "14,99",
    imagePath: "/cappuchino-4.jpg"
  },
  {
    id: 5,
    name: "Cappuccino Clássico",
    price: "8,00",
    imagePath: "/cappuchino-5.jpg"
  },
  {
    id: 6,
    name: "Cappuccino Cremoso",
    price: "9,99",
    imagePath: "/cappuchino-6.jpg"
  },
  {
    id: 7,
    name: "Latte",
    price: "12,00",
    imagePath: "/cappuchino-7.jpg"
  },
  {
    id: 8,
    name: "Cappuccino de Canela",
    price: "8,99",
    imagePath: "/cappuchino-8.jpg"
  },
  {
    id: 9,
    name: "Cold Brew",
    price: "10,99",
    imagePath: "/cappuchino-9.jpg"
  }
]
