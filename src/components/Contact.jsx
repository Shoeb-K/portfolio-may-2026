import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      const formData = {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        name: formState.name,
        email: formState.email,
        message: formState.message,
        subject: "New Contact Form Submission from Portfolio",
      };

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormState({ name: '', email: '', message: '' });
          }, 3000);
        } else {
          alert("Something went wrong. Please try again or email khan.shoeb006@gmail.com directly.");
          console.error("Web3Forms error:", result);
        }
      } catch (error) {
        alert("Failed to send message. Please check your internet connection.");
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <div className="px-4 md:px-12 py-16 max-w-6xl mx-auto min-h-[85vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="inline-block bg-[#10B981] text-background px-4 py-2 font-mono font-bold text-sm uppercase tracking-wider border-brutal shadow-brutal">
          Reach Out
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          Contact Me
        </h1>
        
        <p className="max-w-3xl text-lg md:text-xl font-medium border-l-4 border-foreground pl-4 py-1">
          Have an interesting project, a system migration, or an agent pipeline you want built? Get in touch and let's construct highly reliable digital infrastructure.
        </p>

        <hr className="border-t-2 border-foreground my-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-3xl font-black uppercase">Direct Channels</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-background border-brutal shadow-brutal p-4 hover:translate-x-1 transition-transform">
                <div className="p-3 bg-primary text-background border-brutal">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-gray-500 uppercase">Email</h4>
                  <a href="mailto:khan.shoeb006@gmail.com" className="font-bold text-base hover:text-primary transition-colors">
                    khan.shoeb006@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-background border-brutal shadow-brutal p-4 hover:translate-x-1 transition-transform">
                <div className="p-3 bg-secondary text-background border-brutal">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-gray-500 uppercase">Phone</h4>
                  <a href="tel:+917020176213" className="font-bold text-base hover:text-secondary transition-colors">
                    +91 70201 76213
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-background border-brutal shadow-brutal p-4 hover:translate-x-1 transition-transform">
                <div className="p-3 bg-foreground text-background border-brutal">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-gray-500 uppercase">Location</h4>
                  <span className="font-bold text-base">
                    Mumbai, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#F5F5F5] border-brutal p-6 md:p-8 relative">
            <h3 className="text-3xl font-black uppercase mb-6">Send A Message</h3>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-[#F5F5F5] z-10 flex flex-col items-center justify-center p-6 text-center"
              >
                <CheckCircle className="w-16 h-16 text-[#10B981] mb-4" />
                <h4 className="text-2xl font-black uppercase mb-2">Message Sent!</h4>
                <p className="font-medium text-sm text-gray-600 max-w-sm">
                  Thanks for reaching out, Shoeb. I will get back to you as soon as possible.
                </p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs font-bold uppercase mb-2">Your Name</label>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Enter name" 
                  required
                  className="w-full bg-background border-brutal p-3 font-medium outline-none focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase mb-2">Your Email</label>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Enter email address" 
                  required
                  className="w-full bg-background border-brutal p-3 font-medium outline-none focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase mb-2">Your Message</label>
                <textarea 
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="How can we construct together?" 
                  required
                  className="w-full bg-background border-brutal p-3 font-medium outline-none focus:bg-white transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-foreground text-background font-mono font-bold uppercase border-brutal shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
