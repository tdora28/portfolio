import React from 'react';
import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';
import DecorText from '@/components/DecorText';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import FloatingLabelInput from '@/components/FloatingLabelInput';

const ContactPage = () => {
  return (
    <>
      <main className="container">
        <h2 className={`${fontDisplay} text-5xl sm:text-6xl py-20`}>Contact</h2>
        <section>
          {/* Socials */}
          <div>
            <h3 className={`${fontDisplay} text-3xl pb-5`}>Social</h3>
            <div className="flex flex-col gap-4 w-full max-w-max">
              <Link href="https://www.linkedin.com/in/doratokai28/" className="flex items-center border-white border-2">
                <FaLinkedinIn className="p-2 bg-white text-5xl clr-dark" />
                <span className="w-full px-4 text-center">linkedin.com/in/doratokai28/</span>
              </Link>
              <Link href="https://github.com/tdora28/" className="flex items-center border-white border-2">
                <FaGithub className="p-2 bg-white text-5xl clr-dark" />
                <span className="w-full px-4 text-center">github.com/tdora28/</span>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <form action="" className="flex flex-col gap-5">
            <h3 className={`${fontDisplay} text-3xl pb-5`}>Contact Form</h3>

            {/* Name input */}
            <FloatingLabelInput label="Name" type="text" name="name" id="name" />
            {/* Email input */}
            <FloatingLabelInput label="Email" type="email" name="email" id="email" />
            {/* Message area */}
            <div className="form-group">
              <textarea name="message" id="message" rows={5} className="w-full" required />
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className={`${fontDisplay} btn bg-frame indent`}>
              Send
            </button>
          </form>
        </section>
      </main>

      {/* Decorative text in the background */}
      <DecorText text="Contact" position="right" />
    </>
  );
};

export default ContactPage;
