import React from 'react';
import DecorText from '@/components/DecorText';

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <>
      <div>ContactPage</div>;{/* Decorative text in the background */}
      <DecorText text="Contact" position="right" />
    </>
  );
};

export default ContactPage;
