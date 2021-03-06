import { useEffect, useState } from 'react';

interface ISetItem {
  valueToStorage: unknown;
  storageName: string;
}

interface IStorageAPIProps {
  storagedValue: unknown;
  setStoragedValue: (value: unknown) => void;
}

const getItem = (storageName: string) => {
  const items = localStorage.getItem(storageName);

  return items ? JSON.parse(items) : null;
};

const setItem = ({ storageName, valueToStorage }: ISetItem) => {
  const stringifyValueToStorage = JSON.stringify(valueToStorage);

  localStorage.setItem(storageName, stringifyValueToStorage);
};

export const useLocalStorage = (storageName: string): IStorageAPIProps => {
  const [storagedValue, setStoragedValue] = useState(() =>
    getItem(storageName)
  );

  useEffect(() => {
    setItem({
      storageName,
      valueToStorage: storagedValue,
    });
  }, [storagedValue, storageName]);

  return { storagedValue, setStoragedValue };
};
