export interface ShoppingCart {
  list: string[];
  setList: (list: string[]) => void;
  isOpened: boolean;
  setIsOpened: (isOpen: boolean) => void;
}