import { Product, Category } from './types';

export const categories: Category[] = [
  { id: 'coffee', name: 'Кофе', emoji: '☕️' },
  { id: 'tea', name: 'Чай', emoji: '🍵' },
  { id: 'dessert', name: 'Десерты', emoji: '🧁' },
  { id: 'snack', name: 'Снэки', emoji: '🥐' },
  { id: 'special', name: 'Спецпредложения', emoji: '🎉' },
];

export const products: Product[] = [
  {
    id: 'latte-classic',
    name: 'Латте',
    description: 'Классический латте с нежной молочной пенкой',
    price: 220,
    emoji: '🥛',
    categoryId: 'coffee',
    sizes: [
      { id: 'latte-s', name: '250 мл', price: 0 },
      { id: 'latte-m', name: '350 мл', price: 40 },
      { id: 'latte-l', name: '450 мл', price: 70 },
    ],
    addons: [
      { id: 'syrup-vanilla', name: 'Ванильный сироп', price: 25 },
      { id: 'syrup-caramel', name: 'Карамельный сироп', price: 25 },
      { id: 'extra-shot', name: 'Доп. эспрессо', price: 40 },
    ],
  },
  {
    id: 'flat-white',
    name: 'Флэт Уайт',
    description: 'Двойной эспрессо с бархатной микропеной',
    price: 260,
    emoji: '🤍',
    categoryId: 'coffee',
    sizes: [
      { id: 'flat-white-250', name: '250 мл', price: 0 },
      { id: 'flat-white-350', name: '350 мл', price: 40 },
    ],
    addons: [
      { id: 'oat-milk', name: 'Овсяное молоко', price: 30 },
      { id: 'almond-milk', name: 'Миндальное молоко', price: 35 },
    ],
  },
  {
    id: 'matcha-latte',
    name: 'Матча-латте',
    description: 'Японский зелёный чай с молоком и лёгкой сладостью',
    price: 280,
    emoji: '🍵',
    categoryId: 'tea',
    sizes: [
      { id: 'matcha-s', name: '250 мл', price: 0 },
      { id: 'matcha-m', name: '350 мл', price: 30 },
    ],
    addons: [
      { id: 'coconut-milk', name: 'Кокосовое молоко', price: 35 },
      { id: 'soy-milk', name: 'Соевое молоко', price: 25 },
    ],
  },
  {
    id: 'cheesecake',
    name: 'Нью-Йорк чизкейк',
    description: 'Классический чизкейк с ягодным топпингом',
    price: 320,
    emoji: '🍰',
    categoryId: 'dessert',
  },
  {
    id: 'croissant',
    name: 'Миндальный круассан',
    description: 'Свежеиспечённый круассан с миндальным кремом',
    price: 210,
    emoji: '🥐',
    categoryId: 'snack',
  },
  {
    id: 'combo-morning',
    name: 'Комбо «Доброе утро»',
    description: 'Любой кофе + круассан по спеццене',
    price: 350,
    emoji: '🌅',
    categoryId: 'special',
  },
];

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === 'all') {
    return products;
  }
  return products.filter((product) => product.categoryId === categoryId);
}

