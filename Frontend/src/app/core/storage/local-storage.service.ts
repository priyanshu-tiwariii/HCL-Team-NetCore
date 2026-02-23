import { Injectable } from '@angular/core';
import { UserProfile } from '../../features/auth/data/models/user-profile.model';
import { StorageKey } from '../../shared/entities/StorageKey';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setToken(token: string): void {
    localStorage.setItem(StorageKey.TOKEN, token);
  }

  getToken(): string | null {
    return localStorage.getItem(StorageKey.TOKEN);
  }

  removeToken(): void {
    this.removeItem(StorageKey.TOKEN);
  }

  setUser(user: UserProfile): void {
    this.setItem<UserProfile>(StorageKey.USER, user);
  }

  getUser(): UserProfile | null {
    return this.getItem<UserProfile>(StorageKey.USER);
  }

  clearAuth(): void {
    this.removeToken();
    this.removeItem(StorageKey.USER);
  }

  // ==========================================
  // GENERIC CORE METHODS
  // ==========================================

  setItem<T>(key: StorageKey, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error saving key "${key}" to localStorage`, error);
    }
  }

  getItem<T>(key: StorageKey): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Error reading key "${key}" from localStorage`, error);
      return null;
    }
  }

  removeItem(key: StorageKey): void {
    localStorage.removeItem(key);
  }
}
