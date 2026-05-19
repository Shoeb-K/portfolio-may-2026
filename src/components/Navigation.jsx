import { motion } from 'framer-motion';

export default function Navigation({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ai', label: 'AI & Agentic' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-brutal px-4 md:px-12 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setActiveTab('home'); }} 
          className="text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors"
        >
          SHOEB KHAN
        </a>
        
        <nav className="flex gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1.5 font-mono text-sm font-bold border-brutal transition-all relative ${
                activeTab === item.id 
                  ? 'bg-foreground text-background shadow-none translate-x-[2px] translate-y-[2px]' 
                  : 'bg-background text-foreground shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
