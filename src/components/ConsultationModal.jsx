import React from "react";
import { Link } from "react-router-dom";

const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start">
            {/* <img src="/logo192.png" alt="Shuraa Logo" className="h-12 mb-4" /> */}
            <p className="text-xl font-bold text-blue-700">ShuraaTax</p>
            
            <h2 className="text-xl font-bold text-center md:text-left mb-2">Want To Connect <br /> <span className="text-2xl">RIGHT NOW</span></h2>
            <p className="font-semibold text-center md:text-left mb-4">Choose Your Preference</p>
            <div className="flex gap-4 mb-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded flex items-center gap-2"><span>🟢</span> WhatsApp</button>
              <button className="bg-blue-900 text-white px-6 py-2 rounded flex items-center gap-2"><span>📞</span> Phone</button>
            </div>
          </div>
          <form className="flex-1 flex flex-col gap-4 w-full">
            <div>
              <label className="block font-semibold mb-1">Name<span className="text-red-500">*</span></label>
              <input type="text" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block font-semibold mb-1">Phone No<span className="text-red-500">*</span></label>
              <div className="flex items-center gap-2">
                <span className="border rounded px-2 py-2 bg-gray-100">🇮🇳 +91</span>
                <input type="tel" className="flex-1 border rounded px-3 py-2" required placeholder="081234 56789" />
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Email<span className="text-red-500">*</span></label>
              <input type="email" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block font-semibold mb-1">Service Required<span className="text-red-500">*</span></label>
              <select className="w-full border rounded px-3 py-2" required>
                <option>Accounting Services</option>
                <option>Tax Consultancy</option>
                <option>VAT Registration</option>
                <option>Audit Services</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Message<span className="text-red-500">*</span></label>
              <textarea className="w-full border rounded px-3 py-2" rows="2" required></textarea>
            </div>
            <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded mt-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
