import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImportanceSection from './components/ImportanceSection';
import ATSSection from './components/ATSSection';
import CompareSection from './components/CompareSection';
import ProvenSection from './components/ProvenSection';
import TargetSection from './components/TargetSection';
import DemoSection from './components/DemoSection';
import RelatedResources from './components/RelatedResources';
import Footer from './components/Footer';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <section className="bg-[#2D1B69] py-6 sm:py-6">
      </section>

      <div className="wave-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
         82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
         906.67,72,985.66,92.83c70.05,18.48,146.53,
         26.09,214.34,3V0H0V27.35A600.21,600.21,
         0,0,0,321.39,56.44Z"
            className="fill-[#2D1B69]"
          ></path>
        </svg>
      </div>



      <ImportanceSection />
      <ATSSection />
      <CompareSection />
      <ProvenSection />
      <TargetSection />
      
      <DemoSection />
      
      <RelatedResources />
      <Footer />
    </Layout>
  );
};

export default App;