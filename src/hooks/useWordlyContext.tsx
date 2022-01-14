import { useContext } from 'react';
import { IWordlyContext, WordlyContext } from '../context/WordlyContext';

const useWordlyContext = (): IWordlyContext => useContext(WordlyContext);

export default useWordlyContext;
