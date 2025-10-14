import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, Award, GraduationCap } from 'lucide-react';
import HeroSection from './components/Herosection';
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const projects = [
    {
      title: 'Nexus: Disaster Management Platform',
      description: 'Empowered communities to prepare for, respond to, and recover from disasters with real-time alerts, geolocation services, and secure data management. Implemented secure data storage for critical information related to disaster relief efforts.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Socket.io', 'Nodemailer'],
      link: 'https://github.com/shanmugapriya1203/nexus-client',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=300&fit=crop'
    }
  ];

  const skills = {
  languages: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java'],
  frameworks: ['React.js', 'Next.js', 'Express.js', 'Bootstrap', 'Tailwind CSS', 'Redux', 'Recoil'],
  databases: ['MongoDB', 'MySQL', 'Firebase', 'AWS'],
  tools: ['Node.js', 'Git', 'Github', 'Postman', 'VS Code', 'Figma'],
  specializations: ['Game Development', 'Full Stack Development', 'Web Development', 'Gen AI', 'Problem Solving']
};

const experiences = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'January 2024 - Present',
    responsibilities: [
      'Developed responsive web applications for clients using React, Node.js, and modern web technologies',
      'Collaborated with clients to understand requirements and deliver tailored solutions within deadlines',
      'Implemented SEO best practices and performance optimization techniques to enhance user experience',
      'Maintained ongoing client relationships through effective communication and post-deployment support'
    ]
  },
  {
    role: 'Tech Mentor',
    company: 'Hackerkid - GUVI Geek Network, Chennai',
    period: 'September 2024 - Present',
    responsibilities: [
      'Mentored kids aged 7-17 on coding concepts in web development, game development, DS and algorithms, Gen AI and Python',
      'Guided students in problem-solving and developing technical skills through hands-on tasks',
      'Assisted in creating engaging learning content for a diverse group of students',
      'Fostered a collaborative learning environment that encouraged creativity and innovation'
    ]
  }
];
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:priyamuthukumar1203@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shanmuga Priya
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 hover:bg-purple-500/10 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

     <HeroSection/>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Highly motivated recent graduate with a solid foundation in full stack development. I demonstrate proficiency in front-end and back-end technologies, eager to leverage my skills in real-world projects.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I'm adept at designing and implementing scalable solutions with a strong focus on continuous learning and professional growth. Currently serving as a Tech Mentor at GUVI Geek Network, where I guide young minds in their coding journey.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Education</h3>
                  <p className="text-gray-400">B.E. in Electronics and Communication</p>
                  <p className="text-gray-400 text-sm">MZCET, Pudukkottai (2017-2021)</p>
                  <p className="text-purple-300 text-sm">GPA: 7.1</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Achievement</h3>
                  <p className="text-gray-400">Top 5 Finalist</p>
                  <p className="text-gray-400 text-sm">MERNOVATION Hackathon - GUVI (May 2024)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg px-4">
            Technologies I work with to bring ideas to life
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <Code className="text-purple-300" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.languages.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full text-xs sm:text-sm font-medium border border-purple-400/40 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-pink-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-pink-300">Libraries & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.frameworks.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-full text-xs sm:text-sm font-medium border border-pink-400/40 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.databases.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-xs sm:text-sm font-medium border border-purple-400/40 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-pink-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-pink-300">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.tools.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full text-xs sm:text-sm font-medium border border-pink-400/40 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 group bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4 sm:mb-6 justify-center">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <Award className="text-purple-300" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Specializations</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {skills.specializations.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full text-sm sm:text-base font-semibold border border-purple-400/40 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
<section id="experience" className="py-20 px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      Experience
    </h2>
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div 
          key={index}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-xl hover:border-purple-500/40 transition-colors duration-300"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <Briefcase className="text-purple-400" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-purple-300 mb-1">{exp.role}</h3>
              <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
              <p className="text-purple-400 font-semibold">{exp.period}</p>
            </div>
          </div>
          <ul className="space-y-3 ml-4">
            {exp.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="text-purple-400 mt-1">▹</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all hover:shadow-xl hover:shadow-purple-500/20 group"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-3xl font-bold mb-4 text-purple-300">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300 border border-purple-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                    >
                      <Github size={20} />
                      View on GitHub
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-xl">
            <p className="text-center text-gray-300 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-300">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-300">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-300">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors resize-none text-white"
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 text-lg"
              >
                Send Message
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-purple-500/20">
              <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
                <div>
                  <p className="text-sm text-purple-400 mb-1">Email</p>
                  <a href="mailto:priyamuthukumar1203@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                    priyamuthukumar1203@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-purple-400 mb-1">Phone</p>
                  <a href="tel:7094127906" className="text-gray-300 hover:text-purple-400 transition-colors">
                    +91 7094127906
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2025 Shanmuga Priya. Built with React & Tailwind CSS</p>
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/shanmugapriya1203" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shanmuga-priya-661935188/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://leetcode.com/_sam1203/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              LeetCode
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}