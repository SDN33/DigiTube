'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';


export default function SuccessPage() {
  const searchParams = useSearchParams();
  const session_id = searchParams?.get('session_id');

  useEffect(() => {
    if (session_id) {
      fetch(`/api/retrieve-session?session_id=${session_id}`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching session data:', error));
    }
  }, [session_id]);

  return (
    <div>
      <h1>Paiement Réussi !</h1>
      {session_id ? (
        <div>
          <p>Merci pour votre achat !</p>
        </div>
      ) : (
        <p>Redirection en cours...</p>
      )}
    </div>
  );
}
