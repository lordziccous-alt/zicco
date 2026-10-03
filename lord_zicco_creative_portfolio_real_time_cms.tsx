import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Palette,
  Sparkles,
  Layers,
  LayoutGrid,
  Send,
  Check,
  X,
  ChevronRight,
  Plus,
  Trash2,
  Edit3,
  Eye,
  Lock,
  LogOut,
  Mail,
  Phone,
  MapPin,
  Globe,
  Bell,
  Search,
  CheckCircle,
  Menu,
  ExternalLink,
  ChevronLeft,
  Settings,
  User,
  Briefcase,
  Sliders,
  FolderPlus,
  ArrowRight,
  Database,
  Cloud,
  Terminal,
  Volume2,
  VolumeX,
  RefreshCw,
  Star,
  ShieldAlert,
  Cpu,
  Feather,
  Layout,
  Instagram,
  Twitter,
  Youtube,
  Award,
  Zap
} from 'lucide-react';

const COLOR_THEME = {
  midnight: '#070B17',
  deepNavy: '#0D1326',
  cardNavy: '#111A30',
  electricBlue: '#4D8DFF',
  violet: '#8B5CF6',
  cyan: '#22D3EE',
  white: '#F8FAFC',
  mutedGray: '#94A3B8',
  border: '#24304A',
};

const INITIAL_CATEGORIES = [
  { id: 'cat-1', name: 'Logo Design', slug: 'logo-design', count: 12 },
  { id: 'cat-2', name: 'Brand Identity', slug: 'brand-identity', count: 8 },
  { id: 'cat-3', name: 'Posters & Flyers', slug: 'posters-flyers', count: 15 },
  { id: 'cat-4', name: 'T-Shirt Design', slug: 't-shirt-design', count: 9 },
  { id: 'cat-5', name: 'Social Media', slug: 'social-media', count: 20 },
  { id: 'cat-6', name: 'UI/UX Design', slug: 'ui-ux', count: 6 },
  { id: 'cat-7', name: 'MCRC Projects', slug: 'mcrc-projects', count: 7 },
];

const INITIAL_PROJECTS = [
  {
    id: 'proj-1',
    title: 'MCRC Robotics Visual Identity',
    slug: 'mcrc-robotics-visual-identity',
    category: 'Brand Identity',
    categorySlug: 'brand-identity',
    description: 'A futuristic visual identity system for MCRC Robotics engineering squad, blending tech cybernetics with bold typography.',
    client: 'MCRC Robotics Ltd.',
    date: '2025-11-10',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Cinema 4D'],
    tags: ['Branding', 'Futuristic', 'Cyberpunk', 'Robotics'],
    projectUrl: 'https://behance.net/lordzicco',
    featured: true,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-2',
    title: 'Neon Cyberpunk Esports Poster',
    slug: 'neon-cyberpunk-esports-poster',
    category: 'Posters & Flyers',
    categorySlug: 'posters-flyers',
    description: 'High-energy key visual poster design for the West Africa Cyber Clash tournament, featuring custom 3D typography and vibrant lighting.',
    client: 'GameFest Ghana',
    date: '2025-08-14',
    tools: ['Photoshop', 'Lightroom', 'Blender'],
    tags: ['Poster', 'Esports', 'Neon', 'Key Art'],
    projectUrl: 'https://instagram.com/lordzicco',
    featured: true,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-3',
    title: 'Aura Premium Streetwear Merch',
    slug: 'aura-premium-streetwear-merch',
    category: 'T-Shirt Design',
    categorySlug: 't-shirt-design',
    description: 'Custom vector graphic apparel collection centered around geometric abstractions and high-contrast typography.',
    client: 'Aura Clothing Co.',
    date: '2025-06-22',
    tools: ['Adobe Illustrator', 'Photoshop'],
    tags: ['Apparel', 'Streetwear', 'Vector Art', 'Merch'],
    projectUrl: 'https://lordzicco.com',
    featured: true,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-4',
    title: 'Vortex Fintech Dashboard & App',
    slug: 'vortex-fintech-dashboard-app',
    category: 'UI/UX Design',
    categorySlug: 'ui-ux',
    description: 'Sleek dark-mode financial analytics workspace for modern crypto & stock traders with interactive charting nodes.',
    client: 'Vortex Global',
    date: '2025-03-18',
    tools: ['Figma', 'Protopie', 'After Effects'],
    tags: ['UI/UX', 'Dashboard', 'Fintech', 'Dark Mode'],
    projectUrl: 'https://dribbble.com',
    featured: false,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-5',
    title: 'Aethelgard Monogram Brand Mark',
    slug: 'aethelgard-monogram-brand-mark',
    category: 'Logo Design',
    categorySlug: 'logo-design',
    description: 'Minimalist luxury monogram design engineered with precise golden ratio geometry for an architectural studio.',
    client: 'Aethelgard Studio',
    date: '2025-01-05',
    tools: ['Illustrator'],
    tags: ['Logo', 'Monogram', 'Minimal', 'Luxury'],
    projectUrl: 'https://behance.net',
    featured: true,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-6',
    title: 'Kuro Gaming Campaign Assets',
    slug: 'kuro-gaming-campaign-assets',
    category: 'Social Media',
    categorySlug: 'social-media',
    description: 'High-converting Instagram carousels, Twitch overlays, and promotional story templates for a global hardware launch.',
    client: 'Kuro Tech',
    date: '2024-12-01',
    tools: ['Photoshop', 'After Effects'],
    tags: ['Social Media', 'Banners', 'Gaming', 'Marketing'],
    projectUrl: 'https://x.com/lordzicco',
    featured: false,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

const INITIAL_SERVICES = [
  { id: 's-1', num: '01', title: 'Logo Design', desc: 'Unique, geometric and timeless logos engineered to establish an iconic brand signature.', icon: 'Palette' },
  { id: 's-2', num: '02', title: 'Brand Identity', desc: 'Complete visual systems including typography, palette specs, stationery, and brand guidelines.', icon: 'Sparkles' },
  { id: 's-3', num: '03', title: 'Poster & Flyer Design', desc: 'Eye-stopping cinematic posters and promotional artwork designed to drive massive engagement.', icon: 'Layers' },
  { id: 's-4', num: '04', title: 'T-Shirt & Apparel', desc: 'Custom vector artwork, typography arrangements, and merchandise for streetwear brands.', icon: 'Zap' },
  { id: 's-5', num: '05', title: 'Social Media Design', desc: 'High-impact digital content, grid strategy, carousels, and high-converting ad creative.', icon: 'Globe' },
  { id: 's-6', num: '06', title: 'UI/UX Design', desc: 'Modern, intuitive digital interfaces, mobile app prototypes, and web design systems.', icon: 'Layout' },
];

const INITIAL_MESSAGES = [
  {
    id: 'msg-1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@brandlab.co',
    subject: 'Complete Rebrand Inquiry',
    message: 'Hey Lord Zicco! Loved your work on the MCRC Robotics project. We are looking to overhaul our fintech visual identity next month. Are you open for freelance availability?',
    status: 'unread',
    createdAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
  },
  {
    id: 'msg-2',
    name: 'David Osei',
    email: 'david@accramusic.com',
    subject: 'Concert Key Art & Posters',
    message: 'Greetings! We need 3 main event posters designed for the upcoming AfroBeat Tech Summit in Accra. Let us know your rates.',
    status: 'read',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
  }
];

const INITIAL_SETTINGS = {
  siteTitle: 'Lord Zicco — Creative Portfolio',
  designerName: 'Lord Zicco',
  role: 'Graphic & Creative Designer',
  email: 'lordzicco@gmail.com',
  phone: '+233 54 123 4567',
  location: 'Accra, Ghana',
  instagram: 'https://instagram.com/lordzicco',
  twitter: 'https://x.com/lordzicco',
  behance: 'https://behance.net/lordzicco',
  youtube: 'https://youtube.com/@lordzicco',
  heroHeadline: 'CREATIVE DESIGN. BOLD IDEAS.',
  heroBio: "I'm Lord Zicco, a graphic designer focused on creating modern, bold and memorable visual identities.",
  expYears: '2+',
  projectsDone: '100+',
  happyClients: '50+',
  quote: "Great design isn't just what it looks like. It's how it makes you feel."
};

function getStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(`lord_zicco_${key}`);
    return saved ? JSON.parse(saved) : fallback;
  } catch (e) {
    return fallback;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(`lord_zicco_${key}`, JSON.stringify(value));
  } catch (e) {
    console.error('Storage error:', e);
  }
}

export default function App() {
  // Global Application State
  const [projects, setProjects] = useState(() => getStorage('projects', INITIAL_PROJECTS));
  const [categories, setCategories] = useState(() => getStorage('categories', INITIAL_CATEGORIES));
  const [services, setServices] = useState(() => getStorage('services', INITIAL_SERVICES));
  const [messages, setMessages] = useState(() => getStorage('messages', INITIAL_MESSAGES));
  const [settings, setSettings] = useState(() => getStorage('settings', INITIAL_SETTINGS));

  // Navigation & View States
  const [activeTab, setActiveTab] = useState('all'); // Filter category
  const [selectedProject, setSelectedProject] = useState(null); // Lightbox project
  const [adminView, setAdminView] = useState(false); // Admin toggle
  const [adminAuthenticated, setAdminAuthenticated] = useState(false); // Auth check
  const [activeAdminTab, setActiveAdminTab] = useState('dashboard');
  const [showDeploymentGuide, setShowDeploymentGuide] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Notifications & Audio
  const [toast, setToast] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef(null);

  // Sync back to local storage
  useEffect(() => setStorage('projects', projects), [projects]);
  useEffect(() => setStorage('categories', categories), [categories]);
  useEffect(() => setStorage('services', services), [services]);
  useEffect(() => setStorage('messages', messages), [messages]);
  useEffect(() => setStorage('settings', settings), [settings]);

  // Audio chime generator for real-time messages
  const playNotificationChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) audioCtxRef.current = new AudioCtx();
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (err) {
      // Audio auto-play safety
    }
  };

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSendMessage = (formData) => {
    const newMessage = {
      id: `msg-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      subject: formData.subject || 'Portfolio Contact Inquiry',
      message: formData.message,
      status: 'unread',
      createdAt: new Date().toISOString(),
    };

    // Update real-time state inbox
    setMessages((prev) => [newMessage, ...prev]);

    // Trigger audio notification & toast
    playNotificationChime();
    showToast('🚀 Message sent successfully to Lord Zicco!');

    // Simulate realtime notification event if admin is looking
    if (adminView) {
      showToast(`🔴 New live message received from ${formData.name}!`, 'info');
    }
  };

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects.filter(p => p.published);
    return projects.filter(
      p => p.published && (p.categorySlug === activeTab || p.category.toLowerCase() === activeTab.toLowerCase())
    );
  }, [projects, activeTab]);

  return (
    <div className="min-h-screen bg-[#070B17] text-[#F8FAFC] font-sans selection:bg-[#4D8DFF] selection:text-white relative overflow-x-hidden">
      
      {/* Background Decorative Ambient Lighting */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#4D8DFF]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/3 right-10 w-[450px] h-[450px] bg-[#8B5CF6]/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-10 left-10 w-[400px] h-[400px] bg-[#22D3EE]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#111A30]/90 backdrop-blur-md border border-[#4D8DFF]/40 shadow-2xl shadow-[#4D8DFF]/20 animate-bounce">
          <div className={`p-2 rounded-lg ${toast.type === 'info' ? 'bg-[#8B5CF6]/20 text-[#8B5CF6]' : 'bg-[#22D3EE]/20 text-[#22D3EE]'}`}>
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{toast.msg}</p>
            <p className="text-xs text-[#94A3B8]">Real-time Event Dispatched</p>
          </div>
        </div>
      )}

      {/* Top Bar Switcher: Public Portfolio vs Admin CMS */}
      <div className="sticky top-0 z-40 bg-[#0D1326]/90 backdrop-blur-lg border-b border-[#24304A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-slate-300">SYSTEM ONLINE • RENDER DEPLOYMENT READY</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowDeploymentGuide(true)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#111A30] hover:bg-[#24304A] text-[#22D3EE] border border-[#22D3EE]/30 transition-all font-mono"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Render & DB Specs</span>
            </button>

            <button
              onClick={() => setAdminView(!adminView)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                adminView
                  ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/30'
                  : 'bg-[#4D8DFF]/10 text-[#4D8DFF] hover:bg-[#4D8DFF]/20 border border-[#4D8DFF]/30'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{adminView ? 'Switch to Public Site' : 'Admin CMS Portal'}</span>
              {messages.filter(m => m.status === 'unread').length > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] bg-red-500 text-white font-bold rounded-full">
                  {messages.filter(m => m.status === 'unread').length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Render Switcher */}
      {adminView ? (
        <AdminPortal
          projects={projects}
          setProjects={setProjects}
          categories={categories}
          setCategories={setCategories}
          services={services}
          setServices={setServices}
          messages={messages}
          setMessages={setMessages}
          settings={settings}
          setSettings={setSettings}
          authenticated={adminAuthenticated}
          setAuthenticated={setAdminAuthenticated}
          activeAdminTab={activeAdminTab}
          setActiveAdminTab={setActiveAdminTab}
          showToast={showToast}
        />
      ) : (
        <PublicPortfolio
          projects={filteredProjects}
          allProjectsCount={projects.length}
          categories={categories}
          services={services}
          settings={settings}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onSendMessage={handleSendMessage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}

      {/* Project Lightbox Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          allProjects={projects}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      )}

      {/* Render.com & Database Setup Modal */}
      {showDeploymentGuide && (
        <DeploymentGuideModal onClose={() => setShowDeploymentGuide(false)} />
      )}
    </div>
  );
}

function PublicPortfolio({
  projects,
  allProjectsCount,
  categories,
  services,
  settings,
  activeTab,
  setActiveTab,
  onSelectProject,
  onSendMessage,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  return (
    <div className="relative z-10">
      {/* 3. STICKY NAVIGATION BAR */}
      <header className="sticky top-12 z-30 bg-[#070B17]/80 backdrop-blur-xl border-b border-[#24304A]/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Monogram */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4D8DFF] via-[#8B5CF6] to-[#22D3EE] p-[1.5px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#070B17] rounded-[10.5px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4D8DFF] to-[#22D3EE]">
                LZ
              </div>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#4D8DFF] transition-colors">
                {settings.designerName}
              </span>
              <p className="text-[10px] text-[#94A3B8] tracking-widest uppercase font-mono">Creative Studio</p>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#4D8DFF] to-[#8B5CF6] text-white font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-[#4D8DFF]/25 transition-all"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#111A30] text-white border border-[#24304A]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0D1326] border-b border-[#24304A] px-6 py-6 space-y-4">
            <a onClick={() => setMobileMenuOpen(false)} href="#home" className="block text-slate-200 py-2 border-b border-[#24304A]">Home</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#portfolio" className="block text-slate-200 py-2 border-b border-[#24304A]">Portfolio</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="block text-slate-200 py-2 border-b border-[#24304A]">About</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#services" className="block text-slate-200 py-2 border-b border-[#24304A]">Services</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#process" className="block text-slate-200 py-2 border-b border-[#24304A]">Process</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="block text-slate-200 py-2">Contact</a>
          </div>
        )}
      </header>

      {/* 4. HERO SECTION */}
      <section id="home" className="pt-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111A30] border border-[#24304A] text-xs font-mono text-[#22D3EE]">
              <span className="w-2 h-2 rounded-full bg-[#4D8DFF] animate-pulse" />
              — GRAPHIC & CREATIVE DESIGNER
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              CREATIVE DESIGN.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D8DFF] via-[#8B5CF6] to-[#22D3EE]">
                BOLD IDEAS.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl leading-relaxed">
              {settings.heroBio}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4D8DFF] to-[#8B5CF6] text-white font-semibold flex items-center gap-2 hover:shadow-xl hover:shadow-[#4D8DFF]/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Portfolio</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-[#111A30] text-white border border-[#24304A] font-semibold hover:bg-[#24304A] transition-all"
              >
                Let's Work Together
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-6 border-t border-[#24304A]/60 flex items-center gap-6 text-[#94A3B8]">
              <span className="text-xs font-mono uppercase tracking-wider">Follow On</span>
              <div className="flex items-center gap-4">
                <a href={settings.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#111A30] hover:text-[#22D3EE] transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href={settings.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#111A30] hover:text-[#22D3EE] transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href={settings.behance} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#111A30] hover:text-[#22D3EE] transition-colors"><Globe className="w-4 h-4" /></a>
                <a href={settings.youtube} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#111A30] hover:text-[#22D3EE] transition-colors"><Youtube className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

          {/* Hero Right Cinematic Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#111A30] to-[#0D1326] p-2 border border-[#24304A] shadow-2xl shadow-[#4D8DFF]/10 group">
              
              {/* Main Image Overlay Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                  alt="Lord Zicco"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlays for Rim Lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B17] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4D8DFF]/30 via-transparent to-[#8B5CF6]/30 mix-blend-color-dodge" />
                
                {/* Handwritten Art Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070B17]/80 backdrop-blur-md border border-[#24304A]/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#22D3EE] font-mono uppercase tracking-widest">CREATIVE SPECS</p>
                      <h4 className="text-lg font-black text-white">DESIGN • BUILD • INSPIRE</h4>
                    </div>
                    <Sparkles className="w-6 h-6 text-[#8B5CF6] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating Floating Badges */}
              <div className="absolute top-8 -left-6 bg-[#111A30]/90 backdrop-blur-lg border border-[#4D8DFF]/40 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4D8DFF]/20 flex items-center justify-center text-[#4D8DFF]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Top Rated</p>
                  <p className="text-[10px] text-[#94A3B8]">Graphic Designer</p>
                </div>
              </div>

              <div className="absolute bottom-20 -right-6 bg-[#111A30]/90 backdrop-blur-lg border border-[#8B5CF6]/40 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">100+ Delivered</p>
                  <p className="text-[10px] text-[#94A3B8]">Brand Identites</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-20 bg-[#0D1326]/50 border-t border-[#24304A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-2">— SELECTED WORK</p>
              <h2 className="text-3xl sm:text-5xl font-black text-white">MY PORTFOLIO</h2>
            </div>
            <p className="text-[#94A3B8] text-sm max-w-md mt-4 md:mt-0">
              Explore recent graphic design projects across brand identity, posters, apparel, and digital design.
            </p>
          </div>

          {/* 8. PORTFOLIO FILTER CATEGORIES */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#4D8DFF] to-[#8B5CF6] text-white shadow-lg shadow-[#4D8DFF]/20'
                  : 'bg-[#111A30] text-[#94A3B8] hover:text-white border border-[#24304A]'
              }`}
            >
              ALL ({allProjectsCount})
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.slug || cat.name.toLowerCase())}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeTab === cat.slug || activeTab === cat.name.toLowerCase()
                    ? 'bg-gradient-to-r from-[#4D8DFF] to-[#8B5CF6] text-white shadow-lg shadow-[#4D8DFF]/20'
                    : 'bg-[#111A30] text-[#94A3B8] hover:text-white border border-[#24304A]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* 9. PORTFOLIO GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-2xl bg-[#111A30] border border-[#24304A] overflow-hidden hover:border-[#4D8DFF]/60 hover:shadow-2xl hover:shadow-[#4D8DFF]/15 transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#070B17]">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111A30] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold bg-[#070B17]/80 backdrop-blur-md text-[#22D3EE] border border-[#22D3EE]/30">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#8B5CF6] text-white flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" /> Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#4D8DFF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] line-clamp-2 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#24304A] text-xs">
                    <span className="text-[#94A3B8] font-mono">{project.client}</span>
                    <div className="flex items-center gap-1 text-[#4D8DFF] font-semibold group-hover:translate-x-1 transition-transform">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-16 bg-[#111A30]/40 rounded-2xl border border-[#24304A]">
              <Layers className="w-12 h-12 text-[#94A3B8] mx-auto mb-3 opacity-50" />
              <p className="text-lg font-semibold text-white">No projects found</p>
              <p className="text-xs text-[#94A3B8] mt-1">There are no published items in this portfolio category yet.</p>
            </div>
          )}

        </div>
      </section>

      {/* 12. ABOUT SECTION */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-[#24304A] bg-[#111A30] aspect-[4/5] relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
                alt="Lord Zicco About"
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B17] via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-2">— ABOUT LORD ZICCO</p>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                TURNING IDEAS INTO<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D8DFF] to-[#22D3EE]">
                  VISUAL EXPERIENCES.
                </span>
              </h2>
            </div>

            <p className="text-[#94A3B8] leading-relaxed text-base sm:text-lg">
              I'm a graphic designer with a passion for turning ideas into powerful visual experiences. I specialize in branding, digital design, poster design, apparel and UI/UX.
            </p>

            {/* Dynamic Statistics Counters */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-y border-[#24304A] py-8">
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#4D8DFF] to-[#8B5CF6]">
                  {settings.expYears}
                </h3>
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider font-mono mt-1">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]">
                  {settings.projectsDone}
                </h3>
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider font-mono mt-1">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#4D8DFF]">
                  {settings.happyClients}
                </h3>
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider font-mono mt-1">Happy Clients</p>
              </div>
            </div>

            {/* Quote Card */}
            <blockquote className="p-6 rounded-2xl bg-[#111A30] border-l-4 border-[#4D8DFF] text-white italic text-base">
              "{settings.quote}"
            </blockquote>
          </div>

        </div>
      </section>

      {/* 13. SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#0D1326]/50 border-t border-[#24304A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-2">— WHAT I DO</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white">CREATIVE SERVICES</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-[#111A30] border border-[#24304A] hover:border-[#8B5CF6]/60 hover:shadow-xl hover:shadow-[#8B5CF6]/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#22D3EE] font-bold">{service.num}</span>
                    <div className="p-3 rounded-xl bg-[#070B17] border border-[#24304A] text-[#4D8DFF] group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8B5CF6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#24304A] flex items-center justify-between text-xs text-[#94A3B8] group-hover:text-white">
                  <span>Explore Workflow</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 14. DESIGN PROCESS SECTION */}
      <section id="process" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-2">— MY PROCESS</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white">HOW I WORK</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            { step: '01', title: 'DISCOVER', desc: "Understand the client's needs and goals." },
            { step: '02', title: 'CONCEPT', desc: 'Explore ideas and develop creative directions.' },
            { step: '03', title: 'DESIGN', desc: 'Transform the concept into the final design.' },
            { step: '04', title: 'REFINE', desc: 'Improve the design using client feedback.' },
            { step: '05', title: 'DELIVER', desc: 'Deliver polished final production files.' },
          ].map((item, idx) => (
            <div key={idx} className="relative p-6 rounded-2xl bg-[#111A30] border border-[#24304A] text-center space-y-3 group hover:border-[#22D3EE]/50 transition-all">
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4D8DFF] to-[#22D3EE] font-mono">
                {item.step}
              </span>
              <h4 className="text-lg font-bold text-white tracking-wider">{item.title}</h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 15. CONTACT SECTION & 16. REAL CONTACT FORM */}
      <section id="contact" className="py-24 bg-[#0D1326]/80 border-t border-[#24304A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-4xl sm:text-6xl font-black leading-none text-white">
                LET'S CREATE<br />
                SOMETHING<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D8DFF] via-[#8B5CF6] to-[#22D3EE]">
                  GREAT.
                </span>
              </h2>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-[#94A3B8]">
                  <div className="p-3 rounded-xl bg-[#111A30] text-[#4D8DFF] border border-[#24304A]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8] uppercase">Email Directly</p>
                    <p className="text-white font-medium">{settings.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#94A3B8]">
                  <div className="p-3 rounded-xl bg-[#111A30] text-[#8B5CF6] border border-[#24304A]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8] uppercase">Phone / WhatsApp</p>
                    <p className="text-white font-medium">{settings.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#94A3B8]">
                  <div className="p-3 rounded-xl bg-[#111A30] text-[#22D3EE] border border-[#24304A]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8] uppercase">Location</p>
                    <p className="text-white font-medium">{settings.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Container */}
            <div className="lg:col-span-7">
              <ContactForm onSubmit={onSendMessage} />
            </div>

          </div>
        </div>
      </section>

      {/* 37. FOOTER */}
      <footer className="py-12 bg-[#070B17] border-t border-[#24304A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-base">Lord Zicco</span>
            <span>•</span>
            <span>Graphic & Creative Designer</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <div>
            © 2026 Lord Zicco. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      onSubmit(formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitting(false);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-[#111A30] border border-[#24304A] space-y-6">
      <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-2">Your Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-[#070B17] border border-[#24304A] text-white focus:outline-none focus:border-[#4D8DFF] transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-2">Your Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-[#070B17] border border-[#24304A] text-white focus:outline-none focus:border-[#4D8DFF] transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-2">Subject</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Logo Design / Rebrand Project"
          className="w-full px-4 py-3 rounded-xl bg-[#070B17] border border-[#24304A] text-white focus:outline-none focus:border-[#4D8DFF] transition-colors text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-2">Message *</label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about your project scope, timeline, and vision..."
          className="w-full px-4 py-3 rounded-xl bg-[#070B17] border border-[#24304A] text-white focus:outline-none focus:border-[#4D8DFF] transition-colors text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4D8DFF] via-[#8B5CF6] to-[#22D3EE] text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#4D8DFF]/25 disabled:opacity-50"
      >
        {submitting ? (
          <RefreshCw className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

function ProjectDetailModal({ project, allProjects, onClose, onSelectProject }) {
  const [activeImg, setActiveImg] = useState(project.coverImage);

  // Find next and prev project
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = allProjects[currentIndex - 1] || allProjects[allProjects.length - 1];
  const nextProject = allProjects[currentIndex + 1] || allProjects[0];

  useEffect(() => {
    setActiveImg(project.coverImage);
  }, [project]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0D1326] border border-[#24304A] rounded-3xl overflow-hidden shadow-2xl my-8">
        
        {/* Header bar */}
        <div className="p-6 border-b border-[#24304A] flex items-center justify-between bg-[#070B17]">
          <div>
            <span className="text-xs font-mono uppercase text-[#22D3EE]">{project.category}</span>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#111A30] text-[#94A3B8] hover:text-white border border-[#24304A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Main Gallery Display */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-[#070B17] border border-[#24304A]">
              <img src={activeImg} alt="Gallery view" className="w-full h-full object-contain" />
            </div>

            {/* Thumbnail selector */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(imgUrl)}
                    className={`w-20 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImg === imgUrl ? 'border-[#4D8DFF] scale-105' : 'border-[#24304A] opacity-60'
                    }`}
                  >
                    <img src={imgUrl} alt="Thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-6 border-t border-[#24304A]">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-bold text-white">Project Overview</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{project.description}</p>
            </div>

            <div className="space-y-4 bg-[#111A30] p-6 rounded-2xl border border-[#24304A] text-xs">
              <div>
                <p className="text-[#94A3B8] uppercase font-mono">Client</p>
                <p className="text-white font-semibold text-sm">{project.client}</p>
              </div>

              <div>
                <p className="text-[#94A3B8] uppercase font-mono">Completed Date</p>
                <p className="text-white font-semibold">{project.date}</p>
              </div>

              <div>
                <p className="text-[#94A3B8] uppercase font-mono">Tools Used</p>
                <p className="text-[#22D3EE] font-medium">{project.tools ? project.tools.join(', ') : 'Adobe Suite'}</p>
              </div>

              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4D8DFF] text-white font-semibold w-full justify-center"
                >
                  <span>Live Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-[#24304A] text-xs">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="flex items-center gap-2 text-[#94A3B8] hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev: {prevProject.title}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center gap-2 text-[#94A3B8] hover:text-white"
            >
              <span>Next: {nextProject.title}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function AdminPortal({
  projects,
  setProjects,
  categories,
  setCategories,
  services,
  setServices,
  messages,
  setMessages,
  settings,
  setSettings,
  authenticated,
  setAuthenticated,
  activeAdminTab,
  setActiveAdminTab,
  showToast
}) {
  const [loginEmail, setLoginEmail] = useState('lordzicco@gmail.com');
  const [loginPass, setLoginPass] = useState('admin123');

  // Handle Login Authentication
  if (!authenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#111A30] border border-[#24304A] space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#4D8DFF] to-[#8B5CF6] mx-auto flex items-center justify-center font-black text-xl text-white">
              LZ
            </div>
            <h2 className="text-2xl font-black text-white">CMS Admin Access</h2>
            <p className="text-xs text-[#94A3B8]">Sign in to manage projects, messages & settings</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setAuthenticated(true);
              showToast('🔑 Successfully authenticated into Lord Zicco Admin CMS');
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">Admin Email</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#070B17] border border-[#24304A] text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">Password</label>
              <input
                type="password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#070B17] border border-[#24304A] text-white text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#4D8DFF] to-[#8B5CF6] text-white font-bold text-sm shadow-lg shadow-[#4D8DFF]/20 hover:opacity-90 transition-all"
            >
              Sign In to Dashboard
            </button>
          </form>

          <p className="text-[11px] text-[#94A3B8] text-center font-mono">
            Demo Mode Enabled: Click Sign In directly
          </p>
        </div>
      </div>
    );
  }

  const unreadCount = messages.filter((m) => m.status === 'unread').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Admin Sidebar Navigation */}
        <aside className="lg:col-span-3 space-y-2">
          <div className="p-4 rounded-2xl bg-[#111A30] border border-[#24304A] mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4D8DFF]/20 text-[#4D8DFF] flex items-center justify-center font-bold">
                LZ
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{settings.designerName}</h4>
                <p className="text-[10px] text-[#22D3EE] font-mono">System Admin</p>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { id: 'dashboard', label: 'Dashboard Stats', icon: LayoutGrid },
              { id: 'portfolio', label: 'Portfolio Projects', icon: Briefcase, badge: projects.length },
              { id: 'categories', label: 'Portfolio Categories', icon: Layers, badge: categories.length },
              { id: 'messages', label: 'Messages Inbox', icon: Mail, badge: unreadCount, badgeColor: 'bg-red-500' },
              { id: 'services', label: 'Services Manager', icon: Sparkles },
              { id: 'settings', label: 'Site Settings', icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeAdminTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveAdminTab(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#4D8DFF] text-white shadow-lg shadow-[#4D8DFF]/20'
                      : 'bg-[#111A30] text-[#94A3B8] hover:text-white border border-[#24304A]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${item.badgeColor || 'bg-[#24304A] text-white'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold text-red-400 bg-[#111A30] border border-[#24304A] hover:bg-red-500/10 transition-all mt-6"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out Admin</span>
          </button>
        </aside>

        {/* Main Admin Content Body */}
        <main className="lg:col-span-9 space-y-6">
          {activeAdminTab === 'dashboard' && (
            <AdminDashboard
              projects={projects}
              messages={messages}
              categories={categories}
              setActiveAdminTab={setActiveAdminTab}
            />
          )}

          {activeAdminTab === 'portfolio' && (
            <AdminPortfolioManager
              projects={projects}
              setProjects={setProjects}
              categories={categories}
              showToast={showToast}
            />
          )}

          {activeAdminTab === 'categories' && (
            <AdminCategoryManager
              categories={categories}
              setCategories={setCategories}
              showToast={showToast}
            />
          )}

          {activeAdminTab === 'messages' && (
            <AdminMessagesInbox
              messages={messages}
              setMessages={setMessages}
              showToast={showToast}
            />
          )}

          {activeAdminTab === 'services' && (
            <AdminServicesManager
              services={services}
              setServices={setServices}
              showToast={showToast}
            />
          )}

          {activeAdminTab === 'settings' && (
            <AdminSettingsEditor
              settings={settings}
              setSettings={setSettings}
              showToast={showToast}
            />
          )}
        </main>

      </div>
    </div>
  );
}

function AdminDashboard({ projects, messages, categories, setActiveAdminTab }) {
  const publishedCount = projects.filter(p => p.published).length;
  const featuredCount = projects.filter(p => p.featured).length;
  const unreadCount = messages.filter(m => m.status === 'unread').length;

  return (
    <div className="space-y-6">
      {/* Overview Stat Cards */}
      <div className="grid sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#111A30] border border-[#24304A]">
          <p className="text-xs text-[#94A3B8] font-mono uppercase">Total Projects</p>
          <h3 className="text-3xl font-black text-white mt-1">{projects.length}</h3>
        </div>

        <div className="p-5 rounded-2xl bg-[#111A30] border border-[#24304A]">
          <p className="text-xs text-[#94A3B8] font-mono uppercase">Published</p>
          <h3 className="text-3xl font-black text-[#22D3EE] mt-1">{publishedCount}</h3>
        </div>

        <div className="p-5 rounded-2xl bg-[#111A30] border border-[#24304A]">
          <p className="text-xs text-[#94A3B8] font-mono uppercase">Featured</p>
          <h3 className="text-3xl font-black text-[#8B5CF6] mt-1">{featuredCount}</h3>
        </div>

        <div className="p-5 rounded-2xl bg-[#111A30] border border-[#24304A]">
          <p className="text-xs text-[#94A3B8] font-mono uppercase">Unread Messages</p>
          <h3 className="text-3xl font-black text-red-400 mt-1">{unreadCount}</h3>
        </div>
      </div>

      {/* Live Activity & Unread Messages Alert */}
      <div className="p-6 rounded-2xl bg-[#111A30] border border-[#24304A] space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#22D3EE]" />
            <span>Recent Contact Enquiries</span>
          </h3>
          <button
            onClick={() => setActiveAdminTab('messages')}
            className="text-xs text-[#4D8DFF] hover:underline font-mono"
          >
            View All Messages →
          </button>
        </div>

        <div className="space-y-3">
          {messages.slice(0, 3).map((msg) => (
            <div
              key={msg.id}
              className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
                msg.status === 'unread'
                  ? 'bg-[#070B17] border-red-500/40'
                  : 'bg-[#070B17]/50 border-[#24304A]'
              }`}
            >
              <div>
                <p className="font-bold text-white">{msg.name} ({msg.email})</p>
                <p className="text-[#94A3B8] text-ellipsis max-w-md truncate">{msg.message}</p>
              </div>
              <span className="text-[10px] text-[#94A3B8] font-mono">
                {new Date(msg.createdAt).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminPortfolioManager({ projects, setProjects, categories, showToast }) {
  const [editingProject, setEditingProject] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  const [form, setForm] = useState({
    title: '',
    category: categories[0]?.name || 'Logo Design',
    description: '',
    client: '',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    published: true,
  });

  const handleSave = (e) => {
    e.preventDefault();
    if (editingProject) {
      setProjects(
        projects.map((p) =>
          p.id === editingProject.id
            ? { ...p, ...form, categorySlug: form.category.toLowerCase().replace(/\s+/g, '-') }
            : p
        )
      );
      showToast('Project updated successfully!');
    } else {
      const newProj = {
        id: `proj-${Date.now()}`,
        slug: form.title.toLowerCase().replace(/\s+/g, '-'),
        categorySlug: form.category.toLowerCase().replace(/\s+/g, '-'),
        date: new Date().toISOString().split('T')[0],
        tools: ['Adobe Illustrator', 'Photoshop'],
        gallery: [form.coverImage],
        ...form,
      };
      setProjects([newProj, ...projects]);
      showToast('New project created & published!');
    }
    setEditingProject(null);
    setIsCreating(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Portfolio Manager</h3>
        {!isCreating && !editingProject && (
          <button
            onClick={() => {
              setForm({
                title: '',
                category: categories[0]?.name || 'Logo Design',
                description: '',
                client: '',
                coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
                featured: false,
                published: true,
              });
              setIsCreating(true);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4D8DFF] text-white text-xs font-semibold"
          >
            <Plus className="w-4 h-4" /> Add New Project
          </button>
        )}
      </div>

      {(isCreating || editingProject) ? (
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-[#111A30] border border-[#24304A] space-y-4">
          <h4 className="text-lg font-bold text-white">
            {editingProject ? 'Edit Project' : 'Create New Project'}
          </h4>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-[#94A3B8] mb-1">Project Title</label>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#070B17] border border-[#24304A] text-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#94A3B8] mb-1">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#070B17] border border-[#24304A] text-white text-xs"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#94A3B8] mb-1">Cover Image URL</label>
            <input
              type="text"
              value={form.coverImage}
              onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#070B17] border border-[#24304A] text-white text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#94A3B8] mb-1">Client Name</label>
            <input
              type="text"
              value={form.client}
              onChange={(e) => setForm({ ...form, client: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#070B17] border border-[#24304A] text-white text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#94A3B8] mb-1">Description</label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#070B17] border border-[#24304A] text-white text-xs"
            />
          </div>

          <div className="flex gap-6 pt-2 text-xs">
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              />
              Featured on Homepage
            </label>

            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => setForm({ ...form, published: e.target.checked })}
              />
              Published (Visible to Visitors)
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="submit" className="px-5 py-2 rounded-lg bg-[#4D8DFF] text-white text-xs font-bold">
              Save Project
            </button>
            <button
              type="button"
              onClick={() => { setIsCreating(false); setEditingProject(null); }}
              className="px-5 py-2 rounded-lg bg-[#24304A] text-[#94A3B8] text-xs"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="rounded-2xl bg-[#111A30] border border-[#24304A] overflow-hidden">
          <table className="w-full text-left text-xs text-[#94A3B8]">
            <thead className="bg-[#070B17] text-white font-mono uppercase border-b border-[#24304A]">
              <tr>
                <th className="p-4">Project</th>
                <th className="p-4">Category</th>
                <th className="p-4">Client</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#24304A]">
              {projects.map((proj) => (
                <tr key={proj.id} className="hover:bg-[#0D1326]">
                  <td className="p-4 font-bold text-white flex items-center gap-3">
                    <img src={proj.coverImage} className="w-10 h-8 rounded object-cover" alt="" />
                    <span>{proj.title}</span>
                  </td>
                  <td className="p-4">{proj.category}</td>
                  <td className="p-4">{proj.client}</td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] ${proj.published ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-500/20 text-gray-400'}`}>
                      {proj.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => { setEditingProject(proj); setForm(proj); }}
                      className="p-1.5 rounded bg-[#24304A] text-white"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setProjects(projects.filter(p => p.id !== proj.id));
                        showToast('Project deleted');
                      }}
                      className="p-1.5 rounded bg-red-500/20 text-red-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function AdminCategoryManager({ categories, setCategories, showToast }) {
  const [newCatName, setNewCatName] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCatName) return;
    const newCat = {
      id: `cat-${Date.now()}`,
      name: newCatName,
      slug: newCatName.toLowerCase().replace(/\s+/g, '-'),
      count: 0,
    };
    setCategories([...categories, newCat]);
    setNewCatName('');
    showToast(`New section "${newCatName}" added to live public filters!`);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">Dynamic Category Manager</h3>

      <form onSubmit={handleAdd} className="flex gap-3 p-4 rounded-2xl bg-[#111A30] border border-[#24304A]">
        <input
          type="text"
          value={newCatName}
          onChange={(e) => setNewCatName(e.target.value)}
          placeholder="e.g., Motion Graphics, School Projects..."
          className="flex-1 px-4 py-2 rounded-xl bg-[#070B17] border border-[#24304A] text-white text-xs"
        />
        <button type="submit" className="px-5 py-2 rounded-xl bg-[#4D8DFF] text-white font-bold text-xs flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create Category
        </button>
      </form>

      <div className="grid sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="p-4 rounded-xl bg-[#111A30] border border-[#24304A] flex items-center justify-between">
            <div>
              <p className="font-bold text-white text-sm">{cat.name}</p>
              <p className="text-[10px] text-[#22D3EE] font-mono">Slug: {cat.slug}</p>
            </div>

            <button
              onClick={() => {
                setCategories(categories.filter(c => c.id !== cat.id));
                showToast('Category removed');
              }}
              className="p-2 rounded-lg bg-red-500/20 text-red-400"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminMessagesInbox({ messages, setMessages, showToast }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">Messages & Enquiries Inbox</h3>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-6 rounded-2xl border space-y-3 ${
              msg.status === 'unread'
                ? 'bg-[#111A30] border-red-500/50 shadow-lg shadow-red-500/5'
                : 'bg-[#0D1326] border-[#24304A]'
            }`}
          >
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-white text-base">{msg.name}</span>
                <span className="text-[#94A3B8] ml-2">({msg.email})</span>
              </div>
              <span className="text-[#22D3EE] font-mono">{new Date(msg.createdAt).toLocaleString()}</span>
            </div>

            <p className="text-xs font-bold text-[#4D8DFF]">Subject: {msg.subject}</p>
            <p className="text-sm text-[#94A3B8] bg-[#070B17] p-4 rounded-xl border border-[#24304A]">
              {msg.message}
            </p>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  setMessages(
                    messages.map((m) =>
                      m.id === msg.id ? { ...m, status: m.status === 'unread' ? 'read' : 'unread' } : m
                    )
                  );
                  showToast('Message status updated');
                }}
                className="text-xs text-[#22D3EE] underline"
              >
                Mark as {msg.status === 'unread' ? 'Read' : 'Unread'}
              </button>

              <button
                onClick={() => {
                  setMessages(messages.filter((m) => m.id !== msg.id));
                  showToast('Message deleted');
                }}
                className="text-xs text-red-400 hover:underline"
              >
                Delete Message
              </button>
            </div>
          </div>
        ))}

        {messages.length === 0 && (
          <p className="text-center py-12 text-[#94A3B8] text-sm">Inbox is empty.</p>
        )}
      </div>
    </div>
  );
}

function AdminServicesManager({ services, setServices, showToast }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">Services Editor</h3>
      <div className="space-y-4">
        {services.map((serv, index) => (
          <div key={serv.id} className="p-4 rounded-xl bg-[#111A30] border border-[#24304A] space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[#22D3EE] text-xs">{serv.num}</span>
              <input
                type="text"
                value={serv.title}
                onChange={(e) => {
                  const updated = [...services];
                  updated[index].title = e.target.value;
                  setServices(updated);
                }}
                className="flex-1 px-3 py-1.5 rounded bg-[#070B17] border border-[#24304A] text-white text-xs font-bold"
              />
            </div>
            <textarea
              rows={2}
              value={serv.desc}
              onChange={(e) => {
                const updated = [...services];
                updated[index].desc = e.target.value;
                setServices(updated);
              }}
              className="w-full px-3 py-2 rounded bg-[#070B17] border border-[#24304A] text-[#94A3B8] text-xs"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminSettingsEditor({ settings, setSettings, showToast }) {
  const [form, setForm] = useState(settings);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSettings(form);
        showToast('Site settings updated!');
      }}
      className="p-6 rounded-2xl bg-[#111A30] border border-[#24304A] space-y-4"
    >
      <h3 className="text-xl font-bold text-white">General Site Settings</h3>

      <div className="grid md:grid-cols-2 gap-4 text-xs">
        <div>
          <label className="block text-[#94A3B8] mb-1">Designer Name</label>
          <input
            type="text"
            value={form.designerName}
            onChange={(e) => setForm({ ...form, designerName: e.target.value })}
            className="w-full px-3 py-2 rounded bg-[#070B17] border border-[#24304A] text-white"
          />
        </div>

        <div>
          <label className="block text-[#94A3B8] mb-1">Contact Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3 py-2 rounded bg-[#070B17] border border-[#24304A] text-white"
          />
        </div>

        <div>
          <label className="block text-[#94A3B8] mb-1">Phone Number</label>
          <input
            type="text"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-3 py-2 rounded bg-[#070B17] border border-[#24304A] text-white"
          />
        </div>

        <div>
          <label className="block text-[#94A3B8] mb-1">Location</label>
          <input
            type="text"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full px-3 py-2 rounded bg-[#070B17] border border-[#24304A] text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-[#94A3B8] mb-1 text-xs">Hero Bio Text</label>
        <textarea
          rows={3}
          value={form.heroBio}
          onChange={(e) => setForm({ ...form, heroBio: e.target.value })}
          className="w-full px-3 py-2 rounded bg-[#070B17] border border-[#24304A] text-white text-xs"
        />
      </div>

      <button type="submit" className="px-6 py-2.5 rounded-xl bg-[#4D8DFF] text-white font-bold text-xs">
        Save Settings
      </button>
    </form>
  );
}

function DeploymentGuideModal({ onClose }) {
  const [tab, setTab] = useState('render');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div className="w-full max-w-4xl bg-[#0D1326] border border-[#24304A] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-[#24304A] flex items-center justify-between bg-[#070B17]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#22D3EE]/10 text-[#22D3EE]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Full-Stack Render Deployment Specifications</h3>
              <p className="text-xs text-[#94A3B8]">Express API, PostgreSQL Schema, and Render.com Config</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-lg bg-[#111A30] text-[#94A3B8] hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Subnav */}
        <div className="flex border-b border-[#24304A] bg-[#111A30] text-xs font-mono">
          <button
            onClick={() => setTab('render')}
            className={`px-6 py-3 border-b-2 font-bold ${
              tab === 'render' ? 'border-[#4D8DFF] text-white' : 'border-transparent text-[#94A3B8]'
            }`}
          >
            Render.com Setup Guide
          </button>
          <button
            onClick={() => setTab('schema')}
            className={`px-6 py-3 border-b-2 font-bold ${
              tab === 'schema' ? 'border-[#4D8DFF] text-white' : 'border-transparent text-[#94A3B8]'
            }`}
          >
            PostgreSQL Schema SQL
          </button>
          <button
            onClick={() => setTab('env')}
            className={`px-6 py-3 border-b-2 font-bold ${
              tab === 'env' ? 'border-[#4D8DFF] text-white' : 'border-transparent text-[#94A3B8]'
            }`}
          >
            .env Variables
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-[#94A3B8] space-y-4">
          {tab === 'render' && (
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm">Step-by-Step Render.com Deployment:</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>Create a PostgreSQL Database instance on <strong>Render.com</strong> or <strong>Supabase</strong>.</li>
                <li>Copy the connection string (e.g., <code>postgres://user:pass@ep-xyz.render.com/lordzicco_db</code>).</li>
                <li>Deploy a Node.js Express service on Render, pointing to your repo.</li>
                <li>Set the environment variables as detailed in the <code>.env</code> tab.</li>
                <li>Run <code>npm run migrate</code> to seed the PostgreSQL tables.</li>
              </ol>
            </div>
          )}

          {tab === 'schema' && (
            <pre className="p-4 rounded-xl bg-[#070B17] border border-[#24304A] text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`-- LORD ZICCO PORTFOLIO POSTGRESQL SCHEMA

CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE portfolio_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  display_order INT DEFAULT 0
);

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID REFERENCES portfolio_sections(id) ON DELETE SET NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  client VARCHAR(100),
  cover_image TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  display_order INT DEFAULT 0
);

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  subject VARCHAR(200),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'unread',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`}
            </pre>
          )}

          {tab === 'env' && (
            <pre className="p-4 rounded-xl bg-[#070B17] border border-[#24304A] text-slate-300 overflow-x-auto text-[11px]">
{`DATABASE_URL=postgres://user:password@hostname.render.com:5432/lordzicco_db
JWT_SECRET=super_secret_jwt_key_lord_zicco_2026
ADMIN_EMAIL=lordzicco@gmail.com
PORT=5000
CLOUDINARY_URL=cloudinary://key:secret@cloudname`}
            </pre>
          )}
        </div>

      </div>
    </div>
  );
}