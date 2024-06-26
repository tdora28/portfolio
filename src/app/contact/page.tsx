'use client';

import React, { useState } from 'react';
import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';
import DecorText from '@/components/DecorText';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import FloatingLabelInput from '@/components/FloatingLabelInput';
import { handleAccordion } from '@/utilities/helper';
import ContactAlert from '@/components/ContactAlert';

const ContactPage = () => {
  const [status, setStatus] = useState<null | string>(null);
  const [error, setError] = useState<string>('');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError('');
      const myForm = event.currentTarget as HTMLFormElement;
      const formData = new FormData(myForm);
      // Convert FormData to a format that URLSearchParams accepts
      const formEntries = Array.from(formData.entries()).reduce((acc, [key, value]) => {
        acc[key] = value as string; // Assume all form values are strings for simplicity
        return acc;
      }, {} as Record<string, string>);
      // Construct the URLSearchParams from the form entries
      const urlSearchParams = new URLSearchParams(formEntries);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlSearchParams.toString(),
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };

  const handleAlertClose = () => {
    setStatus(null);
    setError('');
  };

  return (
    <>
      <main className="container pb-10">
        <h2 className={`${fontDisplay} text-5xl sm:text-6xl py-20`}>Contact</h2>
        <section className="grid md:grid-cols-[2fr_1fr] gap-20 md:gap-10 md:justify-between">
          {/* Contact Form */}
          <form name="contact" onSubmit={handleFormSubmit} className="flex flex-col gap-5">
            <input type="hidden" name="form-name" value="contact" />

            <h3 className={`${fontDisplay} text-3xl`}>Send a message</h3>

            {/* Name input */}
            <FloatingLabelInput label="Name" elementType="input" type="text" name="name" id="name" />
            {/* Email input */}
            <FloatingLabelInput label="Email" elementType="input" type="email" name="email" id="email" />
            {/* Message area */}
            <FloatingLabelInput label="Message" elementType="textarea" name="message" id="message" required />

            <button type="submit" className={`${fontDisplay} btn max-w-28 bg-frame indent`}>
              Send
            </button>

            {/* Alerts */}
            {status === 'ok' && <ContactAlert status="ok" onClick={handleAlertClose} />}
            {status === 'error' && <ContactAlert status="error" onClick={handleAlertClose} errorMessage={error} />}
            {status === 'pending' && <ContactAlert status="pending" />}
          </form>

          {/* Socials */}
          <div className="md:pl-10">
            <h3 className={`${fontDisplay} text-3xl mb-5`}>Socials</h3>
            <div className="flex flex-col gap-4 w-full">
              <Link href="https://www.linkedin.com/in/doratokai28/" className="btn-social indent">
                <FaLinkedinIn />
                <span className="w-full px-4 text-center">LinkedIn</span>
              </Link>
              <Link href="https://github.com/tdora28/" className="btn-social indent">
                <FaGithub />
                <span className="w-full px-4 text-center">GitHub</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="accordion">
            <p>
              Your privacy is important to us. Any information you provide through this contact form will be used solely for the purpose of addressing your inquiry or request. Your data will not be shared with third parties without your explicit
              consent. While every effort is made to protect your information, please be aware that internet transmissions may not be completely secure.
            </p>
          </div>
          <button className={`${fontDisplay} btn-sm block ml-auto mb-4 indent accordion-btn`} onClick={handleAccordion}>
            Open disclaimer ▼
          </button>
        </section>
      </main>

      {/* Decorative text in the background */}
      <DecorText text="Contact" />
    </>
  );
};

export default ContactPage;
