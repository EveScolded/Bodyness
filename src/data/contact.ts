import social from '../../social.txt?raw';
export const contact = {
  phoneDisplay: '603 444 530',
  phoneHref: '', // Example: tel:+48... — enter the verified studio number.
  instagramUrl: social.match(/https:\/\/(?:www\.)?instagram\.com\/[\w.]+\/?/)?.[0] ?? '',
  facebookUrl: social.match(/https:\/\/(?:www\.)?facebook\.com\/[^\s]+/)?.[0] ?? '',
};
