"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Mail, Phone, MapPin, Code2, Facebook, Linkedin, Twitter, 
  Database, Layout, Trophy, GraduationCap, 
  Target, Cpu, Users, Clock, 
  Globe
} from "lucide-react";

import { FaReact, FaLaravel, FaPhp, FaHtml5, FaCss3Alt, FaJava, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiMysql, SiSymfony, SiSqlite, SiDocker, SiGitlab } from "react-icons/si";

export default function Portfolio() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-emerald-500/30 font-sans scroll-smooth overflow-x-hidden">
      
      {/* --- ANIMATED BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-emerald-600/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-sky-600/10 blur-[120px] rounded-full" 
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-[85vh] items-center px-6 md:px-24 pt-16 md:pt-8 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="relative flex justify-center md:justify-end order-first md:order-last"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">
              <div className="absolute inset-10 bg-emerald-500/25 blur-[100px] rounded-full" />
              <div className="relative w-full h-full overflow-visible drop-shadow-[0_20px_50px_rgba(16,185,129,0.4)]">
                <Image 
                  src="/adari.png"  
                  alt="Elysé" 
                  fill 
                  className="object-contain object-bottom" 
                  priority 
                />
              </div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-white/5 rounded-full pointer-events-none"
              />
            </div>
          </motion.div>

          <div className="text-center md:text-left">
            <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Informatique Générale à Ecole Nationale d'Informatique
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{opacity:0, x:-20}} 
              animate={{opacity:1, x:0}} 
              className="relative z-20 text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-[0.95]"
            >
              RANDRIANANTENAINA <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-500 uppercase">
                   Elysé
              </span>
            </motion.h1>

            <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-6 py-4 border-y border-white/5 max-w-full md:max-w-fit">
              {["about", "formations", "projets", "but", "contact"].map((item) => (
                <a key={item} href={`#${item}`} className="text-[10px] md:text-xs font-black text-gray-500 hover:text-emerald-400 transition-all uppercase tracking-[0.2em]">
                  {item === "about" ? "À Propos" : item}
                </a>
              ))}
            </nav>

            <p className="text-gray-400 text-sm md:text-lg max-w-md mb-8 leading-relaxed mx-auto md:mx-0">
              Déterminé, sérieux et autonome. Je conçois des solutions numériques 
              innovantes en alliant design moderne et performance technique.
            </p>
            
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all text-sm shadow-xl shadow-emerald-500/20">
                ME CONTACTER
              </a>
              <a href="mailto:elyserandria29@gmail.com" className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 transition-all text-emerald-400">
                <Mail size={24}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION A PROPOS --- */}
      <section id="about" className="max-w-6xl mx-auto py-8 md:py-12 px-6 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div {...fadeIn} className="md:col-span-2 bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-400 flex items-center gap-3">
              <Cpu className="text-sky-400" /> Mon Profil
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Développeur Full-Stack passionné, j'allie créativité et rigueur technique pour concevoir des solutions numériques innovantes. 
              Mon parcours à l'École Nationale d'Informatique (ENI) m'a forgé une solide expertise en génie logiciel, me permettant de m'adapter rapidement aux technologies de pointe. 
              Je transforme chaque défi technique en une opportunité de créer des outils performants, scalables et à fort impact réel.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-center gap-6">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400"><Users size={20}/></div>
                <div><p className="text-xs text-gray-500 uppercase">Teamwork</p><p className="font-bold">Collaboratif</p></div>
             </div>
             <div className="flex items-center gap-4">
                <div className="p-3 bg-sky-500/20 rounded-xl text-sky-400"><Clock size={20}/></div>
                <div><p className="text-xs text-gray-500 uppercase">Gestion</p><p className="font-bold">Temps optimisé</p></div>
             </div>
             <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl text-white"><Globe size={20}/></div>
                <div><p className="text-xs text-gray-500 uppercase">Langues</p><p className="font-bold">MG, FR, EN</p></div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION FORMATIONS --- */}
      <section id="formations" className="max-w-6xl mx-auto py-8 md:py-12 px-6 z-10 relative">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic">PARCOURS</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { date: "2026", title: "L3 en Informatique Générale", loc: "ENI Fianarantsoa", active: true },
            { date: "2025", title: "L2 en Informatique Générale", loc: "ENI Fianarantsoa", active: false },
            { date: "2024", title: "L1 en Informatique Générale", loc: "ENI Fianarantsoa", active: false },
            { date: "2023", title: "Baccalauréat Scientifique", loc: "Lycée Saint Louis de Gonzague Mahasoabe", active: false },
          ].map((edu, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }} 
              className={`p-8 rounded-[2rem] border ${edu.active ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-zinc-800 bg-zinc-900/20'}`}
            >
              <div className="flex items-center gap-5">
                <div className={`${edu.active ? 'text-emerald-400' : 'text-zinc-600'} flex-shrink-0`}>
                  <GraduationCap size={40} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">{edu.date}</span>
                  <h3 className="text-xl font-bold text-white leading-tight">{edu.title}</h3>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-gray-500 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <p>{edu.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION PROJETS --- */}
      <section id="projets" className="max-w-6xl mx-auto py-8 md:py-12 px-6 z-10 relative">
        <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight text-center md:text-left uppercase">
          Projets & <span className="text-emerald-500">Experience</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* --- STAGE ONG TSINJO AINA --- */}
          <div className="md:col-span-3 group relative p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-zinc-900/40 border border-white/5 hover:border-emerald-500/50 transition-all shadow-2xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-emerald-500/20 rounded-2xl text-emerald-400 shrink-0">
                  <Target size={30} className="md:w-9 md:h-9" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-4xl font-black tracking-tighter text-white leading-tight">
                    ONG TSINJO AINA Fianarantsoa
                  </h3>
                  <div className="md:hidden">
                    <span className="text-[10px] font-mono bg-sky-500/20 text-sky-400 px-3 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                      Stage Professionnel L2
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex">
                <span className="text-[11px] font-mono bg-sky-500/20 text-sky-400 px-4 py-2 rounded-full uppercase tracking-widest whitespace-nowrap">
                  Stage Professionnel L2
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Conception et réalisation d'une application web pour la gestion d'évaluation des données de l'ONG à Fianarantsoa. 
                Architecture moderne séparant le <span className="text-white">Frontend (React)</span> et le <span className="text-white">Backend (Laravel)</span>.
              </p>
              <div className="flex flex-col gap-6 md:items-end justify-end">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 bg-zinc-900/80 text-emerald-400 text-[10px] md:text-[11px] font-black rounded-xl border border-emerald-500/30 uppercase">React JS</span>
                  <span className="px-4 py-1.5 bg-zinc-900/80 text-orange-400 text-[10px] md:text-[11px] font-black rounded-xl border border-orange-500/30 uppercase">Laravel</span>
                  <span className="px-4 py-1.5 bg-zinc-900/80 text-sky-400 text-[10px] md:text-[11px] font-black rounded-xl border border-sky-500/30 uppercase">PostgreSQL</span>
                </div>
                <p className="text-[10px] md:text-[11px] text-zinc-500 italic font-medium tracking-tight">
                  Encadré par Mr. Andoniaina Andrianjatovo.
                </p>
              </div>
            </div>
          </div>

          {/* DevHunt */}
          <div className="md:col-span-2 group relative p-10 rounded-[3rem] bg-zinc-900/40 border border-white/5 hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-yellow-500/10 rounded-2xl text-yellow-500">
                    <Trophy size={32} />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">DevHunt 2025</h3>
                </div>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full uppercase">Compétition</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">Participation au concours national de développement d'application web à l'ENI. Travail intense en équipe sous pression.</p>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] text-zinc-400 bg-white/5 px-4 py-2 rounded-xl border border-white/5 font-mono">Next.js</span>
              <span className="text-[10px] text-zinc-400 bg-white/5 px-4 py-2 rounded-xl border border-white/5 font-mono">Tailwind</span>
            </div>
          </div>

          {/* Gestion de Vente */}
          <div className="group p-10 rounded-[3rem] bg-zinc-900/40 border border-white/5 hover:border-sky-500/50 transition-all flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-sky-500/10 rounded-2xl text-sky-400">
                  <Layout size={28}/>
                </div>
                <h3 className="text-xl font-bold text-white">Gestion de Vente</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">Développé avec React/JS for une interface fluide et réactive.</p>
            </div>
          </div>

          {/* JIRAMA */}
          <div className="p-10 rounded-[3rem] bg-zinc-900/40 border border-white/5 hover:border-emerald-500/50 transition-all flex flex-col gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                <Code2 size={28}/>
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">Paiement JIRAMA</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">Architecture Backend PHP/MySQL optimisée pour la gestion et le suivi de facturation.</p>
          </div>

          {/* Parc Automobile */}
          <div className="p-10 rounded-[3rem] bg-zinc-900/40 border border-white/5 hover:border-sky-500/50 transition-all flex flex-col gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-sky-500/10 rounded-2xl text-sky-400">
                <Database size={28}/>
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">Parc Automobile</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">Application de gestion de parc automobile sous Java et PostgreSQL.</p>
          </div>

          {/* Site vitrine */}
          <div className="p-10 rounded-[3rem] bg-zinc-900/40 border border-white/5 hover:border-emerald-500/50 transition-all flex flex-col gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                <Code2 size={28}/>
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">Site vitrine ONG</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">Architecture Backend Laravel/Postgresql optimisée pour la gestion d'évaluation des données.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION BUT & COMPETENCES --- */}
      <section id="but" className="max-w-6xl mx-auto pt-4 pb-12 px-6 z-10 relative flex flex-col gap-8">
        
        {/* --- OBJECTIF --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 shadow-xl"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black mb-4 flex items-center gap-4 italic uppercase text-white">
              OBJECTIF <Target className="text-emerald-400 animate-pulse" size={32}/>
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
              Devenir un <span className="text-white font-bold">"Ingénieur Logiciel de référence"</span>. 
              Je ne me contente pas de coder, je cherche à construire des architectures performantes, 
              scalables et centrées sur l'utilisateur.
            </p>
          </div>
        </motion.div>

        {/* --- COMPETENCES --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 shadow-2xl"
        >
          <h2 className="text-2xl md:text-4xl font-black mb-10 uppercase tracking-tighter text-center md:text-left">
            MES <span className="text-emerald-500">COMPÉTENCES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* --- FRONTEND --- */}
            <div className="p-6 rounded-3xl bg-[#0a0f1c] border border-white/5 shadow-lg space-y-5 transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-emerald-400 tracking-tight mb-4 text-center border-b border-white/5 pb-2">Frontend</h3>
              <div className="space-y-4">
                {[
                  { label: "React JS", val: "90%", icon: FaReact },
                  { label: "JavaScript", val: "90%", icon: Code2 },
                  { label: "HTML", val: "95%", icon: FaHtml5 },
                  { label: "CSS", val: "85%", icon: FaCss3Alt },
                  { label: "Tailwind CSS", val: "90%", icon: SiTailwindcss }
                ].map((skill, idx) => (
                  <SkillBar key={idx} skill={skill} barColor="bg-emerald-500" />
                ))}
              </div>
            </div>

            {/* --- BACKEND --- */}
            <div className="p-6 rounded-3xl bg-[#0a0f1c] border border-white/5 shadow-lg space-y-5 transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-sky-400 tracking-tight mb-4 text-center border-b border-white/5 pb-2">Frameworks & Backend</h3>
              <div className="space-y-4">
                {[
                  { label: "JAVA", val: "85%", icon: FaJava },
                  { label: "Node.js", val: "80%", icon: FaNodeJs },
                  { label: "PHP", val: "80%", icon: FaPhp },
                  { label: "Laravel", val: "80%", icon: FaLaravel },
                  { label: "Symfony", val: "85%", icon: SiSymfony }
                ].map((skill, idx) => (
                  <SkillBar key={idx} skill={skill} barColor="bg-sky-500" />
                ))}
              </div>
            </div>

            {/* --- DATABASE --- */}
            <div className="p-6 rounded-3xl bg-[#0a0f1c] border border-white/5 shadow-lg space-y-5 transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-yellow-500 tracking-tight mb-4 text-center border-b border-white/5 pb-2">Bases de données</h3>
              <div className="space-y-4">
                {[
                  { label: "MySQL", val: "85%", icon: SiMysql },
                  { label: "PostgreSQL", val: "90%", icon: SiPostgresql },
                  { label: "Sqlite", val: "80%", icon: SiSqlite }
                ].map((skill, idx) => (
                  <SkillBar key={idx} skill={skill} barColor="bg-yellow-500" />
                ))}
              </div>
            </div>

            {/* --- DEVOPS --- */}
            <div className="p-6 rounded-3xl bg-[#0a0f1c] border border-white/5 shadow-lg space-y-5 transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-zinc-400 tracking-tight mb-4 text-center border-b border-white/5 pb-2">DevOps & Outils</h3>
              <div className="space-y-4">
                {[
                  { label: "Docker", val: "60%", icon: SiDocker },
                  { label: "GitHub/Git", val: "90%", icon: Globe },
                  { label: "GitLab", val: "85%", icon: SiGitlab }
                ].map((skill, idx) => (
                  <SkillBar key={idx} skill={skill} barColor="bg-zinc-500" />
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* --- FOOTER & CONTACT --- */}
      <footer id="contact" className="max-w-6xl mx-auto py-12 px-6 border-t border-white/5 z-10 relative">
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 uppercase">Let's <span className="text-emerald-500 italic">Connect</span></h2>
           <p className="text-zinc-500">Disponible pour des stages ou des projets freelances.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-12">
            <div className="flex flex-col items-center p-6 bg-zinc-900/40 rounded-2xl border border-white/5 hover:bg-emerald-500/10 transition-all">
              <Mail className="text-emerald-500 mb-2" size={24}/>
              <span className="text-[10px] text-zinc-500 uppercase mb-1">Email</span>
              <p className="font-bold text-[12px]">elhadari04@gmail.com</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-zinc-900/40 rounded-2xl border border-white/5 hover:bg-sky-500/10 transition-all">
              <Phone className="text-sky-500 mb-2" size={24}/>
              <span className="text-[10px] text-zinc-500 uppercase mb-1">Téléphone</span>
              <p className="font-bold text-[12px]">+261 38 44 218 15</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-zinc-900/40 rounded-2xl border border-white/5 hover:border-blue-600/50 hover:bg-blue-600/5 transition-all group">
              <div className="p-2 bg-blue-600/10 rounded-xl text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                <Facebook size={24} />
              </div>
              <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest mb-1">Facebook</span>
              <a href="https://www.facebook.com/profile.php?id=61580488934908" target="_blank" className="text-blue-400 hover:text-white text-[11px] font-bold underline underline-offset-4">Voir le profil</a>
            </div>

            <div className="flex flex-col items-center p-6 bg-zinc-900/40 rounded-2xl border border-white/5 hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group">
              <div className="p-2 bg-sky-500/10 rounded-xl text-sky-500 mb-2 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest mb-1">LinkedIn</span>
              <a href="https://linkedin.com/in/elhadari" target="_blank" className="text-sky-400 hover:text-white text-[11px] font-bold underline underline-offset-4">Se connecter</a>
            </div>

            <div className="flex flex-col items-center p-6 bg-zinc-900/40 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all group">
              <div className="p-2 bg-white/10 rounded-xl text-white mb-2 group-hover:scale-110 transition-transform">
                <Twitter size={24} />
              </div>
              <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest mb-1">Twitter / X</span>
              <a href="https://twitter.com/Elhadari11" target="_blank" className="text-white/60 hover:text-white text-[11px] font-bold underline underline-offset-4">Suivre</a>
            </div>

            <div className="flex flex-col items-center p-6 bg-zinc-900/40 rounded-2xl border border-white/5 hover:bg-white/5 transition-all">
              <MapPin className="text-zinc-400 mb-2" size={24}/>
              <span className="text-[10px] text-zinc-500 uppercase mb-1">Adresse</span>
              <p className="font-bold text-[12px] text-center">Isada, Fianarantsoa</p>
            </div>
          </div>
      </footer>
    </div>
  );
}

function SkillBar({ skill, barColor }: { skill: any, barColor: string }) {
  const Icon = skill.icon;
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Icon className="text-white/80" size={18} />
          <span className="text-xs font-bold uppercase tracking-wider text-white/90">{skill.label}</span>
        </div>
        <span className="text-[10px] font-mono text-white/70">{skill.val}</span>
      </div>
      <div className="w-full bg-black/30 h-2 rounded-full overflow-hidden border border-white/5">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: skill.val }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`${barColor} h-full rounded-full`} 
        />
      </div>
    </div>
  );
}