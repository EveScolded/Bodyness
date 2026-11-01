import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { images } from '../data/images';
import { useActiveSection } from '../hooks/useActiveSection';
export const navigation = [['home', 'Start'], ['about', 'O mnie'], ['offer', 'Oferta'], ['contact', 'Kontakt']] as const;
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 30); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menu.current?.querySelector('a')?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
      if (event.key === 'Tab') {
        const links = Array.from(menu.current?.querySelectorAll<HTMLAnchorElement>('a') ?? []);
        const controls: HTMLElement[] = [toggle.current!, ...links];
        const first = controls[0]; const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const media = window.matchMedia('(min-width: 768px)');
    const resize = () => { if (media.matches) setOpen(false); };
    media.addEventListener('change', resize);
    document.addEventListener('keydown', key);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', key); media.removeEventListener('change', resize); };
  }, [open]);
  return <header className={`site-header ${scrolled || open ? 'solid' : ''}`}>
    <div className="header-inner"><a className="logo" href="#home" aria-label="BODYNESS Massage — strona główna" onClick={() => setOpen(false)}><img src={images.logo} alt="BODYNESS Massage" width="1672" height="941" /></a>
      <nav className="desktop-nav" aria-label="Nawigacja główna">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>
      <a className="header-cta" href="#contact">Umów masaż <ArrowUpRight size={15} /></a>
      <button ref={toggle} className="menu-toggle" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav ref={menu} id="mobile-menu" className="mobile-nav" aria-label="Nawigacja mobilna" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{navigation.map(([id, label], index) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => { setOpen(false); requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true })); }}><span>0{index + 1}</span>{label}<ArrowUpRight size={22}/></a>)}<p>Twoja chwila. Twój spokój.</p></motion.nav>}</AnimatePresence>
  </header>;
}
