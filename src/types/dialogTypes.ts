import { Dispatch } from 'react';
import { IbuttonProps } from './buttonTypes';

export interface IDialogProps {
  isHide: boolean;
  onHanndleHide: () => void;
  children: JSX.Element[] | JSX.Element;
}

export interface IDialogButtonProps extends IbuttonProps {
  onClick: () => void;
}

export interface IDialogContext {
  isVisible: boolean;
  dispatch: Dispatch<'TRUE' | 'FALSE'>;
}
