import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
export const GlobalContext = createContext({});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const [height, setHeight] = useState<number>(50);
  const [width, setWidth] = useState<number>(50);
  const [colorSelected, setColorSelected] = useState<string>("");
  const [reset, setReset] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        height,
        setHeight,
        width,
        setWidth,
        colorSelected,
        setColorSelected,
        reset,
        setReset,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
