import { create } from "zustand";

export interface AppInterfce {
  transactions: any[];
  pools: any[];
  stokvelBalance: number,
  stokvelTransactions: [], 
  getTransactions: () => void;
  getBalance: () => void;
  getPools: () => void;
  getAllPools: () => void;
  getStockvel: (id: number) => void;
  joinPool: (id: number) => void;
}

const useApp = create((set) => ({
  transactions: [],
  pools: [],
  total: 0.0,
  stokvelBalance: 0,
  getTransactions: async () => {
    try {
      const token: string | null = sessionStorage.getItem("token");

      if (!token) return null;

      const limit = 0;
      const page = 0;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions?limit=${limit}&page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();
      const {balance, transactions} = data;

      set((state: any) => ({
        total: balance,
        transactions,
      }));
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getStockvel: async (id:  number) => {
    try {
      const token: string | null = sessionStorage.getItem("token");

      if (!token) return null;

      const limit = 0;
      const page = 0;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/stokvel/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();
      console.log(data)
      // const {balance, transactions} = data;

      set((state: any) => ({
        stokvelBalance: 0,
        stokvelTransactions: [],
      }));
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getBalance: async () => {
    try {
      const token: string | null = sessionStorage.getItem("token");

      if (!token) return null;

      const limit = 0;
      const page = 0;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/balance?limit=${limit}&page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      const { assets, totalValue } = data;
      set((state: any) => ({
        assets: assets,
        total: totalValue,
      }));
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getPools: async () => {
    try {
      const token: string | null = sessionStorage.getItem("token");

      if (!token) return null;

      const limit = 0;
      const page = 0;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/assets?limit=${limit}&page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();

      const { assets, totalValue } = data;
      set((state: any) => ({
        assets: assets,
        total: totalValue,
      }));
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getAllPools: async () => {
    try {
      const token: string | null = sessionStorage.getItem("token");

      if (!token) return null;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/stokvel/all`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();
      const { pools } = data
      
      set((state: any) => ({
        pools: pools
      }));

      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  joinPool: async (id: string) => {
    try {
      const token: string | null = sessionStorage.getItem("token");

      if (!token) return null;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/stokvel/join?id=${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();
      const { pools } = data
      
      set((state: any) => ({
        pools: pools
      }));

      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
}));

export { useApp };
