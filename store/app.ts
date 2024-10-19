import { create } from 'zustand';

export interface AppInterfce {
  transactions: any[],
  pools: any[],
  getTransactions: () => void;
  getPools: () => void;
}

const useApp = create(set => ({
  transactions: [],
  pools: [],
  total: 0.00,
  getTransactions: async () => {
    try {
      const token: string | null = sessionStorage.getItem('token');

      if (!token) return null;

      const limit = 0;
      const page = 0;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/assets?limit=${limit}&page=${page}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = await response.json();

      const { assets, totalValue } = data;
      set((state: any) => ({
        assets: assets,
        total: totalValue
      }));
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getPools: async () => {
    try {
      const token: string | null = sessionStorage.getItem('token');

      if (!token) return null;

      const limit = 0;
      const page = 0;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/assets?limit=${limit}&page=${page}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = await response.json();

      const { assets, totalValue } = data;
      set((state: any) => ({
        assets: assets,
        total: totalValue
      }));
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
}));

export { useApp };
