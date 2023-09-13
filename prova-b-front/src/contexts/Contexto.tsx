import { createContext, useState } from "react";
import { ContextProps, LetterProps } from "../types";

const Contexto = createContext({} as ContextProps);

function Provider({ children }: any) {
  const [letters, setLetters] = useState([] as LetterProps[]);

  return (
    <Contexto.Provider value={{ letters }}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto, Provider };
