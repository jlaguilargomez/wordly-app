import { ReactNode } from 'react';
import CellStatus from '../interfaces/CellStatus';

export interface IWordlyContext {
  wordToDiscover: string;
  numOfValues: number;
  gameStatus: Array<CellStatus>;
}

export interface IWordlyProvider {
  children: ReactNode;
}

export interface ServerData {
  value: string;
}
