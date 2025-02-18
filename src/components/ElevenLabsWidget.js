// components/ElevenLabsWidget.js
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function ElevenLabsWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <elevenlabs-convai agent-id="X2Hxlwewg7dIGT0LovXP"></elevenlabs-convai>
      <Script
        src="https://elevenlabs.io/convai-widget/index.js"
        strategy="lazyOnload"
        type="text/javascript"
      />
    </>
  );
}
