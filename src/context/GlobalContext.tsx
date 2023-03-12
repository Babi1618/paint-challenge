import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
export const GlobalContext = createContext({});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const [heigth, setHeigth] = useState<number>(50);
  const [width, setWidth] = useState<number>(50);
  const [colorSelected, setColorSelected] = useState<string>("");

  return (
    <GlobalContext.Provider
      value={{
        heigth,
        setHeigth,
        width,
        setWidth,
        colorSelected,
        setColorSelected,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
