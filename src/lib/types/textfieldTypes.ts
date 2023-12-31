export interface ItextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  state?:
    | 'inactive'
    | 'focused'
    | 'error'
    | 'positive'
    | 'activated'
    | 'disable';
  id: string;
  title: string;
  validate: boolean;
  isError?: boolean;
  customErrorMessage?: string;
  customSuccessMessage?: string;
  customInactiveMessage?: string;
}

export interface ItextFieldStyleProps {
  border: string;
  color: string;
  background?: string;
}
