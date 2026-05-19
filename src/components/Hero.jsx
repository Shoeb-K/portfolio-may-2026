import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero({ setActiveTab }) {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 md:px-12 py-20 relative overflow-hidden border-b-2 border-brutal">
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-block bg-primary text-background px-4 py-2 font-mono font-bold text-sm uppercase tracking-wider border-brutal shadow-brutal">
              Available for new opportunities
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9]">
              SHOEB<br/>KHAN
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-6 mt-8">
              <h2 className="text-2xl md:text-3xl font-mono font-bold max-w-2xl bg-foreground text-background px-4 py-2 border-brutal shadow-brutal">
                Software Developer
              </h2>
              <div className="flex gap-4">
                <a href="https://github.com/Shoeb-K" target="_blank" rel="noreferrer" className="p-3 bg-background border-brutal shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/shoeb-khan-a07517264/" target="_blank" rel="noreferrer" className="p-3 bg-background border-brutal shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:khan.shoeb006@gmail.com" className="p-3 bg-background border-brutal shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <p className="max-w-2xl text-lg md:text-xl font-medium mt-8 border-l-4 border-primary pl-4">
              Building scalable backend systems and cloud-native applications on AWS, focusing on serverless architectures and system reliability. Proven track record of reducing deployment time and improving performance.
            </p>
          </motion.div>

          {/* Right Side: Avatar / Graphic inspired by the new circular dark-themed reference image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0 animate-fade-in group"
          >
            <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
              
              {/* Base Circle with Overflow Hidden (clips the bottom image & shoulders) */}
              <div className="w-[300px] h-[300px] rounded-full bg-[#1A1A1A] border-brutal shadow-brutal-lg overflow-hidden absolute flex items-end justify-center z-10">
                <img 
                  src="/avatar.png" 
                  alt="Shoeb Khan" 
                  className="w-full h-full object-contain object-bottom grayscale group-hover:grayscale-0 transition-all duration-500 select-none pointer-events-none z-10 translate-y-[42px] scale-[1.75] origin-bottom"
                />
              </div>

              {/* Top Image Overlay (NOT clipped by the circle, but clipped in half by clip-path to let only the head show) */}
              <div className="w-[300px] h-[300px] absolute flex items-end justify-center z-20 pointer-events-none">
                <img 
                  src="/avatar.png" 
                  alt="Shoeb Khan" 
                  className="w-full h-full object-contain object-bottom grayscale group-hover:grayscale-0 transition-all duration-500 select-none scale-[1.75] translate-y-[42px] origin-bottom"
                  style={{
                    clipPath: 'inset(0% 0% 45% 0%)',
                    WebkitClipPath: 'inset(0% 0% 45% 0%)'
                  }}
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-[-10%] top-20 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border-4 border-foreground rounded-full opacity-10 pointer-events-none" />
      <div className="absolute right-[10%] bottom-[-10%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-primary rounded-full opacity-10 pointer-events-none" />
    </section>
  );
}
