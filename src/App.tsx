import { MotionConfig } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Offer from './sections/Offer';
import Contact from './sections/Contact';
import Vouchers from './sections/Vouchers';
export default function App() {
  return <MotionConfig reducedMotion="user"><a href="#main" className="skip-link">Przejdź do treści</a><Header/><main id="main"><Hero/><About/><Offer/><Vouchers/><Contact/></main><Footer/></MotionConfig>;
}
