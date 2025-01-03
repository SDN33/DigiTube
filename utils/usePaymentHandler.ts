import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface PaymentDetails {
  url: string;
  views?: string;
  likes?: string;
  type: 'views' | 'likes';
}

export const useStripePaymentHandler = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async ({ url, views, likes, type }: PaymentDetails) => {
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
          views: type === 'views' ? views : undefined,
          likes: type === 'likes' ? likes : undefined,
          serviceType: type,
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

  // Fonctions d'aide spécifiques pour chaque type de service
  const handleViewsPayment = async (url: string, selectedViews: string) => {
    return handlePayment({
      url,
      views: selectedViews,
      type: 'views'
    });
  };

  const handleLikesPayment = async (url: string, selectedLikes: string) => {
    return handlePayment({
      url,
      likes: selectedLikes,
      type: 'likes'
    });
  };

  return {
    handlePayment,
    handleViewsPayment,
    handleLikesPayment,
    isProcessing,
    error,
  };
};

export default useStripePaymentHandler;
