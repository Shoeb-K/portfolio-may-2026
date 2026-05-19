import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-4 md:px-12 py-12 bg-foreground text-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">SHOEB KHAN</h2>
          <p className="font-mono text-sm text-gray-400">Software Developer</p>
        </div>
        
        <div className="flex gap-4">
          <a 
            href="https://github.com/Shoeb-K" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-background text-foreground border-brutal hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#FF4500] transition-all"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/shoeb-khan-a07517264/" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-background text-foreground border-brutal hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#2563EB] transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:khan.shoeb006@gmail.com" 
            className="p-3 bg-background text-foreground border-brutal hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#10B981] transition-all"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
