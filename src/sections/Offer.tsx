import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data/services';
import Reveal from '../components/Reveal';
const price = new Intl.NumberFormat('pl-PL');
export default function Offer() {
  return <section id="offer" tabIndex={-1} className="offer" aria-labelledby="offer-heading"><div className="container"><Reveal className="offer-intro"><div><h2 id="offer-heading">Rytuały dla ciała.<br/><em>Przestrzeń dla siebie.</em></h2></div><div><p>Każde ciało opowiada inną historię.<br/>Znajdź masaż bliski Twoim potrzebom.</p></div></Reveal>
    {categories.map((category, index) => <Reveal key={category.id} className={`service-category ${index % 2 ? 'reverse' : ''}`}><div className="service-photo"><img {...category.image} sizes="(max-width: 767px) 90vw, 40vw" alt={category.imageAlt} loading="lazy" width="4016" height="6016"/><span className="image-caption">{category.subtitle}</span></div><div className="service-menu"><h3>{category.title}</h3><p className="category-description">{category.description}</p><div className="services">{category.services.map(service => <div className="service-row" key={service.id}><div><h4>{service.name}{service.featured && <span className="featured">Rytuał odprężenia</span>}</h4><p>{service.description}</p></div><span className="duration">{service.durationMinutes} min</span><span className="price">{price.format(service.pricePLN)} <small>zł</small></span></div>)}</div><a className="text-link" href="#contact">Zapytaj o termin <ArrowUpRight size={17}/></a></div></Reveal>)}
    <div className="offer-note"><span className="small-line"/><p>Nie wiesz, który masaż wybrać? <a href="#contact">Porozmawiajmy.</a><br/>Wspólnie znajdziemy chwilę dla Ciebie.</p></div>
  </div></section>;
}
