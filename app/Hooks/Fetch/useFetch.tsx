import { useState, useEffect } from "react";

export const useFetch = <T,>(): {
  items: T | undefined;
  error: string | undefined;
  loading: boolean;
} => {
  const [items, setItems] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setloading] = useState<boolean>(true);

  const fetchDatas = async (): Promise<void> => {
    try {
      const response = await (await fetch("/projets.json")).json();
      setloading(true);
      setItems(response);
    } catch (e: any) {
      setError(e);
      setloading(true);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return { items, error, loading };
};
