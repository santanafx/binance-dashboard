import { PropsWithChildren } from "react";
import style from "./NavMenu.module.css";
import SearchInput from "./SearchInput";

export default function NavMenu({ children }: PropsWithChildren) {

  return (
    <div className={style.navMenuContainer}>
      {children}
    </div>
  );
}

NavMenu.SearchInput = SearchInput;
