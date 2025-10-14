import { Github, Linkedin, Code, Mail, MapPin, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import sam from '../sam.jpg'
export default function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const scrollToSection = (id) => {
    console.log('Scrolling to:', id);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>



      <div className={`text-center max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile Image with enhanced effects */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
          <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50 bg-slate-800 transform hover:scale-110 transition-transform duration-300">
            <img 
              src={sam}
              alt="Shanmuga Priya"
              className="w-full h-full object-cover"
            />
          </div>
    
        </div>

        {/* Name with enhanced animation */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Shanmuga Priya
        </h1>

        {/* Title with typing effect look */}
        <div className="mb-4 h-12 flex items-center justify-center">
          <p className="text-2xl md:text-3xl text-purple-300 font-semibold">
            <span className="inline-block border-r-2 border-purple-400 pr-2 animate-pulse">
              Full Stack Developer & Tech Mentor
            </span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about building <span className="text-purple-400 font-semibold">scalable web applications</span> and mentoring the next generation of developers
        </p>

        {/* CTA Buttons with enhanced effects */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="relative border-2 border-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/20 transition-all transform hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Social Links with enhanced hover effects */}
        <div className="flex gap-6 justify-center items-center flex-wrap mb-8">
          {[
            { icon: Github, href: "https://github.com/shanmugapriya1203", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/shanmuga-priya-661935188/", label: "LinkedIn" },
            { icon: Code, href: "https://leetcode.com/_sam1203/", label: "LeetCode" },
            { icon: Mail, href: "mailto:priyamuthukumar1203@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-slate-800/50 hover:bg-purple-500/20 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
              aria-label={label}
            >
              <Icon size={24} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Contact Info with icons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400 mb-8">
          <div className="flex items-center gap-2 group hover:text-purple-400 transition-colors cursor-pointer">
            <MapPin size={20} className="text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm md:text-base">Pudukkottai, Tamil Nadu, India</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-purple-400 rounded-full"></div>
          <div className="flex items-center gap-2 group hover:text-purple-400 transition-colors cursor-pointer">
            <Phone size={20} className="text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm md:text-base">7094127906</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-8">
          <ChevronDown size={32} className="text-purple-400 mx-auto cursor-pointer hover:text-pink-400 transition-colors" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-100vh) translateX(50px);
          }
        }
      `}</style>
    </section>
  );
}