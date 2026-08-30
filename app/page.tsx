import portraitUrl from '../assets/portrait.jpg';
import planetDropIconUrl from '../assets/planet-drop-icon.png';
import patternHeroIconUrl from '../assets/pattern-hero-icon.png';
import pageDocument from '../index.html?raw';

const sourceBody = pageDocument.match(/<body>([\s\S]*)<\/body>/i)?.[1] ?? '';
const pageMarkup = sourceBody
  .replace('assets/portrait.jpg', portraitUrl.src)
  .replace('assets/planet-drop-icon.png', planetDropIconUrl.src)
  .replace('assets/pattern-hero-icon.png', patternHeroIconUrl.src);

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
