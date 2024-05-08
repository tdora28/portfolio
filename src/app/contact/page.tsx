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
        <section className="grid md:grid-cols-[2fr_1fr] gap-20 md:gap-10 md:justify-between">
          {/* Contact Form */}
          <form action="" className="flex flex-col gap-5">
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
          </form>

          {/* Socials */}
          <div>
            <h3 className={`${fontDisplay} text-3xl mb-5`}>Socials</h3>
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
        </section>
      </main>

      {/* Decorative text in the background */}
      <DecorText text="Contact" position="right" />
    </>
  );
};

export default ContactPage;
