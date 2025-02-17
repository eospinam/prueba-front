// authService.test.js
import authService from './authService';
import axios from 'axios';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('authService', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('login', () => {
    it('token y retornar datos cuando el login es exitoso', async () => {
      const fakeResponse = { data: { token: 'fake-token' } };
      vi.spyOn(axios, 'post').mockResolvedValue(fakeResponse);
      const result = await authService.login('test@example.com', 'password');
      expect(result).toEqual(fakeResponse.data);
      expect(localStorage.getItem('DataToken')).toEqual(JSON.stringify(fakeResponse.data.token));
    });

    it('error cuando falla el login', async () => {
      const error = new Error('Login failed');
      vi.spyOn(axios, 'post').mockRejectedValue(error);
      await expect(authService.login('test@example.com', 'wrong-password')).rejects.toThrow('Login failed');
      expect(localStorage.getItem('DataToken')).toBeNull();
    });
  });

  describe('logout', () => {
    it('debe eliminar el usuario del localStorage', () => {
      localStorage.setItem('DataToken', 'dummy');
      authService.logout();
      expect(localStorage.getItem('DataToken')).toBeNull();
    });
  });
});
