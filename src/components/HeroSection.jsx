import React, { useState, lazy, Suspense } from 'react';
const ConsultationModal = lazy(() => import('./ConsultationModal'));

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Talk To The Leading Tax Consultant In Dubai</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6">Get Professional Guidance On All UAE Taxation And Accounting Services</p>
      <button
        className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition"
        onClick={() => setModalOpen(true)}
      >
        Book Your Free Consultation
      </button>
      <Suspense fallback={<div>Loading modal...</div>}>
        <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </Suspense>
    </section>
  );
};

export default HeroSection;
