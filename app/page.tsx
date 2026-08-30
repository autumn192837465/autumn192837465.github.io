import portraitUrl from '../assets/portrait.jpg';
import planetDropIconUrl from '../assets/planet-drop-icon.png';
import pageDocument from '../index.html?raw';

const sourceBody = pageDocument.match(/<body>([\s\S]*)<\/body>/i)?.[1] ?? '';
const pageMarkup = sourceBody
  .replace('assets/portrait.jpg', portraitUrl.src)
  .replace('assets/planet-drop-icon.png', planetDropIconUrl.src);

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
