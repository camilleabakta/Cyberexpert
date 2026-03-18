import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Lock, 
  Search, 
  Users, 
  MessageSquare, 
  ChevronRight, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  Terminal, 
  Activity,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Send,
  Loader2
} from 'lucide-react';
 
// --- Components ---
 
const CyberBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)`,
          backgroundSize: '50px 50px' 
        }} 
      />
      <motion.div 
        animate={{ 
          y: [0, 1000],
          opacity: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
      />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};
 
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'À Propos', href: '#about' },
    { name: 'Équipe', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];
 
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <Shield className="w-10 h-10 text-emerald-500" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-emerald-500/20 blur-lg rounded-full"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">CYBER<span className="text-emerald-500">EXPERT</span></span>
        </motion.div>
 
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-emerald-400 transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Devis Gratuit
          </motion.button>
        </div>
 
        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
 
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-emerald-500/20 py-10 px-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-white hover:text-emerald-500 transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest">
                Devis Gratuit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
 
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-10 text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase bg-emerald-500/5 border border-emerald-500/20 rounded-full backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            Systèmes Sécurisés en Temps Réel
          </motion.div>
          
          <h1 className="text-6xl md:text-[12rem] font-black tracking-tighter text-white mb-10 leading-[0.8] uppercase">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block"
            >
              Zéro
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600"
            >
              Faille.
            </motion.span>
          </h1>
 
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 mb-14 font-medium leading-relaxed"
          >
            Nous sommes l'unité d'élite spécialisée dans l'offensive et la défense cybernétique. Protégez vos actifs les plus critiques avec CyberExpert.
          </motion.p>
 
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="group relative px-12 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 overflow-hidden shadow-[0_20px_40px_rgba(16,185,129,0.2)]">
              Lancer l'Audit
              <Zap className="w-5 h-5 group-hover:scale-125 transition-transform" />
            </button>
            <button className="px-12 py-6 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest transition-all backdrop-blur-md">
              Expertise SOC
            </button>
          </motion.div>
        </motion.div>
 
        {/* Floating Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-20 hidden xl:block opacity-20"
        >
          <Cpu size={200} className="text-emerald-500" />
        </motion.div>
      </div>
    </section>
  );
};
 
const Services = () => {
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null);
 
  const services = [
    {
      icon: <Terminal className="w-10 h-10" />,
      title: "Pentesting",
      desc: "Simulations d'attaques réelles pour exposer vos vulnérabilités avant qu'elles ne soient exploitées.",
      details: "Nos tests d'intrusion (Pentest) simulent les tactiques, techniques et procédures (TTP) des attaquants réels. Nous couvrons les applications web, les infrastructures cloud (AWS, Azure, GCP), et les réseaux internes. À l'issue de la mission, un rapport détaillé avec des recommandations de remédiation prioritaires vous est remis.",
      tags: ["Web", "API", "Cloud"]
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Audit Code",
      desc: "Analyse statique et dynamique de vos applications pour garantir une sécurité dès la conception.",
      details: "L'audit de code source permet de détecter les vulnérabilités logiques et de sécurité directement dans le cycle de développement. Nous utilisons des outils SAST/DAST de pointe couplés à une analyse manuelle experte pour identifier les failles complexes comme les injections, les problèmes de gestion de session et les erreurs de configuration.",
      tags: ["DevSecOps", "SAST", "DAST"]
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "SOC 24/7",
      desc: "Surveillance continue de votre infrastructure avec détection et réponse automatisée aux menaces.",
      details: "Notre Security Operations Center (SOC) assure une veille constante sur vos actifs numériques. Grâce à l'analyse de journaux (SIEM) et à la détection sur les postes de travail (EDR), nous identifions les comportements anormaux en temps réel. Notre équipe d'analystes qualifie chaque alerte pour une réponse immédiate.",
      tags: ["SIEM", "EDR", "MDR"]
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "Incident Response",
      desc: "Équipe d'intervention rapide pour contenir les brèches et restaurer l'intégrité de vos systèmes.",
      details: "En cas de cyberattaque (Ransomware, Fuite de données), notre équipe CSIRT intervient en urgence. Nous isolons les systèmes compromis, analysons les vecteurs d'entrée (Forensics) et vous accompagnons dans la restauration sécurisée de vos services tout en préservant les preuves numériques.",
      tags: ["Forensics", "Recovery"]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Formation",
      desc: "Programmes de sensibilisation et workshops techniques pour forger une culture de sécurité.",
      details: "Le facteur humain est souvent le maillon faible. Nous proposons des campagnes de phishing simulées, des sessions de sensibilisation pour les cadres et des formations techniques approfondies pour vos administrateurs système et développeurs afin d'ancrer la sécurité dans vos processus.",
      tags: ["Phishing", "Workshops"]
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Compliance",
      desc: "Accompagnement vers les certifications ISO 27001, HDS et conformité RGPD stricte.",
      details: "Nous vous aidons à naviguer dans le paysage complexe des réglementations. De l'analyse d'écarts (Gap Analysis) à la mise en œuvre de mesures techniques et organisationnelles, nous vous préparons aux audits de certification ISO 27001, SOC2 ou à la conformité RGPD.",
      tags: ["ISO", "RGPD", "Audit"]
    }
  ];
 
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            Arsenal de <br /> <span className="text-emerald-500">Protection</span>
          </h2>
          <div className="w-32 h-2 bg-emerald-500 rounded-full mb-8" />
          <p className="text-gray-400 text-2xl max-w-3xl font-medium">
            Des solutions offensives et défensives conçues pour les environnements les plus hostiles.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-emerald-500/50 transition-all group relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                {s.icon}
              </div>
              <div className="mb-8 p-5 inline-block rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-lg">
                {s.icon}
              </div>
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">{s.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-gray-500 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <motion.button 
                onClick={() => setSelectedService(s)}
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-emerald-500 cursor-pointer"
              >
                Détails Techniques <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
 
      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="mb-8 p-6 inline-block rounded-3xl bg-emerald-500/10 text-emerald-500">
                {selectedService.icon}
              </div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">{selectedService.title}</h3>
              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                {selectedService.details}
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                {selectedService.tags.map(tag => (
                  <span key={tag} className="text-xs font-black uppercase tracking-widest px-4 py-2 bg-emerald-500/10 rounded-full text-emerald-500 border border-emerald-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all"
              >
                Fermer
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
 
const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-emerald-500/20 shadow-2xl shadow-emerald-500/10 bg-white/5">
              <img 
                src="/images/about.jpg" 
                alt="Cyber Security Expert" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 p-12 bg-emerald-600 rounded-[2.5rem] shadow-2xl"
            >
              <div className="text-6xl font-black text-white mb-2">100%</div>
              <div className="text-xs uppercase tracking-[0.3em] text-emerald-100 font-black">Intégrité Garantie</div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block">Notre ADN</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] uppercase tracking-tighter">
              L'Élite de la <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Cyber-Défense</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed font-medium">
              Nous ne sommes pas de simples consultants. Nous sommes une unité d'intervention spécialisée dans la protection des infrastructures critiques. Notre mission est de rendre le cyber-espace invulnérable pour nos partenaires.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Offensif", desc: "Nous attaquons pour mieux défendre." },
                { title: "Précis", desc: "Zéro faux positif, 100% de pertinence." },
                { title: "Réactif", desc: "Intervention sous 2 heures garantie." },
                { title: "Certifié", desc: "Experts OSCP, CISSP, GIAC." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
 
const Team = () => {
  const members = [
    {
      name: "ABAKTA Camille",
      role: "Lead Pentester / Founder",
      img: "/images/team-1.jpeg"
    },
    {
      name: "SINGLE Rosa",
      role: "Analyste SOC Senior",
      img: "/images/team-2.jpeg"
    }
  ];
 
  return (
    <section id="team" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase">L'Unité <span className="text-emerald-500">d'Élite</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium">
            Les meilleurs cerveaux de la sécurité réunis pour votre protection.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {members.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 relative border border-white/10">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                  <div className="w-full">
                    <div className="flex gap-4 justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white transition-colors hover:text-emerald-600">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{m.name}</h3>
              <p className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em]">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
// ─── Types ─────────────────────────────────────────────────────────────────
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  nom: string;
  organisation: string;
  email: string;
  mission: string;
  message: string;
}

// ─── Contact (Formspree) ────────────────────────────────────────────────────
const FORMSPREE_ID = 'mlgpadwp';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    organisation: '',
    email: '',
    mission: 'Pentesting Offensif',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formData.nom.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMsg('Veuillez remplir les champs obligatoires : Nom, Email et Message.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.nom,
          organisation: formData.organisation,
          email: formData.email,
          mission: formData.mission,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ nom: '', organisation: '', email: '', mission: 'Pentesting Offensif', message: '' });
      } else {
        const data = await res.json();
        throw new Error(data?.errors?.[0]?.message || 'Erreur Formspree');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Envoi impossible. Réessayez plus tard.');
    }
  };
 
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[4rem] overflow-hidden backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ── Colonne infos ── */}
            <div className="p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.9]">
                Sécurisez <br /> <span className="text-emerald-500">Maintenant</span>.
              </h2>
              <p className="text-gray-400 text-xl mb-16 font-medium">
                Chaque seconde compte. Contactez nos experts pour une évaluation immédiate de votre posture de sécurité.
              </p>
              
              <div className="space-y-10">
                {[
                  { icon: <Mail />, label: "Email", value: "ops@cyberexpert.fr", color: "emerald" },
                  { icon: <Phone />, label: "Urgence 24/7", value: "+228 90 00 00 00", color: "blue" },
                  { icon: <MapPin />, label: "Quartier Général", value: "Lomé, Togo", color: "purple" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center text-white group-hover:bg-emerald-500 transition-all duration-500 shadow-xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mb-2">{item.label}</div>
                      <div className="text-white text-xl font-bold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* ── Colonne formulaire ── */}
            <div className="p-16 lg:p-24 bg-emerald-500/5">
              <div className="space-y-8">
 
                {/* Nom + Organisation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">
                      Nom de l'Agent <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-emerald-500 outline-none transition-all font-bold placeholder:text-gray-600"
                      placeholder="Nom Complet"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">Organisation</label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-emerald-500 outline-none transition-all font-bold placeholder:text-gray-600"
                      placeholder="Nom Entreprise"
                    />
                  </div>
                </div>
 
                {/* Email */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">
                    Canal de Communication <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-emerald-500 outline-none transition-all font-bold placeholder:text-gray-600"
                    placeholder="email@professionnel.com"
                  />
                </div>
 
                {/* Type de mission */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">Type de Mission</label>
                  <select
                    name="mission"
                    value={formData.mission}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-emerald-500 outline-none transition-all font-bold appearance-none cursor-pointer"
                  >
                    <option className="bg-black">Pentesting Offensif</option>
                    <option className="bg-black">Audit de Code</option>
                    <option className="bg-black">Déploiement SOC</option>
                    <option className="bg-black">Réponse Incident</option>
                  </select>
                </div>
 
                {/* Message */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">
                    Détails de la Mission <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-emerald-500 outline-none transition-all font-bold resize-none placeholder:text-gray-600"
                    placeholder="Décrivez les vecteurs d'attaque ou besoins..."
                  />
                </div>
 
                {/* Feedback erreur */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl"
                    >
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <p className="text-red-400 text-sm font-bold">{errorMsg}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
 
                {/* Feedback succès */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-emerald-400 text-sm font-bold">
                        Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
 
                {/* Bouton envoi */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={status === 'loading' || status === 'success'}
                  whileHover={{ scale: status === 'loading' || status === 'success' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' || status === 'success' ? 1 : 0.98 }}
                  className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all text-sm flex items-center justify-center gap-3
                    ${status === 'success'
                      ? 'bg-emerald-700 text-white cursor-default shadow-none'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 cursor-pointer'
                    }
                    ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}
                  `}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Transmission en cours...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Envoyé
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Initialiser la Connexion
                    </>
                  )}
                </motion.button>
 
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
 
const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-black tracking-tighter text-white uppercase">CyberExpert</span>
            </div>
            <p className="text-gray-600 text-sm max-w-xs text-center md:text-left font-medium">
              L'élite de la cybersécurité offensive et défensive. Protéger l'innovation, sécuriser l'avenir.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            <div className="space-y-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Navigation</div>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-bold">Accueil</a>
                <a href="#services" className="text-gray-500 hover:text-white transition-colors text-sm font-bold">Services</a>
                <a href="#about" className="text-gray-500 hover:text-white transition-colors text-sm font-bold">Expertise</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Réseau</div>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-bold">LinkedIn</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-bold">Twitter / X</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-bold">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-white font-black text-2xl mb-2">2026</div>
            <div className="text-gray-600 text-[10px] font-black uppercase tracking-widest">© CyberExpert Systems</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden">
      <CyberBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}