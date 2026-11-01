import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
await mkdir('src/assets/photos', { recursive: true });
const inventory = [];
for (const name of await readdir('photos')) {
  if (!/\.(jpe?g|png|webp)$/i.test(name)) continue;
  const input = `photos/${name}`;
  const meta = await sharp(input).metadata();
  inventory.push({ name, width: meta.width, height: meta.height });
  if (name === 'Logo.png') continue;
  for (const width of [640, 1280, 1920]) {
    await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 83 }).toFile(`src/assets/photos/${name.replace(/\.[^.]+$/, '')}-${width}.webp`);
  }
}
for (const name of await readdir('photos/certificates')) {
  if (!/\.(jpe?g|png|webp)$/i.test(name)) continue;
  const meta = await sharp(`photos/certificates/${name}`).metadata();
  inventory.push({ name: `certificates/${name}`, width: meta.width, height: meta.height });
}
await writeFile('asset-inventory.json', JSON.stringify(inventory, null, 2));
console.log(`Preserved originals; optimized photos and inventoried ${inventory.length} assets.`);
