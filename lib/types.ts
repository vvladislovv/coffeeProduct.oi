export interface ProductSize {
  id: string;
  name: string;
  price: number;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji?: string;
  categoryId: string;
  available?: boolean;
  sizes?: ProductSize[];
  addons?: Addon[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: ProductSize;
  selectedAddons?: Addon[];
}

export interface UserInfo {
  name?: string;
  phone?: string;
  address?: string;
}

export type DeliveryType = 'delivery' | 'pickup';
export type PaymentMethod = 'cash' | 'online';

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'delivering' | 'completed';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  deliveryType: DeliveryType;
  paymentMethod: PaymentMethod;
  address?: string;
  phone: string;
  name: string;
  status: OrderStatus;
  createdAt: string;
  loyaltyPointsUsed: number;
  loyaltyPointsEarned: number;
}

export type LoyaltyTransactionType = 'earned' | 'spent';

export interface LoyaltyTransaction {
  id: string;
  type: LoyaltyTransactionType;
  amount: number;
  description: string;
  date: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'cafe';
  timestamp: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
}

