
// useStripePaymentHandler.ts
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export const useStripePaymentHandler = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async (url: string, selectedViews: string) => {
    try {
      setIsProcessing(true);
      setError(null);

      if (!url) {
        throw new Error("L'URL YouTube est requise.");
      }

      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error('Stripe est introuvable.');
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          views: selectedViews,
        }),
      });

      if (!response.ok) {
        throw new Error("Impossible de créer une session de paiement.");
      }

      const { sessionId } = await response.json();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Une erreur est survenue.";
      setError(errorMessage);
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    handlePayment,
    isProcessing,
    error,
  };
};

export default useStripePaymentHandler;
