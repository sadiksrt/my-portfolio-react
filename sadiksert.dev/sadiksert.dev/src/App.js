import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import HeroSection from './components/HeroSection';
import ScrollToTopButton from './components/ScrollToTopButton';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <div className="divider"></div>
        
        <section id="skills">
          <Skills />
        </section>
     
       
        <div className="divider"></div>
        <section id="contact">
          <Contact />
        </section>
         <div className="divider"></div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
