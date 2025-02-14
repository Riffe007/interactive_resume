// src/pages/contact.tsx
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Integrate with backend API or email service (Nodemailer, AWS SES, etc.)
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact | Timothy Riffe</title>
        <meta name="description" content="Contact Timothy Riffe for business inquiries." />
      </Head>

      <div className="flex flex-col min-h-screen bg-lightBg dark:bg-darkBg transition-colors">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-24">
          <div className="max-w-lg w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            {submitted ? (
              <p className="text-green-600 text-lg">Thank you! Your message has been sent.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white h-32"
                  onChange={handleChange}
                />
                <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
