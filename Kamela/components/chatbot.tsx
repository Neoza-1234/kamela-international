'use client';

import dynamic from 'next/dynamic';

const TawkMessengerReact = dynamic(
  () => import('@tawk.to/tawk-messenger-react'),
  { ssr: false }
);

export default function TawkChat() {
  return (
    <TawkMessengerReact
      propertyId="6989b4f32fb5be1c3a2b2441"
      widgetId="1jh0ulml8"
      onStatusChange={() => {}}
      onBeforeLoad={() => {}}
      onLoad={() => {}}
    />
  );
}


