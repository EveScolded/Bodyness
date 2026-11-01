import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { images } from '../data/images';
import Reveal from '../components/Reveal';
export default function Hero() {
  return <>
    <section id="home" tabIndex={-1} className="hero" aria-labelledby="hero-heading"><img className="hero-photo" {...images.hero} sizes="100vw" alt="Uważny masaż ramienia w ciepłej, kameralnej przestrzeni BODYNESS" width="6016" height="4016" fetchPriority="high"/><div className="hero-shade"/>
      <div className="container hero-inner"><motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}><h1 id="hero-heading">Zatrzymaj się.<br/><em>Poczuj spokój.</em></h1><p>Przestrzeń, w której troska o ciało spotyka się z głębokim odprężeniem.</p><div className="hero-actions"><a href="#offer" className="button button-cream">Poznaj ofertę <ArrowUpRight size={17}/></a><a href="#contact" className="text-link">Umów wizytę <ArrowUpRight size={16}/></a></div></motion.div></div>
      <div className="hero-bottom container"><a href="#intro" className="scroll-cue"><span className="scroll-circle"><ArrowDown size={15}/></span><span>Zwolnij. Jesteś w dobrym miejscu.</span></a><span className="hero-side-note">CIAŁO · ODDECH · RÓWNOWAGA</span></div>
    </section>
    <section id="intro" className="intro section-light"><div className="container intro-grid"><Reveal><h2>Nie musisz nic.<br/>Po prostu <em>bądź.</em></h2></Reveal><Reveal className="intro-text"><p>Odłóż codzienny pośpiech. Pozwól myślom zwolnić, a ciału odnaleźć własny rytm. Tutaj liczy się tylko ta chwila i Ty.</p><span className="small-line"/><span className="fine-label">Kameralna przestrzeń. Uważny dotyk.</span></Reveal><Reveal className="intro-photo"><img {...images.detail} sizes="(max-width: 767px) 45vw, 220px" alt="Świeca wśród miękkich ręczników w studio masażu" loading="lazy" width="4016" height="6016"/></Reveal></div></section>
  </>;
}
