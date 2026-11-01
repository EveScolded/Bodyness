import { useEffect, useState } from 'react';
export function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const update = () => {
      const sections = ['home', 'about', 'offer', 'contact'];
      const current = sections.filter(id => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= window.innerHeight * 0.35).at(-1);
      if (current) setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return active;
}
