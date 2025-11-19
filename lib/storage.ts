import {
  CartItem,
  Order,
  UserInfo,
  LoyaltyTransaction,
  ChatMessage,
} from './types';

const CART_KEY = 'coffee_cart';
const ORDERS_KEY = 'coffee_orders';
const USER_INFO_KEY = 'coffee_user';
const LOYALTY_POINTS_KEY = 'coffee_loyalty_points';
const LOYALTY_TRANSACTIONS_KEY = 'coffee_loyalty_transactions';
const CHAT_MESSAGES_KEY = 'coffee_chat_messages';

const memoryStore: Record<string, unknown> = {};

function isBrowser() {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

function readItem<T>(key: string, fallback: T): T {
  if (isBrowser()) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        return fallback;
      }
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }
  if (memoryStore[key] === undefined) {
    memoryStore[key] = fallback;
  }
  return memoryStore[key] as T;
}

function writeItem<T>(key: string, value: T) {
  if (isBrowser()) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore storage quota errors
    }
  } else {
    memoryStore[key] = value;
  }
}

export function getCart(): CartItem[] {
  return readItem<CartItem[]>(CART_KEY, []);
}

export function saveCart(cart: CartItem[]) {
  writeItem(CART_KEY, cart);
}

export function clearCart() {
  writeItem<CartItem[]>(CART_KEY, []);
}

export function getOrders(): Order[] {
  return readItem<Order[]>(ORDERS_KEY, []);
}

export function saveOrder(order: Order) {
  const orders = getOrders();
  const updatedOrders = [...orders, order];
  writeItem(ORDERS_KEY, updatedOrders);
}

export function getUserInfo(): UserInfo | null {
  return readItem<UserInfo | null>(USER_INFO_KEY, null);
}

export function saveUserInfo(userInfo: UserInfo) {
  writeItem(USER_INFO_KEY, userInfo);
}

export function getLoyaltyPoints(): number {
  return readItem<number>(LOYALTY_POINTS_KEY, 100);
}

export function setLoyaltyPoints(value: number) {
  writeItem(LOYALTY_POINTS_KEY, Math.max(0, value));
}

export function addLoyaltyPoints(amount: number) {
  if (amount <= 0) return;
  const current = getLoyaltyPoints();
  setLoyaltyPoints(current + amount);
}

export function subtractLoyaltyPoints(amount: number) {
  if (amount <= 0) return;
  const current = getLoyaltyPoints();
  setLoyaltyPoints(Math.max(0, current - amount));
}

export function getLoyaltyTransactions(): LoyaltyTransaction[] {
  return readItem<LoyaltyTransaction[]>(LOYALTY_TRANSACTIONS_KEY, []);
}

export function addLoyaltyTransaction(transaction: LoyaltyTransaction) {
  const transactions = getLoyaltyTransactions();
  writeItem(LOYALTY_TRANSACTIONS_KEY, [transaction, ...transactions]);
}

export function getChatMessages(): ChatMessage[] {
  return readItem<ChatMessage[]>(CHAT_MESSAGES_KEY, []);
}

export function saveChatMessage(message: ChatMessage) {
  const messages = getChatMessages();
  writeItem(CHAT_MESSAGES_KEY, [...messages, message]);
}

export function initDefaultStorage() {
  readItem<CartItem[]>(CART_KEY, []);
  readItem<Order[]>(ORDERS_KEY, []);
  readItem<UserInfo | null>(USER_INFO_KEY, null);
  readItem<number>(LOYALTY_POINTS_KEY, 100);
  readItem<LoyaltyTransaction[]>(LOYALTY_TRANSACTIONS_KEY, []);
  readItem<ChatMessage[]>(CHAT_MESSAGES_KEY, []);
}

