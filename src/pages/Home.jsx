import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      {/* Add more sections: TeamSection, TestimonialsSection, FAQSection, BlogSection, ContactCTA */}
    </main>
  );
};

export default Home;
