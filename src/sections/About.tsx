import { images } from '../data/images';
import { content } from '../data/content';
import Reveal from '../components/Reveal';
import CertificateGallery from '../components/CertificateGallery';
export default function About() {
  return <section id="about" tabIndex={-1} className="about section-light" aria-labelledby="about-heading"><div className="container"><div className="about-grid"><Reveal className="portrait-composition"><div className="portrait-frame"><img {...images.portrait} sizes="(max-width: 767px) 85vw, 42vw" alt="Terapeutka BODYNESS w kameralnej przestrzeni studia" loading="lazy" width="3607" height="5410"/></div><div className="portrait-detail"><img {...images.ritual} sizes="(max-width: 767px) 35vw, 220px" alt="Olejek do masażu i ciepłe światło świecy" loading="lazy" width="5988" height="3997"/></div></Reveal><Reveal className="about-copy"><span className="eyebrow">{content.aboutEyebrow}</span><h2 id="about-heading">{content.aboutHeading}</h2>{content.aboutParagraphs.map(p => <p key={p}>{p}</p>)}<span className="signature">Z uważnością, BODYNESS</span></Reveal></div><Reveal><CertificateGallery/></Reveal></div></section>;
}
