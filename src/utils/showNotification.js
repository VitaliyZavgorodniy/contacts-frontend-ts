import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

export const showNotification = (message, type) => {
  if (type === 'success') return notyf.success(message);
  notyf.error(message);
};