import { useContext } from 'react';
import { WordlyContext } from '../context/WordlyContext';
import { IWordlyContext } from '../context/WordlyContext.interfaces';

const useWordlyContext = (): IWordlyContext => useContext(WordlyContext);

export default useWordlyContext;
