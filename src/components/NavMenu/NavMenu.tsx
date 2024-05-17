import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import SearchInput from "./SearchInput";

interface NavMenuContextType {
  symbol: string;
  setSymbol: Dispatch<SetStateAction<string>>;
}

export const NavMenuContext = createContext<NavMenuContextType>({
  symbol: "",
  setSymbol: () => { }
});

export default function NavMenu({ children }: PropsWithChildren) {
  const [symbol, setSymbol] = useState<string>("");

  return (
    <NavMenuContext.Provider value={{ symbol, setSymbol }}>
      {children}
    </NavMenuContext.Provider>
  );
}

NavMenu.SearchInput = SearchInput;
