// pages/paula-assistant.js
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

const ElevenLabsWidget = dynamic(() => import('../components/ElevenLabsWidget'), {
  ssr: false,
});

export default function PaulaAssistant() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <Head>
        <title>Paula Assistant</title>
      </Head>
      <h1>Paula Assistant</h1>
      <p>Your personal and executive assistant is here to help!</p>
      
      <ElevenLabsWidget />

      <div style={{ marginTop: '2rem' }}>
        <Link href="/">
          Back to Home page!
        </Link>
      </div>
    </div>
  );
}
