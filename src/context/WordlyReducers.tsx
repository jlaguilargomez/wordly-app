import CellStatus from '../interfaces/CellStatus';

interface IGameTarget {
  [key: number]: string;
}

export interface IWord {
  id: number;
  isWordEnabled: boolean;
  letters: Array<CellStatus>;
}

export interface IWordlyReducerState {
  gameTarget: IGameTarget;
  gameStatus: Array<IWord>;
}

export interface IWordlyReducerAction {
  type: string;
  payload?: any;
}

const wordlyReducer = (
  state: IWordlyReducerState,
  action: IWordlyReducerAction
): IWordlyReducerState => {
  switch (action.type) {
    case 'GET_INITIAL_STATE':
      return { ...state };
    default:
      return state;
  }
};

export default wordlyReducer;
