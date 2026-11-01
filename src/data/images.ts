import logo from '../../photos/Logo.png';
const optimized = import.meta.glob<string>('../assets/photos/*.webp', { eager: true, query: '?url', import: 'default' });
export function photo(name: string) {
  const stem = name.replace(/\.[^.]+$/, '');
  const src = optimized[`../assets/photos/${stem}-1280.webp`];
  if (!src) throw new Error(`Missing optimized photograph: ${name}. Run npm run images.`);
  return { src, srcSet: [640, 1280, 1920].map(w => optimized[`../assets/photos/${stem}-${w}.webp`] ? `${optimized[`../assets/photos/${stem}-${w}.webp`]} ${w}w` : '').filter(Boolean).join(', ') || undefined };
}
export const images = {
  logo,
  hero: photo('DSC_6593.jpg'),
  detail: photo('DSC_6574.jpg'),
  portrait: photo('DSC_6542.jpg'),
  ritual: photo('DSC_6578.jpg'),
  thai: photo('DSC_6512.jpg'),
  classic: photo('DSC_6587.jpg'),
  kobido: photo('DSC_6644-2.jpg'),
};
const documents = import.meta.glob<string>('../../photos/certificates/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WebP,WEBP}', { eager: true, query: '?url', import: 'default' });
export const certificates = Object.entries(documents).sort(([a], [b]) => a.localeCompare(b)).map(([, src], index) => ({ src, alt: `Certyfikat kwalifikacji — dokument ${index + 1}` }));
