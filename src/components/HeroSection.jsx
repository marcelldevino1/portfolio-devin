import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Mail, SendHorizonal, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="beranda" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background Glows */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-[#56f1c3]/10 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#2dd4a8]/5 rounded-full blur-[120px] -z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            {/* Badge Animasi */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pr-3 mb-8 reveal">
              <span className="bg-[#56f1c3] text-[#00382a] rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">Baru</span>
              <span className="text-xs font-medium text-zinc-300 flex items-center gap-1">
                Tersedia untuk Magang / Proyek <Sparkles className="size-3 text-[#56f1c3]" />
              </span>
              <ArrowRight className="size-3 text-zinc-500" />
            </div>

            <h1 className="text-balance text-5xl font-extrabold tracking-tight text-white md:text-6xl xl:text-7xl leading-tight">
              Membangun Fondasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56f1c3] to-[#4fdbc8]">
                Digital Marketing
              </span>
            </h1>
            
            <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Halo! Saya Devin Ahmad. Seorang pemula yang bersemangat mempelajari strategi data, 
              kreativitas konten, dan pertumbuhan bisnis di dunia digital.
            </p>

            <div className="mt-10 lg:mt-12">
              <form className="mx-auto max-w-md lg:ml-0" onSubmit={(e) => e.preventDefault()}>
                <div className="group relative flex items-center rounded-2xl border border-white/10 bg-white/5 p-1.5 focus-within:border-[#56f1c3]/50 transition-all">
                  <Mail className="absolute left-5 size-5 text-zinc-500 group-focus-within:text-[#56f1c3]" />
                  <input
                    placeholder="Masukkan email Anda"
                    className="h-12 w-full bg-transparent pl-12 pr-4 focus:outline-none text-sm text-white"
                    type="email"
                  />
                  <Button className="rounded-xl">
                    <span className="hidden sm:block">Konsultasi</span>
                    <SendHorizonal className="size-5 sm:hidden" />
                  </Button>
                </div>
              </form>

              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-[#56f1c3]" /> Berorientasi Belajar
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-[#56f1c3]" /> Adaptif
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-[#56f1c3]" /> Kreatif
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Foto Profil sesuai desain baru */}
          <div className="relative mt-20 lg:mt-0 flex justify-center">
            <div className="relative w-80 h-96 lg:w-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#56f1c3] to-[#2dd4a8] rounded-3xl rotate-6 opacity-20 blur-lg" />
              
              <div className="absolute inset-0 bg-[#131313] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-transform hover:rotate-0 duration-500 -rotate-3">
                <img 
                  src="/profile.png" 
                  alt="Devin Ahmad" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://placehold.co/400x500/131313/56f1c3?text=Devin+Ahmad' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                    <div className="text-[#56f1c3] font-bold text-xl uppercase tracking-widest">Digital</div>
                    <div className="text-white font-light text-lg">Marketer Enthusiast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}