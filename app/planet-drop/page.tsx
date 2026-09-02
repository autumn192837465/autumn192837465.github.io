import type { Metadata } from 'next';
import googlePlayIconUrl from '../../assets/google-play-store-icon.webp';
import appStoreIconUrl from '../../assets/app-store-icon.webp';
import planetDropIconUrl from '../../assets/planet-drop-icon.png';
import screenshot01Url from '../../assets/planet-drop-screenshot-01.webp';
import screenshot02Url from '../../assets/planet-drop-screenshot-02.webp';
import screenshot03Url from '../../assets/planet-drop-screenshot-03.webp';
import screenshot04Url from '../../assets/planet-drop-screenshot-04.webp';
import pageDocument from '../../planet-drop/index.html?raw';
import { PlanetDropClient } from './planet-drop-client';

export const metadata: Metadata = {
  title: 'Planet Drop | Liu Chuan Feng',
  description: 'A physics-based merge puzzle with roguelike upgrades, independently created by Liu Chuan Feng.',
  openGraph: {
    title: 'Planet Drop | Liu Chuan Feng',
    description: 'Drop planets, merge new worlds, and shape a different build every run.',
    url: 'https://autumn192837465.github.io/planet-drop/',
    images: [
      {
        url: 'https://autumn192837465.github.io/assets/planet-drop-icon.png',
        width: 1024,
        height: 1024,
        alt: 'Planet Drop game icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planet Drop | Liu Chuan Feng',
    description: 'Drop planets, merge new worlds, and shape a different build every run.',
    images: ['https://autumn192837465.github.io/assets/planet-drop-icon.png'],
  },
};

const sourceBody = pageDocument.match(/<body>([\s\S]*)<\/body>/i)?.[1] ?? '';
const pageMarkup = sourceBody
  .replace(/\.\.\/assets\/google-play-store-icon\.webp/g, googlePlayIconUrl.src)
  .replace(/\.\.\/assets\/app-store-icon\.webp/g, appStoreIconUrl.src)
  .replace(/\.\.\/assets\/planet-drop-icon\.png/g, planetDropIconUrl.src)
  .replace(/\.\.\/assets\/planet-drop-screenshot-01\.webp/g, screenshot01Url.src)
  .replace(/\.\.\/assets\/planet-drop-screenshot-02\.webp/g, screenshot02Url.src)
  .replace(/\.\.\/assets\/planet-drop-screenshot-03\.webp/g, screenshot03Url.src)
  .replace(/\.\.\/assets\/planet-drop-screenshot-04\.webp/g, screenshot04Url.src);

export default function PlanetDropPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
      <PlanetDropClient />
    </>
  );
}
