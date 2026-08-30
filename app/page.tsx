import portraitUrl from '../assets/portrait.jpg';
import planetDropIconUrl from '../assets/planet-drop-icon.png';
import patternHeroIconUrl from '../assets/pattern-hero-icon.png';
import googlePlayIconUrl from '../assets/google-play-store-icon.webp';
import appStoreIconUrl from '../assets/app-store-icon.webp';
import pageDocument from '../index.html?raw';

const sourceBody = pageDocument.match(/<body>([\s\S]*)<\/body>/i)?.[1] ?? '';
const pageMarkup = sourceBody
  .replace('assets/portrait.jpg', portraitUrl.src)
  .replace('assets/planet-drop-icon.png', planetDropIconUrl.src)
  .replace('assets/pattern-hero-icon.png', patternHeroIconUrl.src)
  .replace(/assets\/google-play-store-icon\.webp/g, googlePlayIconUrl.src)
  .replace(/assets\/app-store-icon\.webp/g, appStoreIconUrl.src);

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
