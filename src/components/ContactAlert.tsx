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
      color: 'purple',
      title: 'Success!',
      message: 'Your message has been sent.',
    },
    error: {
      color: 'red',
      title: 'Error!',
      message: errorMessage,
    },
    pending: {
      color: 'yellow',
      title: 'Sending...',
      message: 'Your message is being sent.',
    },
  };

  const { color, title, message } = alerts[status];

  return (
    <div className={`flex justify-between items-center bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 relative`} role="alert">
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
