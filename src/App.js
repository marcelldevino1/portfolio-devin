import React, { useState, useEffect } from 'react';

// Custom SVG Icons (Material Icons replacement)
const Icons = {
  menu: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  expand_more: () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  trending_up: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  construction: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  psychology: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  mail: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  call: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  share: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
};

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 bg-[#131313]/50 backdrop-blur-xl border-b border-white/10 h-20 shadow-sm transition-all duration-300 ${scrolled ? 'bg-[#131313]/95' : ''}`}>
      <div className="flex justify-between items-center w-full px-8 md:px-8 max-w-7xl mx-auto h-full">
        <span className="font-semibold text-xl text-[#56f1c3]">Devin Ahmad Alfarezi</span>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#bbcac2] hover:text-[#56f1c3] font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#2dd4a8] text-[#00382a] px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#56f1c3]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icons.menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131313] border-b border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#bbcac2] hover:text-[#56f1c3] font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
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
const Hero = () => (
  <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center px-8 overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#56f1c3]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4fdbc8]/10 rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10 flex flex-col items-center">
      <div className="mb-8 p-1 rounded-full bg-gradient-to-tr from-[#56f1c3] to-[#4fdbc8]">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#131313] border-4 border-[#131313] flex items-center justify-center overflow-hidden">
          <span className="text-6xl md:text-7xl font-bold text-[#56f1c3]">D</span>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
        Devin Ahmad Alfarezi
      </h1>
      
      <p className="text-lg md:text-xl text-[#bbcac2] max-w-2xl mb-10">
        Digital Marketing Specialist driving growth through data-driven strategies and performance-led execution.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#portfolio"
          className="px-10 py-4 bg-gradient-to-r from-[#006c53] to-[#2dd4a8] text-white font-bold rounded-xl hover:scale-105 shadow-[0_0_20px_rgba(45,212,168,0.2)] transition-all"
        >
          Lihat Portfolio
        </a>
        <a
          href="#contact"
          className="px-10 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl transition-all"
        >
          Hubungi Saya
        </a>
      </div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <Icons.expand_more />
    </div>
  </section>
);

// About Section
const About = () => {
  const skills = [
    { name: 'Search Engine Optimization', level: 95 },
    { name: 'Search Engine Marketing', level: 90 },
    { name: 'Social Media Ads', level: 88 },
    { name: 'Data Analytics', level: 92 },
  ];

  return (
    <section id="about" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-semibold text-[#56f1c3] mb-6">Pioneering Digital Growth</h2>
          <p className="text-lg text-[#bbcac2] mb-6 leading-relaxed">
            I am a marketing strategist focused on blending creativity with data analytics to deliver measurable ROI. My approach is centered on understanding customer psychology and leveraging modern performance tools to scale brands effectively.
          </p>
          <p className="text-base text-[#bbcac2] mb-10">
            With a deep technical understanding of SEO and programmatic advertising, I help businesses bridge the gap between product excellence and market dominance.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#2dd4a8]/30 hover:shadow-[0_0_30px_rgba(45,212,168,0.08)] transition-all">
              <div className="text-[#56f1c3] text-4xl font-bold mb-1">50+</div>
              <div className="text-[#bbcac2] text-sm font-medium">Successful Projects</div>
            </div>
            <div className="glass-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#2dd4a8]/30 hover:shadow-[0_0_30px_rgba(45,212,168,0.08)] transition-all">
              <div className="text-[#56f1c3] text-4xl font-bold mb-1">5+</div>
              <div className="text-[#bbcac2] text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <span className="text-white text-sm font-medium uppercase">{skill.name}</span>
                <span className="text-[#56f1c3] text-xs font-medium">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-[#201f1f] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#2dd4a8] relative overflow-hidden"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Hypergrowth',
      category: 'SEO Campaign',
      desc: 'Scaling organic traffic by 300% through technical SEO audits and semantic content clustering.',
      tags: ['Google Search Console', 'Ahrefs'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      title: 'SaaS Lead Generation',
      category: 'Paid Acquisition',
      desc: 'Optimizing Facebook Ads and LinkedIn Ads for a B2B SaaS, reducing CPL by 45%.',
      tags: ['FB Ads Manager', 'HubSpot'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
    },
    {
      title: 'Attribution Modeling',
      category: 'Data Analytics',
      desc: 'Building custom multi-touch attribution dashboards for a multi-channel retail brand.',
      tags: ['Google Analytics 4', 'Tableau'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-[#0e0e0e]">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Strategic Case Studies</h2>
          <div className="h-1 w-20 bg-[#56f1c3] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-2xl overflow-hidden group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#2dd4a8]/30 hover:shadow-[0_0_30px_rgba(45,212,168,0.08)] transition-all hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="px-6 py-2 bg-[#56f1c3] text-[#00382a] font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#56f1c3]/20 text-[#56f1c3] border border-[#56f1c3]/30 px-3 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-[#bbcac2] text-base mb-6 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-3 py-1 bg-white/5 text-[#bbcac2] text-[10px] uppercase font-bold rounded"
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

// Experience Section
const Experience = () => {
  const experiences = [
    {
      period: '2021 — Present',
      title: 'Senior Digital Strategist',
      company: 'NextGen Growth Agency',
      achievements: [
        'Leading a team of 5 specialists in cross-channel campaign execution.',
        'Managed annual ad spends exceeding $2M with 3.5x average ROAS.',
        'Pioneered the adoption of AI-driven creative optimization.'
      ],
      align: 'left'
    },
    {
      period: '2018 — 2021',
      title: 'Marketing Analyst',
      company: 'Global Tech Solutions',
      achievements: [
        'Developed unified reporting structures across 12 regional markets.',
        'Implemented end-to-end conversion tracking for B2B pipelines.',
        'Conducted A/B tests on 50+ landing pages, increasing conversion rate by 22%.'
      ],
      align: 'right'
    }
  ];

  return (
    <section id="experience" className="py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Professional Journey</h2>
          <p className="text-[#bbcac2] text-base">Building digital bridges across industries.</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-[#353534]"></div>
          
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`relative mb-20 md:w-1/2 ${exp.align === 'left' ? 'pr-12 md:text-right ml-auto' : 'pl-12'}`}
              style={{ [exp.align === 'left' ? 'marginLeft' : 'marginRight']: 'auto' }}
            >
              <div 
                className="hidden md:block absolute w-4 h-4 rounded-full bg-[#56f1c3] shadow-[0_0_10px_#2dd4a8] top-2"
                style={{ [exp.align === 'left' ? 'right' : 'left']: '-9px' }}
              ></div>
              
              <div className="glass-card p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#2dd4a8]/30 transition-all">
                <span className="text-[#56f1c3] text-sm font-medium block mb-2">{exp.period}</span>
                <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                <h4 className="text-[#bbcac2] text-base mb-4 italic">{exp.company}</h4>
                <ul className="text-[#bbcac2] text-base space-y-2">
                  {exp.achievements.map((achievement, aIdx) => (
                    <li key={aIdx}>• {achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      icon: <Icons.trending_up />,
      title: 'Marketing',
      skills: ['SEO Strategies', 'PPC Management', 'Content Marketing', 'Email Automation', 'Growth Hacking']
    },
    {
      icon: <Icons.construction />,
      title: 'Tools',
      skills: ['Google Ads', 'Meta Business', 'Semrush', 'Hotjar', 'GTM & GA4']
    },
    {
      icon: <Icons.psychology />,
      title: 'Soft Skills',
      skills: ['Data Storytelling', 'Stakeholder Mgmt', 'Problem Solving', 'Leadership']
    }
  ];

  return (
    <section id="skills" className="py-32 bg-[#1c1b1b]">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Core Competencies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#56f1c3]">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-[#131313] text-[#3edeb2] rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-semibold text-white mb-6">Let's Drive Growth Together</h2>
          <p className="text-lg text-[#bbcac2] mb-12">
            Whether you're looking to scale your startup or optimize an existing marketing engine, I'm ready to help you reach your KPIs.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#56f1c3] group-hover:bg-[#56f1c3]/10 transition-colors">
                <Icons.mail />
              </div>
              <div>
                <div className="text-[#bbcac2] text-xs font-medium uppercase">Email</div>
                <div className="text-white text-base">devinahmad605@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#56f1c3] group-hover:bg-[#56f1c3]/10 transition-colors">
                <Icons.call />
              </div>
              <div>
                <div className="text-[#bbcac2] text-xs font-medium uppercase">Phone</div>
                <div className="text-white text-base">089618635926</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#56f1c3] group-hover:bg-[#56f1c3]/10 transition-colors">
                <Icons.share />
              </div>
              <div>
                <div className="text-[#bbcac2] text-xs font-medium uppercase">Instagram</div>
                <div className="text-white text-base">@ahmdalfrzeee</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#bbcac2] text-xs font-medium uppercase mb-2">Nama Lengkap</label>
              <input 
                type="text"
                className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#56f1c3] transition-colors"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-[#bbcac2] text-xs font-medium uppercase mb-2">Email Address</label>
              <input 
                type="email"
                className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#56f1c3] transition-colors"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-[#bbcac2] text-xs font-medium uppercase mb-2">Pesan</label>
              <textarea 
                rows="4"
                className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#56f1c3] transition-colors"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-[#56f1c3] text-[#00382a] font-bold rounded-xl hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(45,212,168,0.2)] transition-all"
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
const Footer = () => (
  <footer className="w-full py-4 border-t border-[#85948d]/30 bg-[#131313]">
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 max-w-7xl mx-auto gap-6">
      <span className="text-xl font-bold text-[#56f1c3]">Devin Ahmad Alfarezi</span>
      <p className="text-sm text-[#bbcac2] opacity-80">
        © 2025 Devin Ahmad Alfarezi. Built with precision.
      </p>
      <div className="flex items-center gap-8">
        <a href="#" className="text-[#bbcac2] hover:text-[#56f1c3] transition-colors text-sm">Privacy Policy</a>
        <a href="#" className="text-[#bbcac2] hover:text-[#56f1c3] transition-colors text-sm">LinkedIn</a>
        <a href="#" className="text-[#bbcac2] hover:text-[#56f1c3] transition-colors text-sm">Instagram</a>
      </div>
    </div>
  </footer>
);

// Main App Component
function App() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-[#e5e2e1] overflow-x-hidden">
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
          border-color: rgba(45, 212, 168, 0.3);
          box-shadow: 0 0 30px rgba(45, 212, 168, 0.08);
          transform: translateY(-4px);
        }

        @keyframes shimmer {
          100% { left: 200%; }
        }

        .animate-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(45, 212, 168, 0.2), transparent);
          animation: shimmer 3s infinite;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #2dd4a8;
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;