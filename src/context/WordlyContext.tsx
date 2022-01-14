/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  Dispatch,
  useEffect,
  useMemo,
  useReducer,
  ReactNode,
} from 'react';

import wordlyReducer, {
  IWordlyReducerAction,
  IWordlyReducerState,
} from './WordlyReducers';

export interface IWordlyContext extends IWordlyReducerState {
  dispatch: Dispatch<IWordlyReducerAction>;
}

interface IWordlyProviderProps {
  children: ReactNode;
}

interface ServerData {
  value: string;
}

// const splitWordIntoArray = (word: string): Array<string> =>
//   word.toUpperCase().split('');

// const getGameTarget = (word: string): IGameTarget => {
//   console.log('😎');

//   return splitWordIntoArray(word).reduce(
//     (acc, curr, i) => Object.assign(acc, { [i]: curr }),
//     {}
//   );
// };

// const setInitialGameStatus = (word: string): Array<IWord> => {
//   console.log('🤖');
//   const firstLetters: Array<CellStatus> = splitWordIntoArray(word).map(() => ({
//     value: '',
//     state: 'notEval',
//   }));

//   return [
//     {
//       id: 0,
//       isWordEnabled: true,
//       letters: firstLetters,
//     },
//   ];
// };

export const WordlyContext = createContext<IWordlyContext>(
  {} as IWordlyContext
);

export function WordlyProvider({
  children,
}: IWordlyProviderProps): JSX.Element {
  const initialState: IWordlyReducerState = {
    gameTarget: {},
    gameStatus: [],
  };

  const [state, dispatch] = useReducer(wordlyReducer, initialState);

  useEffect(() => {
    const fetchServerWord = async (): Promise<void> => {
      const res = await fetch('http://localhost:5000/word');
      const data: ServerData = await res.json();

      console.log(data);
    };

    fetchServerWord();
  }, []);

  return (
    <WordlyContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WordlyContext.Provider>
  );
}
