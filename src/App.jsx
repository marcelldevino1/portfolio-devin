import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { Button } from './components/ui/button';
import { Mail, Phone, Instagram, Star, X } from 'lucide-react';

const Icons = { Mail, Phone, Instagram, Star, X };

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Data Portofolio
  const projects = [
    {
      title: 'Kampanye Media Sosial: Tritonville',
      category: 'PROYEK MAGANG',
      desc: 'Merancang materi promosi digital B2B untuk pergudangan. Fokus pada USP efisiensi biaya dan keamanan aset.',
      tags: ['Desain Konten', 'Copywriting', 'Canva'],
      image: '/image_cdffc2.png' 
    },
    {
      title: 'Strategi Marketing Alat Kesehatan PGK',
      category: 'PROYEK LOMBA',
      desc: 'Menganalisis strategi komunikasi visual alat medis untuk membangun kepercayaan instansi kesehatan.',
      tags: ['B2B Marketing', 'Riset Pasar'],
      image: '/image_cdfc65.png'
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white font-sans scroll-smooth">
      {/* 1. HERO SECTION (SUDAH DIPISAH FILENYA) */}
      <HeroSection />

      {/* 2. ABOUT SECTION */}
      <section id="tentang" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#56f1c3] mb-6 tracking-tight">Memulai Perjalanan</h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Saya adalah seorang pemula di dunia digital marketing yang berfokus pada hasil nyata. Meskipun baru memulai, saya memiliki dedikasi tinggi untuk mempelajari data dan psikologi audiens.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Star className="mx-auto mb-2 text-[#56f1c3]" />
                <div className="font-bold">Dedikasi</div>
                <div className="text-xs text-zinc-500">Belajar Setiap Hari</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <Star className="mx-auto mb-2 text-[#56f1c3]" />
                <div className="font-bold">Adaptif</div>
                <div className="text-xs text-zinc-500">Terhadap Tren</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#56f1c3]/30 transition-colors">
               <h3 className="font-bold mb-1">Kemauan Belajar</h3>
               <p className="text-sm text-zinc-500">Aktif mengikuti kursus dan webinar digital marketing.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#56f1c3]/30 transition-colors">
               <h3 className="font-bold mb-1">Berpikir Kreatif</h3>
               <p className="text-sm text-zinc-500">Mencari sudut pandang baru dalam pembuatan konten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO SECTION */}
      <section id="portofolio" className="py-24 bg-[#0e0e0e]">
        <div className="px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Portofolio</h2>
            <div className="h-1 w-12 bg-[#56f1c3] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button onClick={() => setSelectedImage(project.image)}>Lihat Full Image</Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00382a] text-[#56f1c3] px-4 py-1.5 rounded-full text-[10px] font-bold border border-[#56f1c3]/30 uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(t => <span key={t} className="text-[10px] bg-white/5 px-3 py-1 rounded-md text-zinc-300">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="kontak" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">Mari Berdiskusi</h2>
            <p className="text-zinc-400 mb-10 text-lg">Tertarik untuk berkolaborasi atau ingin tahu lebih banyak tentang saya?</p>
            <div className="space-y-6 text-zinc-300">
               <div className="flex items-center gap-4"><Icons.Mail className="text-[#56f1c3]" /> devinahmad605@gmail.com</div>
               <div className="flex items-center gap-4"><Icons.Phone className="text-[#56f1c3]" /> 089618635926</div>
               <div className="flex items-center gap-4"><Icons.Instagram className="text-[#56f1c3]" /> @ahmdalfrzeee</div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <input className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#56f1c3]" placeholder="Nama Anda" />
            <input className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#56f1c3]" placeholder="Email" />
            <textarea className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#56f1c3] h-32" placeholder="Pesan"></textarea>
            <Button className="w-full">Kirim Pesan</Button>
          </form>
        </div>
      </section>

      {/* POP-UP MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-10 right-10 text-white"><Icons.X size={32}/></button>
          <img src={selectedImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={e => e.stopPropagation()}/>
        </div>
      )}
    </div>
  );
}

export default App;