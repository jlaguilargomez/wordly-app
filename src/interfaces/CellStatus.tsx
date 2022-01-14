export default interface CellStatus {
  value: string;
  state: 'rightPosition' | 'rightValue' | 'wrong' | 'notEval';
}
