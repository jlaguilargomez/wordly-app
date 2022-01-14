/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useMemo, useState } from 'react';
import {
  IWordlyContext,
  IWordlyProvider,
  ServerData,
} from './WordlyContext.interfaces';

interface Target {
  [key: number]: string;
}

const splitWordIntoValues = (word: string): Target => {
  const listOfValues = word.toUpperCase().split('');

  return listOfValues.reduce(
    (acc, curr, i) => Object.assign(acc, { [i]: curr }),
    {}
  );
};

export const WordlyContext = createContext<IWordlyContext>(
  {} as IWordlyContext
);

const initialStatus: IWordlyContext = {
  wordToDiscover: '',
  numOfValues: 4,
  gameStatus: [],
};

export function WordlyProvider({ children }: IWordlyProvider): JSX.Element {
  const [gameConfig, setGameConfig] = useState<IWordlyContext>(initialStatus);

  useEffect(() => {
    const fetchServerWord = async (): Promise<void> => {
      const res = await fetch('http://localhost:5000/word');
      const data: ServerData = await res.json();

      setGameConfig((prevValue) => ({
        ...prevValue,
        wordToDiscover: data.value,
      }));
    };

    fetchServerWord();
  }, []);
  console.log('context!');

  const contextValue = useMemo(() => gameConfig, []);

  return (
    <WordlyContext.Provider value={contextValue}>
      {children}
    </WordlyContext.Provider>
  );
}
