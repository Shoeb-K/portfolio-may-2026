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

          {/* Right Side: Avatar / Graphic inspired by the reference image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[340px] aspect-[4/5] flex items-end justify-center">
              
              {/* Semicircle/Arch Backing shape like the reference image, in Neo-Brutalist secondary blue color */}
              <div className="absolute bottom-0 w-[90%] h-[82%] bg-[#2563EB] rounded-t-full border-brutal shadow-brutal-lg" />

              {/* The Profile Photo (Transparent PNG) popping out of the arch frame */}
              <img 
                src="/avatar.png" 
                alt="Shoeb Khan" 
                className="absolute bottom-0 h-[98%] w-auto object-contain z-10 hover:scale-105 transition-transform duration-300 select-none"
              />

              {/* Green Neon Swirly line wrapping around the torso, just like the reference image */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                viewBox="0 0 400 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 20,400 C 100,430 300,430 370,390 C 420,330 300,290 180,290 C 50,290 10,250 40,200 C 70,150 280,160 340,60" 
                  stroke="#10B981" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  className="drop-shadow-[0_2px_10px_rgba(16,185,129,0.7)]"
                />
              </svg>

              {/* Rotating Circular "COME ON LET'S TALK" Badge like the reference image */}
              <div className="absolute -top-6 -right-6 w-32 h-32 z-30">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="w-full h-full relative"
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path 
                        id="circlePath" 
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" 
                      />
                    </defs>
                    <text className="font-mono text-[7px] font-black uppercase tracking-widest fill-foreground">
                      <textPath href="#circlePath" startOffset="0%">
                        • COME ON LET'S TALK • GET IN TOUCH 
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Inside circle CTA button */}
                  <button 
                    onClick={() => setActiveTab && setActiveTab('contact')}
                    className="absolute inset-8 rounded-full bg-[#10B981] border-brutal hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-brutal hover:shadow-none"
                    aria-label="Contact Shoeb"
                  >
                    <span className="w-3 h-3 rounded-full bg-white animate-ping absolute opacity-75" />
                    <span className="w-3 h-3 rounded-full bg-white z-10" />
                  </button>
                </motion.div>
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
