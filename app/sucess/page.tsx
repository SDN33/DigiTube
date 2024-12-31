'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface SessionData {
  productName: string;
  videoUrl: string;
}

export default function SuccessPage() {
  const router = useRouter();
  const { session_id } = router.query;
  const [sessionData, setSessionData] = useState<SessionData | null>(null);

  useEffect(() => {
    if (session_id) {
      fetch(`/api/retrieve-session?session_id=${session_id}`)
        .then(response => response.json())
        .then(data => setSessionData(data))
        .catch(error => console.error('Error fetching session data:', error));
    }
  }, [session_id]);

  return (
    <div>
      <h1>Paiement Réussi !</h1>
      {sessionData ? (
        <div>
          <p>Merci pour votre achat !</p>
          <p>Nom du produit : {sessionData.productName}</p>
          <p>URL de la vidéo : <a href={sessionData.videoUrl} target="_blank" rel="noopener noreferrer">{sessionData.videoUrl}</a></p>
        </div>
      ) : (
        <p>Chargement des informations de votre session...</p>
      )}
    </div>
  );
}
