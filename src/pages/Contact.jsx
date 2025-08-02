import React, { useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.name || !form.phone || !form.email || !form.service || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <main className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-blue-800 mb-2 text-center">Contact</h1>
        <p className="text-center text-gray-700 mb-8">Send us a message or call us for more information</p>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          {submitted ? (
            <div className="text-green-700 font-semibold text-center mb-4">Thank you! Your message has been sent.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Name*" className="border rounded px-4 py-2 w-full" />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone No*" className="border rounded px-4 py-2 w-full" />
              </div>
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email*" className="border rounded px-4 py-2 w-full" />
              <input name="service" value={form.service} onChange={handleChange} placeholder="Service Required*" className="border rounded px-4 py-2 w-full" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message*" className="border rounded px-4 py-2 w-full min-h-[100px]" />
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition w-full font-semibold">Submit</button>
            </form>
          )}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Contact Details</h2>
          <div className="mb-2"><span className="font-semibold">Address:</span> 601 Sheikh Zayed Road, 6th Floor, Aspin Commercial Tower – Dubai</div>
          <div className="mb-2"><span className="font-semibold">Phone:</span> <a href="tel:+97144081900" className="text-blue-700 hover:underline">+971 44081900</a></div>
          <div className="mb-2"><span className="font-semibold">WhatsApp:</span> <a href="https://api.whatsapp.com/send?phone=+971508912062&text=Hi" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">+971 508912062</a></div>
          <div><span className="font-semibold">Email:</span> <a href="mailto:info@shuraatax.com" className="text-blue-700 hover:underline">info@shuraatax.com</a></div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
