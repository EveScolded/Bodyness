import { images } from './images';
export interface MassageService { id: string; name: string; description: string; durationMinutes: number; pricePLN: number; featured?: boolean }
export interface MassageCategory { id: string; title: string; subtitle: string; description: string; image: typeof images.hero; imageAlt: string; services: MassageService[] }

export const categories: MassageCategory[] = [
  { id: 'thai', title: 'Masaż tajski', subtitle: 'Swoboda i harmonia', description: 'Myślisz, że to mocny masaż dla odważnych? Nic bardziej mylnego, tajski może być bardzo łagodny i relaksujący. Ten masaż jogiczny integruje w sobie pracę poprzez czakry i ludzki system energetyczny zaczerpnięty z tradycji hinduskiej oraz stosowanie akupresury na punktach i liniach terapeutycznych z tradycji chińskich. Efektem są starożytne techniki w bardziej współczesnym, świadomym wydaniu.', image: images.thai, imageAlt: 'Uważna praca z ramieniem podczas masażu tajskiego', services: [
    { id: 'thai90', name: 'Masaż tajski', description: 'Masaż całego ciała.', durationMinutes: 90, pricePLN: 200 },
    { id: 'thai120', name: 'Masaż tajski', description: 'Masaż całego ciała.', durationMinutes: 120, pricePLN: 250 },
    ] },
  { id: 'classic', title: 'Masaż klasyczny', subtitle: 'Powrót do siebie', description: 'Indywidualnie dobrany masaż, który pomaga odprężyć ciało, złagodzić napięcie i odnaleźć chwilę wytchnienia.', image: images.classic, imageAlt: 'Masaż pleców w ciepłym świetle studia', services: [
    { id: 'relax90', name: 'Masaż relaksacyjny całego ciała', description: 'Masaż całego ciała z akcentem na wybrane partie.', durationMinutes: 90, pricePLN: 220},
    { id: 'relax120', name: 'Masaż relaksacyjny całego ciała', description: 'Relaksujący masaż całego ciała, twarzy i głowy.', durationMinutes: 120, pricePLN: 250 },
    { id: 'body', name: 'Masaż częściowy', description: 'Masaż skupiony na wybranych partiach ciała.', durationMinutes: 60, pricePLN: 120 },
  ] },
  { id: 'kobido', title: 'Kobido', subtitle: 'Japońska sztuka dotyku', description: 'Japoński masaż twarzy obejmujący drenaż limfatyczny, masaż liftingujący, pracę na punktach akupresury oraz masaż dekoltu, barków, szyi i karku.', image: images.kobido, imageAlt: 'Terapeutka wykonująca delikatny masaż twarzy', services: [
    { id: 'kobido60', name: 'Kobido', description: 'Podstawowy masaż kobido obejmujący masaż twarzy, szyi, karku i dekoltu.', durationMinutes: 60, pricePLN: 180 },
    { id: 'kobido90', name: 'Rytuał Kobido', description: 'Rytuał rozbudowany o dodatkowy masaż szyi, karku i barków, zakończony wybraną pielęgnacją twarzy.', durationMinutes: 90, pricePLN: 200},
    { id: 'kobido100', name: 'Kobido rozszerzone', description: 'Połączenie masażu pleców, barków, karku i kobido.', durationMinutes: 90, pricePLN: 220 },
  ] },
];
