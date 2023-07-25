export interface IbuttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size?: 'full' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  fill?: 'contained' | 'outline';
  mode?: 'normal' | 'enabled' | 'disabled';
}

export interface IbuttonStyleProps {
  width: string;
  height: string;
  padding: string;
  fontSize: string;
  border: string;
  background: string;
  color: string;
  cursor: string;
}
