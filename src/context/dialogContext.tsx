import { createContext } from 'react';
import { IDialogContext } from '../types/dialogTypes';

export const DialogContext = createContext<IDialogContext>({
  isVisible: true,
  dispatch: () => undefined,
});

export const DialogReducer = (state: boolean, action: 'TRUE' | 'FALSE') => {
  switch (action) {
    case 'TRUE':
      state = true;
      return state;
    case 'FALSE':
      state = false;
      return state;
  }
};
