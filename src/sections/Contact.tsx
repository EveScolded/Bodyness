import { ArrowUpRight, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { contact } from '../data/contact';
import Reveal from '../components/Reveal';
export default function Contact() {
  const canCall = /^tel:\+?[\d\s()-]{7,}$/.test(contact.phoneHref);
  return <section id="contact" tabIndex={-1} className="contact" aria-labelledby="contact-heading">
    <div className="container">
      <Reveal className="contact-grid">
        <div className="contact-heading">
          <span className="eyebrow">Zrób miejsce na spokój</span>
          <h2 id="contact-heading">Twój moment<br />odprężenia<br /><em>zaczyna się tutaj.</em></h2>
          <span className="contact-star" aria-hidden="true">✳</span>
        </div>
        <div className="contact-details">
          <p>Masz pytania lub chcesz umówić się na masaż? Zapraszam do kontaktu telefonicznego lub mailowego. Wspólnie wybierzemy odpowiedni zabieg i dogodny termin.</p>
          <span className="eyebrow contact-label">Porozmawiajmy</span>
          <a className="contact-email" href={contact.emailHref}><Mail size={17} aria-hidden="true" /><span>{contact.email}</span><ArrowUpRight size={16} aria-hidden="true" /></a>
          {canCall ? <a className="button button-cream" href={contact.phoneHref}><Phone size={16} /> Zadzwoń i umów wizytę</a> : <></>}
          <div className="instagram-block">
            <span className="eyebrow">Jeszcze bliżej BODYNESS</span>
            {contact.instagramUrl && <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={20} /><span>@bodyness.massages</span><ArrowUpRight size={17} /><span className="sr-only"> — otwiera nową kartę</span></a>}
            {contact.facebookUrl && <a href={contact.facebookUrl} target="_blank" rel="noopener noreferrer"><Facebook size={20} /><span>BODYNESS na Facebooku</span><ArrowUpRight size={17} /><span className="sr-only"> — otwiera nową kartę</span></a>}
          </div>
        </div>
      </Reveal>
    </div>
  </section>;
}
