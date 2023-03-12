import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
export const GlobalContext = createContext({});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const [heigth, setHeigth]=useState<number>(5)
  const [width, setWidth]=useState<number>(10)

  return (
    <GlobalContext.Provider
      value={{
        heigth, setHeigth,
        width, setWidth
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
