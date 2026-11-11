import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import Reveal from '../components/Reveal';
import { contact } from '../data/contact';
import thaiVoucher from '../assets/vouchers/voucher-tajski.webp';
import amountVoucher from '../assets/vouchers/voucher-kwotowy.webp';

export default function Vouchers() {
  return <section id="vouchers" tabIndex={-1} className="vouchers" aria-labelledby="vouchers-heading">
    <div className="container"><Reveal className="voucher-grid">
      <div className="voucher-copy">
        <h2 id="vouchers-heading">Spokój to piękny<br/><em>prezent.</em></h2>
        <p>Podaruj bliskiej osobie odprężenie z BODYNESS. Voucher możesz kupić na dowolną z usług lub na konkretną kwotę - wtedy obdarowana osoba sama wybierze masaż dla siebie.</p>
        <p>Voucher zamówisz mailowo lub telefonicznie. Napisz lub zadzwoń, aby ustalić szczegóły i przygotować prezent dla wybranej osoby.</p>
        <div className="voucher-actions">
          <a className="text-link voucher-email" href={`${contact.emailHref}?subject=${encodeURIComponent('Zamówienie vouchera BODYNESS')}`}><Mail size={15} aria-hidden="true"/>Zamów voucher<ArrowUpRight size={16} aria-hidden="true"/></a>
          <a className="button voucher-order" href={contact.phoneHref}><Phone size={16} aria-hidden="true"/>Zadzwoń i zamów</a>
        </div>
      </div>
      <figure className="voucher-visual">
        <div className="voucher-stack">
          <img className="voucher-card voucher-card-back" src={amountVoucher} alt="Przykładowy imienny voucher BODYNESS na kwotę 200 zł" width="1012" height="478" loading="lazy"/>
          <img className="voucher-card voucher-card-front" src={thaiVoucher} alt="Przykładowy imienny voucher BODYNESS na masaż tajski" width="1012" height="478" loading="lazy"/>
        </div>
        <figcaption>Na wybrany masaż lub kwotę. Z myślą o bliskiej osobie.</figcaption>
      </figure>
    </Reveal></div>
  </section>;
}
