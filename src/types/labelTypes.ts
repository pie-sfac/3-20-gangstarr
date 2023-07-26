export interface IlabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  size?: 'small' | 'medium' | 'large';
  background?: `blue` | 'gray' | 'green';
  color?: 'blue500' | 'blue300' | 'gray' | 'red' | 'green';
  font?: 'caption1' | 'caption2';
}

export interface IlabelStyleProps {
  width: string;
  height: string;
  borderRadius: string;
  background: string;
  color: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
}