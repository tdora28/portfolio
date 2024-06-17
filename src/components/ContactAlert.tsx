import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Spinner from './Spinner';

type ContactAlertProps = {
  status: 'ok' | 'error' | 'pending';
  errorMessage?: string;
  onClick?: () => void;
};

const ContactAlert: React.FC<ContactAlertProps> = ({ status, errorMessage, onClick }) => {
  const alerts = {
    ok: {
      classes: 'flex justify-between items-center bg-purple-100 border border-purple-400 text-purple-700 px-4 py-3 relative',
      title: 'Success!',
      message: 'Your message has been sent.',
    },
    error: {
      classes: 'flex justify-between items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 relative',
      title: 'Error!',
      message: errorMessage,
    },
    pending: {
      classes: 'flex justify-between items-center bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 relative',
      title: 'Sending...',
      message: 'Your message is being sent.',
    },
  };

  const { classes, title, message } = alerts[status];

  return (
    <div className={classes} role="alert">
      <div>
        <strong className="font-bold">{title}</strong>
        <span className="block sm:inline"> {message}</span>
      </div>

      {status !== 'pending' && (
        <button onClick={onClick}>
          <VscChromeClose />
        </button>
      )}
      {status === 'pending' && <Spinner />}
    </div>
  );
};

export default ContactAlert;
