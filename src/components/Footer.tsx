import { ArrowUp } from 'lucide-react';
export default function Footer() {
  return <footer className="footer"><div className="container footer-bottom"><span>© {new Date().getFullYear()} BODYNESS Massage</span><span className="footer-tagline">Ewelina Rugała Merakit · NIP 7922264366</span><a className="back-top" href="#home" aria-label="Wróć na górę"><ArrowUp size={18}/></a></div></footer>;
}
