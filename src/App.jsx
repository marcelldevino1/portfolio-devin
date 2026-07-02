import React, { useState, useEffect } from 'react';

// Custom SVG Icons
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-teal-400">DA</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-teal-400 p-2"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-teal-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Avatar Initial */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-5xl font-bold text-gray-900 shadow-2xl shadow-teal-500/30">
              D
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            DEVIN AHMAD ALFAREZI
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-teal-400 to-teal-600 mb-6"></div>
          <p className="text-2xl md:text-3xl text-teal-400 mb-8 font-medium">
            Digital Marketing Specialist
          </p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Spesialis dalam content creation, social media marketing, dan video production 
            yang membantu brand berkembang di era digital
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Lihat Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-teal-500 text-teal-400 hover:bg-teal-500/10 font-semibold rounded-lg transition-all duration-200"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon />
      </div>
    </section>
  );
};

// About Section
const About = () => {
  const skills = [
    { name: 'Social Media Marketing', level: 90 },
    { name: 'Content Creation', level: 85 },
    { name: 'Video Production', level: 80 },
    { name: 'Digital Strategy', level: 75 },
    { name: 'Brand Management', level: 70 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tentang Saya</h2>
          <div className="h-1 w-20 mx-auto bg-teal-500"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Digital Marketing Professional</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Saya adalah seorang Digital Marketing Specialist dengan pengalaman dalam menciptakan 
              konten kreatif dan strategi pemasaran digital yang efektif. Berpengalaman bekerja 
              dengan berbagai brand dari berbagai industri termasuk healthcare, recruitment, 
              dan real estate.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Saya ahli dalam membuat konten video, social media campaign, dan strategi branding 
              yang membantu bisnis berkembang di dunia digital.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h4 className="text-teal-400 font-semibold text-2xl">5+</h4>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h4 className="text-teal-400 font-semibold text-2xl">3+</h4>
                <p className="text-gray-400 text-sm">Industri</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-teal-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-teal-400 to-teal-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const Portfolio = () => {
  const projects = [
    {
      title: 'REKRET - Recruitment Campaign',
      category: 'Social Media Marketing',
      description: 'Kampanye recruitment digital untuk membantu perusahaan menemukan talenta terbaik melalui strategi content marketing yang efektif.',
      image: 'https://via.placeholder.com/600x400/1a1a1a/2dd4a8?text=REKRET',
      tags: ['Recruitment', 'Content Marketing', 'Social Media']
    },
    {
      title: 'PGK - Medical Equipment',
      category: 'Healthcare Marketing',
      description: 'Pemasaran digital untuk peralatan medis USG modern dengan fokus pada edukasi dan awareness layanan kesehatan yang lebih baik.',
      image: 'https://via.placeholder.com/600x400/1a1a1a/2dd4a8?text=PGK+Medical',
      tags: ['Healthcare', 'Product Marketing', 'Video Content']
    },
    {
      title: 'TRITONVILLE - Warehouse & Logistics',
      category: 'B2B Marketing',
      description: 'Strategi pemasaran untuk layanan gudang dan logistik dengan pendekatan soft selling dan value proposition yang kuat.',
      image: 'https://via.placeholder.com/600x400/1a1a1a/2dd4a8?text=TRITONVILLE',
      tags: ['B2B', 'Logistics', 'Brand Awareness']
    },
    {
      title: 'KENVAS - Video Production',
      category: 'Video Content',
      description: 'Produksi konten video "Langkah yang Sama" dengan pesan inspiratif tentang persatuan dan pembelajaran bersama.',
      image: 'https://via.placeholder.com/600x400/1a1a1a/2dd4a8?text=KENVAS+Video',
      tags: ['Video Production', 'Storytelling', 'Brand Video']
    },
    {
      title: 'Stroke Awareness Campaign',
      category: 'Health Education',
      description: 'Kampanye edukasi kesehatan tentang stroke dan pentingnya waspada terhadap gejala-gejala awal untuk pencegahan.',
      image: 'https://via.placeholder.com/600x400/1a1a1a/2dd4a8?text=Stroke+Awareness',
      tags: ['Health Education', 'Public Awareness', 'Infographic']
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <div className="h-1 w-20 mx-auto bg-teal-500 mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beberapa project dan campaign yang telah saya kerjakan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-teal-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-teal-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const contactInfo = [
    {
      icon: <PhoneIcon />,
      label: 'Telepon',
      value: '089618635926',
      href: 'tel:089618635926'
    },
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'devinahmad605@gmail.com',
      href: 'mailto:devinahmad605@gmail.com'
    },
    {
      icon: <InstagramIcon />,
      label: 'Instagram',
      value: '@ahmdalfrzeee',
      href: 'https://instagram.com/ahmdalfrzeee'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Hubungi Saya</h2>
          <div className="h-1 w-20 mx-auto bg-teal-500 mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-gray-700/50 p-8 rounded-xl text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-teal-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="text-gray-400 text-sm mb-2">{info.label}</h3>
              <p className="text-white font-semibold">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gray-700/30 p-8 rounded-xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Nama</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors"
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors"
                placeholder="Masukkan email Anda"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Pesan</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors"
                placeholder="Tulis pesan Anda..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-gray-900 font-semibold rounded-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-200 transform hover:scale-105"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-teal-400">DA</h3>
            <p className="text-gray-400 text-sm">Devin Ahmad Alfarezi</p>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; 2025 Devin Ahmad Alfarezi. All rights reserved.</p>
            <p className="mt-1">Digital Marketing Specialist</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;