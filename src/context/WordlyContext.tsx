/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, ReactNode, useMemo } from 'react';

export interface IWordlyContext {
  wordToDiscover: string;
}

interface IWordlyProvider {
  children: ReactNode;
}

export const WordlyContext = createContext<IWordlyContext>(
  {} as IWordlyContext
);

export function WordlyProvider({ children }: IWordlyProvider): JSX.Element {
  console.log('context!');
  const initialState = useMemo(() => ({ wordToDiscover: 'PERCEBE' }), []);

  return (
    <WordlyContext.Provider value={initialState}>
      {children}
    </WordlyContext.Provider>
  );
}
