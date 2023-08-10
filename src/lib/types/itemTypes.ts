export interface IitemProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: 'contained' | 'outline';
}

export interface IitemStyleProps {
  border?: string;
}

export interface IitemTemplateProps {
  name?: string;
  phone?: string;
  gender?: string;
  trainer?: string;
  date?: string;
  memo?: string;
  description?: string;
}
