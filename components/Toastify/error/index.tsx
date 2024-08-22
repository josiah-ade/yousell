import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
  type: string;
  message: string;
  showToast: boolean;
}

const Toast: React.FC<ToastProps> = ({ type, message, showToast }) => {
  useEffect(() => {
    if (showToast) {
      switch(type) {
        case 'success':
          toast.success(message);
          break;
        case 'error':
          toast.error(message);
          break;
        case 'info':
          toast.info(message);
          break;
        case 'warning':
          toast.warning(message);
          break;
        default:
          toast(message);
      }
    }
  }, [showToast, type, message]);

  return <ToastContainer />;
};

export default Toast;
