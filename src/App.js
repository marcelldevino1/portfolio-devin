import React, { useState, useEffect } from 'react';

// Custom SVG Icons
const Icons = {
  menu: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
  star: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  close: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
};

// Komponen Navigasi
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 bg-[#131313]/50 backdrop-blur-xl border-b border-white/10 h-20 shadow-sm transition-all duration-300 ${scrolled ? 'bg-[#131313]/95' : ''}`}>
      <div className="flex justify-between items-center w-full px-8 md:px-8 max-w-7xl mx-auto h-full">
        <span className="font-semibold text-xl text-[#56f1c3]">Devin Ahmad A.</span>
        
        {/* Menu Desktop */}
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
            href="#kontak"
            className="bg-[#2dd4a8] text-[#00382a] px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_15px_rgba(45,212,168,0.2)]"
          >
            Sapa Saya
          </a>
        </div>

        {/* Tombol Menu Mobile */}
        <button 
          className="md:hidden text-[#56f1c3]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icons.menu />
        </button>
      </div>

      {/* Menu Mobile */}
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

// Bagian Hero
const Hero = () => (
  <section id="beranda" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Elemen Latar Belakang */}
    <div className="absolute inset-0">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[#56f1c3]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#4fdbc8]/10 rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10 w-full px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      {/* Bagian Teks (Kiri) */}
      <div className="text-left flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#56f1c3]/10 border border-[#56f1c3]/20 mb-6 w-max">
          <span className="text-[#56f1c3] text-sm font-medium">👋 Halo, selamat datang!</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tighter leading-tight">
          Halo, Saya <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56f1c3] to-[#4fdbc8]">Devin Ahmad</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#bbcac2] max-w-lg mb-10 leading-relaxed">
          Seorang antusias Digital Marketing yang sedang membangun fondasi karir. Bersemangat untuk terus belajar, mengeksplorasi ide kreatif, dan berkembang di dunia digital.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#portofolio"
            className="px-8 py-4 bg-gradient-to-r from-[#006c53] to-[#2dd4a8] text-white font-bold rounded-xl hover:scale-105 shadow-[0_0_20px_rgba(45,212,168,0.2)] transition-all text-center"
          >
            Lihat Portofolio
          </a>
          <a
            href="#kontak"
            className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl transition-all text-center"
          >
            Mari Berdiskusi
          </a>
        </div>
      </div>

      {/* Bagian Foto Profil (Kanan) */}
      <div className="hidden lg:flex justify-center relative items-center">
        <div className="relative w-80 h-96">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#56f1c3] to-[#4fdbc8] rounded-3xl rotate-6 opacity-20 blur-lg animate-pulse"></div>
          
          <div className="absolute inset-0 bg-[#131313] border border-[#56f1c3]/30 rounded-3xl -rotate-3 overflow-hidden shadow-2xl transition-transform hover:rotate-0 duration-500">
            <img 
              src="/profile.png" 
              alt="Foto Devin Ahmad" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.src = 'https://placehold.co/400x500/131313/56f1c3?text=Foto+Profil';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/20 to-transparent"></div>
            
            <div className="absolute bottom-6 w-full text-center px-4">
              <p className="text-[#56f1c3] font-semibold text-lg drop-shadow-md">Digital Marketer</p>
              <p className="text-white text-sm drop-shadow-md">Dalam Masa Berkembang</p>
            </div>
          </div>

          <div className="absolute -bottom-2 -left-10 bg-[#131313] border border-[#56f1c3]/30 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="w-3 h-3 bg-[#56f1c3] rounded-full animate-ping"></div>
            <span className="text-[#bbcac2] text-sm font-medium">Terbuka untuk Magang</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Bagian Tentang Saya
const About = () => {
  return (
    <section id="tentang" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-semibold text-[#56f1c3] mb-6">Memulai Perjalanan Digital</h2>
          <p className="text-lg text-[#bbcac2] mb-6 leading-relaxed">
            Saya adalah seorang pemula di dunia digital marketing yang memiliki ketertarikan besar terhadap bagaimana sebuah kampanye digital dapat membangun interaksi dan menjangkau audiens secara efektif.
          </p>
          <p className="text-base text-[#bbcac2] mb-10 leading-relaxed">
            Meskipun saya masih berada di tahap awal, saya selalu meluangkan waktu untuk mempelajari tren media sosial, dasar-dasar analitik, serta strategi konten. Saya percaya bahwa kemauan belajar yang kuat adalah modal utama untuk berkembang di industri ini.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#2dd4a8]/30 transition-all text-center">
              <div className="text-[#56f1c3] flex justify-center mb-2"><Icons.star /></div>
              <div className="text-white font-bold mb-1">Dedikasi Penuh</div>
              <div className="text-[#bbcac2] text-xs font-medium">Dalam Setiap Pembelajaran</div>
            </div>
            <div className="glass-card p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#2dd4a8]/30 transition-all text-center">
              <div className="text-[#56f1c3] flex justify-center mb-2"><Icons.star /></div>
              <div className="text-white font-bold mb-1">Selalu Adaptif</div>
              <div className="text-[#bbcac2] text-xs font-medium">Terhadap Tren Baru</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-[#2dd4a8]/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#56f1c3]/5 rounded-bl-full -z-10 group-hover:bg-[#56f1c3]/10 transition-colors"></div>
            <h3 className="text-xl font-bold text-white mb-2">Kemauan Belajar Tinggi</h3>
            <p className="text-[#bbcac2] text-sm leading-relaxed">Secara aktif mengikuti webinar, membaca studi kasus, dan mempraktekkan ilmu baru melalui proyek-proyek kecil untuk mengasah insting pemasaran saya.</p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-[#2dd4a8]/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#56f1c3]/5 rounded-bl-full -z-10 group-hover:bg-[#56f1c3]/10 transition-colors"></div>
            <h3 className="text-xl font-bold text-white mb-2">Berpikir Kreatif</h3>
            <p className="text-[#bbcac2] text-sm leading-relaxed">Senang bereksperimen dengan berbagai format konten visual maupun tulisan (copywriting) untuk melihat apa yang paling disukai oleh audiens.</p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-[#2dd4a8]/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#56f1c3]/5 rounded-bl-full -z-10 group-hover:bg-[#56f1c3]/10 transition-colors"></div>
            <h3 className="text-xl font-bold text-white mb-2">Kolaboratif</h3>
            <p className="text-[#bbcac2] text-sm leading-relaxed">Sangat antusias untuk bekerja sama dalam tim, menerima masukan, dan berkolaborasi untuk menciptakan ide-ide kampanye yang segar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Bagian Portofolio (Dengan Fitur Pop-Up Modal Full Image)
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Mencegah scroll pada background ketika pop-up terbuka
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedImage]);

  const projects = [
    {
      title: 'Desain Media Sosial: Promosi Gudang Tritonville',
      category: 'PROYEK MAGANG',
      desc: 'Merancang materi promosi digital untuk Tritonville (Kawasan Industri & Gudang) selama masa magang. Desain visual ini difokuskan pada penyampaian 3 Unique Selling Proposition (USP) utama: efisiensi biaya operasional, percepatan distribusi, dan peningkatan produktivitas. Penggunaan warna merah yang kontras dan elemen visual pekerja konstruksi bertujuan untuk menarik perhatian audiens B2B dan membangun rasa percaya.',
      tags: ['Instagram', 'Copywriting', 'Canva'],
      image: '/portofolio-magang.webp' 
    },
    {
      title: 'Strategi Kampanye Media Sosial',
      category: 'PROYEK MAGANG',
      desc: 'Membantu merancang dan mengeksekusi kalender konten bulanan selama masa magang, yang berfokus pada peningkatan brand awareness dan interaksi audiens organik.',
      tags: ['Instagram', 'Copywriting', 'Canva'],
      image: '/portofolio-magang2.webp' 
    },
    {
      title: 'Strategi Kampanye Media Sosial',
      category: 'PROYEK MAGANG',
      desc: 'Membantu merancang dan mengeksekusi kalender konten bulanan selama masa magang, yang berfokus pada peningkatan brand awareness dan interaksi audiens organik.',
      tags: ['Instagram', 'Copywriting', 'Canva'],
      image: '/portofolio-magang3.webp' 
    },
        {
      title: 'Strategi Kampanye Media Sosial',
      category: 'PROYEK MAGANG',
      desc: 'Membantu merancang dan mengeksekusi kalender konten bulanan selama masa magang, yang berfokus pada peningkatan brand awareness dan interaksi audiens organik.',
      tags: ['Instagram', 'Copywriting', 'Canva'],
      image: '/portofolio-magang4.webp' 
    },
    {
      title: 'Business Plan & Marketing Strategy',
      category: 'PROYEK LOMBA',
      desc: 'Menjadi peserta dalam kompetisi bisnis mahasiswa tingkat nasional. Merancang strategi go-to-market untuk sebuah ide produk inovatif ramah lingkungan.',
      tags: ['Riset Pasar', 'Presentasi', 'Strategi Bisnis'],
      image: '/portofolio-lomba.webp'
    }
  ];

  return (
    <section id="portofolio" className="py-32 bg-[#0e0e0e] relative">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Pengalaman & Proyek</h2>
          <p className="text-[#bbcac2] mb-4">Penerapan ilmu pemasaran digital melalui pengalaman langsung di lapangan dan kompetisi.</p>
          <div className="h-1 w-20 bg-[#56f1c3] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-2xl overflow-hidden group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#2dd4a8]/30 transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/131313/56f1c3?text=Foto+Proyek';
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedImage(project.image)}
                    className="px-6 py-2 bg-[#56f1c3] text-[#00382a] font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    Lihat Detail
                  </button>
                </div>
                {/* Tag Kategori Utama */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#00382a]/80 text-[#56f1c3] border border-[#56f1c3]/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase backdrop-blur-md shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-[#bbcac2] text-sm mb-6 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-3 py-1 bg-[#131313] border border-white/10 text-[#bbcac2] text-[10px] uppercase font-bold rounded"
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

      {/* Pop-Up Modal Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            {/* Tombol Close */}
            <button 
              className="absolute -top-12 right-0 md:-right-12 md:top-0 text-white hover:text-[#56f1c3] transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <Icons.close />
            </button>
            
            {/* Gambar Full Size */}
            <img 
              src={selectedImage} 
              alt="Gambar Full Proyek" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Mencegah klik gambar menutup modal
              onError={(e) => {
                e.target.src = 'https://placehold.co/1200x800/131313/56f1c3?text=Foto+Proyek+Full';
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

// Bagian Pengalaman
const Experience = () => {
  const experiences = [
    {
      period: '2023 — Sekarang',
      title: 'Antusias Digital Marketing',
      company: 'Pembelajaran Mandiri',
      achievements: [
        'Mempelajari dasar-dasar Search Engine Optimization (SEO) dan Social Media Marketing.',
        'Mengikuti berbagai kelas daring dan webinar tentang strategi digital.',
        'Secara konsisten melakukan eksplorasi alat-alat digital marketing gratis.'
      ],
      align: 'left'
    },
    {
      period: '2023',
      title: 'Proyek Strategi Konten',
      company: 'Tugas Praktik/Akademis',
      achievements: [
        'Merancang ide konten mingguan untuk platform Instagram dan TikTok.',
        'Mempraktekkan penulisan copywriting yang menarik untuk caption media sosial.',
        'Belajar menganalisis engagement rate sederhana secara manual.'
      ],
      align: 'right'
    }
  ];

  return (
    <section id="pengalaman" className="py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Perjalanan Berkembang</h2>
          <p className="text-[#bbcac2] text-base">Langkah-langkah kecil menuju profesionalisme di dunia pemasaran digital.</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-[#353534]"></div>
          
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`relative mb-20 md:w-1/2 ${exp.align === 'left' ? 'pr-12 md:text-right ml-auto' : 'pl-12'}`}
              style={{ [exp.align === 'left' ? 'marginLeft' : 'auto']: 'auto', [exp.align === 'right' ? 'marginRight' : 'auto']: 'auto' }}
            >
              <div 
                className="hidden md:block absolute w-4 h-4 rounded-full bg-[#56f1c3] shadow-[0_0_10px_#2dd4a8] top-2"
                style={{ [exp.align === 'left' ? 'right' : 'left']: '-9px' }}
              ></div>
              
              <div className="glass-card p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#2dd4a8]/30 transition-all text-left">
                <span className="text-[#56f1c3] text-sm font-medium block mb-2">{exp.period}</span>
                <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                <h4 className="text-[#bbcac2] text-sm mb-4 italic">{exp.company}</h4>
                <ul className="text-[#bbcac2] text-sm space-y-2">
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

// Bagian Kontak
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="kontak" className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-semibold text-white mb-6">Mari Terhubung</h2>
          <p className="text-lg text-[#bbcac2] mb-12 leading-relaxed">
            Saya sangat terbuka untuk peluang magang, kolaborasi proyek, atau sekadar berdiskusi seputar digital marketing. Jangan ragu untuk menyapa!
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
                <div className="text-[#bbcac2] text-xs font-medium uppercase">Telepon / WhatsApp</div>
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
                placeholder="Masukkan nama Anda"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-[#bbcac2] text-xs font-medium uppercase mb-2">Alamat Email</label>
              <input 
                type="email"
                className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#56f1c3] transition-colors"
                placeholder="email@contoh.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-[#bbcac2] text-xs font-medium uppercase mb-2">Pesan</label>
              <textarea 
                rows="4"
                className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#56f1c3] transition-colors resize-none"
                placeholder="Apa yang ingin Anda bicarakan?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
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

// Bagian Footer
const Footer = () => (
  <footer className="w-full py-6 border-t border-[#85948d]/20 bg-[#0a0a0a]">
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 max-w-7xl mx-auto gap-4 text-center md:text-left">
      <span className="text-lg font-bold text-[#56f1c3]">Devin Ahmad Alfarezi</span>
      <p className="text-sm text-[#bbcac2] opacity-80">
        © 2024 Devin Ahmad Alfarezi. Terus belajar dan berkembang.
      </p>
      <div className="flex items-center gap-6 justify-center">
        <a href="#" className="text-[#bbcac2] hover:text-[#56f1c3] transition-colors text-sm">LinkedIn</a>
        <a href="#" className="text-[#bbcac2] hover:text-[#56f1c3] transition-colors text-sm">Instagram</a>
      </div>
    </div>
  </footer>
);

// Komponen Utama App
function App() {
  useEffect(() => {
    // Animasi Reveal Saat Scroll
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
    <div className="bg-[#0a0a0a] text-[#e5e2e1] overflow-x-hidden font-sans">
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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;