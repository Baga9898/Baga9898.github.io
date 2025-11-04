import { toast, type TypeOptions } from 'react-toastify';

export const callNotify = (text: string, type: TypeOptions | undefined) => {
  toast(text, { type: type });
};
