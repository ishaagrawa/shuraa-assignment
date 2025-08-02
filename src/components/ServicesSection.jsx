import React from 'react';

const services = [
  { title: 'Accounting & Bookkeeping', description: 'Outsource your accounting & bookkeeping requirements to Shuraa Tax. We ensure compliance with UAE regulations.' },
  { title: 'VAT Consultancy', description: 'Professional VAT registration, filing, and advisory for UAE businesses.' },
  { title: 'Corporate Tax', description: 'Corporate tax registration, filing, and consultancy for UAE entrepreneurs.' },
  { title: 'Auditing Services', description: 'Regular audits to maintain financial accuracy & compliance.' },
  { title: 'Add-On Services', description: 'Payroll, MIS reporting, compliance review, and more.' },
];

const ServicesSection = () => (
  <section className="py-16 bg-white" id="services">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our Most Popular Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-blue-50 rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
