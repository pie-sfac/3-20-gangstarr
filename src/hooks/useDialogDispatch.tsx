import { useContext } from 'react';
import { DialogContext } from '../context/dialogContext';

const useDialogDispatch = () => {
  const { dispatch } = useContext(DialogContext);
  if (!dispatch) throw new Error('Cannot find DialogProvider');
  return dispatch;
};

export default useDialogDispatch;
