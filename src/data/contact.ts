import social from '../../social.txt?raw';
export const contact = {
  phoneDisplay: '603 444 530',
  get phoneHref() { return this.phoneDisplay ? `tel:+48${this.phoneDisplay.replace(/\D/g, '')}` : ''; },
  email: 'bodyness.massages@gmail.com',
  get emailHref() { return `mailto:${this.email}`; },
  instagramUrl: social.match(/https:\/\/(?:www\.)?instagram\.com\/[\w.]+\/?/)?.[0] ?? '',
  facebookUrl: social.match(/https:\/\/(?:www\.)?facebook\.com\/[^\s]+/)?.[0] ?? '',
};
