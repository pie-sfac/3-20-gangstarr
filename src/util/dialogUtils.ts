import { IDialogContext } from '../types/dialogTypes';

export const onCloseModal = (
  dispatch: IDialogContext['dispatch'],
  callback: () => void,
) => {
  dispatch('FALSE');

  setTimeout(() => {
    callback();
  }, 300);
};
