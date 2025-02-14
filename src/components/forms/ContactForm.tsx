// src/components/forms/ContactForm.tsx
import { useState } from 'react';

export default function ContactForm() {
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
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
    </div>
  );
}
