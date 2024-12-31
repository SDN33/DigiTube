'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div className="h-screen w-screen text-center bg-gradient-to-t from-purple-900 to-[#5e17eb] text-white">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded h-32"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
      <br /><br /><br />
      <Footer />
    </div>
  );
}
