export interface IlabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  shape?: 'rectangle' | 'round';
  background?: `blue` | 'gray' | 'green';
  color?: 'blue500' | 'blue300' | 'gray' | 'red' | 'green';
}

export interface IlabelStyleProps {
  height: string;
  borderRadius: string;
  background: string;
  color: string;
  fontSize: string;
}
