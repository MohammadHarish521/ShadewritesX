import { Analytics } from '@vercel/analytics/react';
import SmartScribeLanding from './components/SmartScribeLanding';

function App() {
  return (
    <>
      <SmartScribeLanding />
      <Analytics />
    </>
  );
}

export default App;
