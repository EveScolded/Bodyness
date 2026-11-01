import { useState } from 'react';
import { ZoomIn, ArrowUpRight } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import { certificates } from '../data/images';
import { content } from '../data/content';
export default function CertificateGallery() {
  const [index, setIndex] = useState(-1);
  return <div className="qualifications">
    <div className="qualification-intro"><div><span className="eyebrow">Uważność poparta wiedzą</span><h3>Moje kwalifikacje</h3></div><p>{content.qualifications}</p></div>
    {certificates.length ? <><div className="certificate-grid">{certificates.map((certificate, i) => <button key={certificate.src} className="certificate" onClick={() => setIndex(i)} aria-label={`Powiększ certyfikat ${i + 1}`}><div className="certificate-image"><img src={certificate.src} alt={certificate.alt} loading="lazy" width="400" height="300"/><span className="zoom-icon"><ZoomIn size={23}/></span></div><span className="certificate-label">Certyfikat <span>0{i + 1} <ArrowUpRight size={14}/></span></span></button>)}</div></> : <p className="empty-state">Certyfikaty pojawią się tutaj wkrótce.</p>}
    <Lightbox open={index >= 0} close={() => setIndex(-1)} index={Math.max(index, 0)} slides={certificates} plugins={[Counter, Zoom]} carousel={{ finite: certificates.length < 2 }} labels={{ Close: 'Zamknij', Next: 'Następny certyfikat', Previous: 'Poprzedni certyfikat', 'Zoom in': 'Powiększ', 'Zoom out': 'Pomniejsz' }} styles={{ container: { backgroundColor: 'rgba(25, 19, 16, .97)' } }} />
  </div>;
}
