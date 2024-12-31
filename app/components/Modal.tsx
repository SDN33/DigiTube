import { useState } from 'react';
import { Lock, AlertCircle } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: { url: string; email: string; views: string; amount: string }) => Promise<void>;
  selectedViews: string;
  selectedPrice: string;
}

const ModalContent = ({ isOpen, onClose, onSubmit, selectedViews, selectedPrice }: ModalProps) => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const validateYoutubeUrl = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    return youtubeRegex.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsProcessing(true);

    if (!validateYoutubeUrl(url)) {
      setError("L'URL YouTube n'est pas valide. Veuillez entrer une URL de vidéo YouTube valide.");
      setIsProcessing(false);
      return;
    }

    try {
      await onSubmit({
        url,
        email,
        views: selectedViews,
        amount: selectedPrice,
      });
      const stripe = await stripePromise;

      if (stripe) {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            price: selectedPrice,
            email,
          }),
        });

        const session = await response.json();

        if (session.id) {
          await stripe.redirectToCheckout({ sessionId: session.id });
        } else {
          setError('Impossible de créer une session de paiement.');
        }
      }

      onClose();
    } catch {
      setError("Une erreur est survenue lors du traitement de votre demande. Veuillez réessayer plus tard.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-50 w-full max-w-md bg-white rounded-lg shadow-xl p-6 m-4">
        <h2 className="text-2xl mb-6 font-bold text-center">Commander {selectedViews} vues</h2>
        <div className="bg-black p-2 rounded-lg">
          <p className="text-center">
            <span className="block text-lg font-semibold mt-4">Pack sélectionné</span>
            <span className="text-2xl font-bold">{selectedViews} vues</span>
            <span className="block text-xs font-semibold">Livraison sous 24-48h</span>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="url" className="block text-sm font-medium text-gray-600 mt-2">URL de votre vidéo</label>
            <input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mt-2">Votre email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@email.com"
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-black hover:bg-gray-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? (
                'Traitement en cours...'
              ) : (
                <>
                  <span>Payer {selectedPrice}€</span>
                  <Lock className="w-4 h-4" />
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Annuler
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Paiement sécurisé • Livraison sous 24-48h
          </p>
        </form>
      </div>
    </div>
  );
};

const Modal = (props: ModalProps) => {
  return <ModalContent {...props} />;
};

export default Modal;
