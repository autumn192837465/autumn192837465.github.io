import portraitUrl from '../assets/portrait.jpg';
import pageDocument from '../index.html?raw';

const sourceBody = pageDocument.match(/<body>([\s\S]*)<\/body>/i)?.[1] ?? '';
const pageMarkup = sourceBody.replace('assets/portrait.jpg', portraitUrl);

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
