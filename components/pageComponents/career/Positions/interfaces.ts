export interface IPosition {
  id: string;
  title: string;
  department: string;
  type: string;
}

export interface TableRowProps {
  position: IPosition;
}
