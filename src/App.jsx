import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AIPage from './components/AIPage';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col justify-between">
      <div>
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} />
            <Experience />
            <Projects />
            <Skills />
          </>
        )}
        
        {activeTab === 'ai' && <AIPage />}
        {activeTab === 'certifications' && <Certifications />}
        {activeTab === 'contact' && <Contact />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
