import React from 'react';
import { useParams, Link } from 'react-router-dom';

const serviceDetails = {
  accounting: {
    title: 'Accounting & Bookkeeping',
    details: 'We offer comprehensive accounting and bookkeeping services to ensure your business remains compliant with UAE regulations. Our team handles everything from daily transactions to annual reports.'
  },
  vat: {
    title: 'VAT Consultancy',
    details: 'Our VAT experts provide registration, filing, and advisory services to help your business stay compliant and efficient in all VAT matters.'
  },
  'corporate-tax': {
    title: 'Corporate Tax',
    details: 'Get professional help with corporate tax registration, filing, and consultancy. We guide you through the latest UAE tax laws and ensure your business is always up to date.'
  },
  audit: {
    title: 'Auditing Services',
    details: 'Our auditing services help you maintain financial accuracy and compliance. We provide regular audits and actionable insights for your business.'
  },
  'add-on': {
    title: 'Add-On Services',
    details: 'We also offer payroll, MIS reporting, compliance review, and other add-on services to support your business growth.'
  }
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-blue-700 hover:underline">Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{service.title}</h1>
        <div className="text-gray-800 mb-8">{service.details}</div>
        <Link to="/" className="text-blue-700 hover:underline">&larr; Back to Home</Link>
      </div>
    </main>
  );
};

export default ServiceDetails;
