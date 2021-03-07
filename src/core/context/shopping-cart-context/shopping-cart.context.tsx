import React, { createContext, useState } from "react";
import { ShoppingCart } from "./shopping-cart.vm";

export const ShoppingCartContext = createContext<ShoppingCart>({
  list: [],
  setList: (list) => {},
  isOpened: true,
  setIsOpened: (open) => {}
});

export const ShoppingCartProvider = ({ children }) => {
  const [list, setList] = useState<string[]>([]);
  const [isOpened, setIsOpened] = useState(true);

  return (
    <ShoppingCartContext.Provider value={{ list, setList, isOpened, setIsOpened }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
