import { initDefaultStorage } from './storage';

export function initStorage() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    initDefaultStorage();

    if (!localStorage.getItem('coffee_loyalty_points')) {
      localStorage.setItem('coffee_loyalty_points', JSON.stringify(100));
    }
  } catch {
    // ignore initialization errors in non-browser environments
  }
}

