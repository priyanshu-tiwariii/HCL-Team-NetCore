import { Injectable } from '@angular/core';
import { DecodedToken } from '../../features/auth/data/models/login-resoponse.model';
import { UserProfile } from '../../features/auth/data/models/user-profile.model';
import { StorageKey } from '../../shared/entities/StorageKey';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // ==========================================
  // TOKEN
  // ==========================================

  setToken(token: string): void {
    localStorage.setItem(StorageKey.TOKEN, token);
  }

  getToken(): string | null {
    return localStorage.getItem(StorageKey.TOKEN);
  }

  // ==========================================
  // JWT DECODE (no external libraries)
  // ==========================================

  /**
   * Splits the stored JWT by `.` and decodes the Base64-URL payload.
   * Returns `null` if there is no token or decoding fails.
   */
  decodeToken(): DecodedToken | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;

      // Base64-URL → standard Base64
      const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
      const json = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(json) as DecodedToken;
    } catch {
      console.error('Failed to decode JWT token');
      return null;
    }
  }

  /**
   * Checks if the decoded token indicates the user is an Admin.
   * The .NET backend stores `isAdmin` as "True" / "False" string.
   */
  isAdmin(): boolean {
    const decoded = this.decodeToken();
    if (!decoded) return false;
    return decoded.isAdmin?.toLowerCase() === 'true';
  }

  /**
   * Build a UserProfile from the decoded JWT claims.
   */
  getUserFromToken(): UserProfile | null {
    const decoded = this.decodeToken();
    if (!decoded) return null;
    return {
      id: decoded.id,
      userName: decoded.userName,
      email: decoded.email,
      isAdmin: decoded.isAdmin?.toLowerCase() === 'true',
    };
  }

  /**
   * Returns true if a token exists and is not expired.
   */
  isTokenValid(): boolean {
    const decoded = this.decodeToken();
    if (!decoded || !decoded.exp) return false;
    return decoded.exp * 1000 > Date.now();
  }

  // ==========================================
  // CLEAR
  // ==========================================

  clearAuth(): void {
    localStorage.removeItem(StorageKey.TOKEN);
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
