'use client';
import { TrendingUp, CheckCircle, AlertCircle, MessageCircleHeart } from 'lucide-react';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';


interface PaymentDetails {
  url: string;
  amount: string;
  views: string;
}

interface PaymentHandlerProps {
  onSuccess?: (details: PaymentDetails) => void;
  onError?: (error: string) => void;
}

const usePaymentHandler = ({ onSuccess, onError }: PaymentHandlerProps = {}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateYoutubeUrl = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    return youtubeRegex.test(url);
  };

  const getPackDetails = (views: string): { amount: string } | null => {
    const packMapping: Record<string, string> = {
      "100": "2",
      "1,000": "15",
      "10,000": "79",
      "100,000": "799"
    };

    return views in packMapping ? { amount: packMapping[views] } : null;
  };

  const handlePayment = async (url: string, selectedViews: string) => {
    try {
      setIsProcessing(true);
      setError(null);

      if (!validateYoutubeUrl(url)) {
        throw new Error("L'URL YouTube n'est pas valide. Veuillez entrer une URL de vidéo YouTube valide.");
      }

      const packDetails = getPackDetails(selectedViews);
      if (!packDetails) {
        throw new Error("Pack de vues non valide.");
      }

      const paymentDetails: PaymentDetails = {
        url,
        amount: packDetails.amount,
        views: selectedViews
      };

      await new Promise(resolve => setTimeout(resolve, 1000));

      onSuccess?.(paymentDetails);
      return paymentDetails;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Une erreur est survenue lors du traitement du paiement.";
      setError(errorMessage);
      onError?.(errorMessage);
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    handlePayment,
    isProcessing,
    error,
    validateYoutubeUrl
  };
};

const MainContent = ({ views, price }: { views: string; price: string }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { handlePayment } = usePaymentHandler();

  const handleSubmit = async (details: { url: string; email: string; views: string; amount: string }) => {
    await handlePayment(details.url, details.views);
  };

  return (
    <>
      <button
      onClick={() => setModalOpen(true)}
      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full transition-colors"
      >
      Acheter maintenant
      </button>
      <Modal
      isOpen={isModalOpen}
      onClose={() => setModalOpen(false)}
      onSubmit={handleSubmit}
      selectedViews={views}
      selectedPrice={price}
      />
    </>
  );
};

// Données des packs
const packs = [
  { vues: "100", prix: "2", prixNormal: "5" },
  { vues: "1,000", prix: "15", prixNormal: "18" },
  { vues: "10,000", prix: "79", prixNormal: "99" },
  { vues: "100,000", prix: "799", prixNormal: "999" },
];

// Main Component
const Main = () => (
  <main className="min-h-screen bg-gradient-to-t from-purple-900 to-[#5e17eb] text-white">
    <div className="max-w-6xl mx-auto px-4">
      <Header />
      <div className="flex flex-col items-center pb-8">
        <h2 className="text-3xl lg:text-5xl mb-4 font-bold flex justify-center mx-auto text-center">Acheter des Vues Youtube pour vos vidéos</h2>
        <p className="text-xl text-gray-200 text-center">
          Nous vous proposons d&apos;acheter des vues YouTube de haute qualité 100% réelles et propulsées par des utilisateurs réels.
          <br /> Augmentez votre visibilité sur YouTube et gagnez en popularité !
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {packs.map((pack) => (
          <div key={pack.vues} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 p-4 text-center">
              <h3 className="text-xl">{pack.vues} Vues</h3>
            </div>
            <div className="p-6 text-center flex flex-col justify-center items-center">
              <div className="mb-4">
                <span className="text-4xl font-bold">{pack.prix}€</span>
                <div className="text-sm text-gray-300">Prix normal : {pack.prixNormal}€</div>
              </div>
              <ul className="text-center space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Vues 100% Réelles
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Livraison sur mesure
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Garantie & Sécurisé
                </li>
              </ul>
              <MainContent views={pack.vues} price={pack.prix} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg flex flex-col items-center">
          <div className="flex items-center mb-4">
            <TrendingUp className="mr-2" />
            <h3 className="text-xl font-semibold">Vues Réelles</h3>
          </div>
          <p className='text-center'>Des vues de haute qualité provenant d&apos;utilisateurs réels</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg flex flex-col items-center">
          <div className="flex items-center mb-4">
            <CheckCircle className="mr-2" />
            <h3 className="text-xl font-semibold">Sûr & Sécurisé</h3>
          </div>
          <p className='text-center'>100% conforme aux politiques YouTube pour protéger votre chaîne</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg flex flex-col items-center">
          <div className="flex items-center mb-4">
            <AlertCircle className="mr-2" />
            <h3 className="text-xl font-semibold">Support 24/7</h3>
          </div>
          <p className='text-center'>Une assistance clientèle disponible 24h/24 et 7j/7</p>
        </div>
      </div>
    </div>
    <p className='text-center text-gray-300 text-sm mx-auto max-w-6xl px-4 py-8'>
      <strong>Attention :</strong> Nous ne garantissons pas que les vues achetées augmenteront le nombre de vues
      affichées sur votre vidéo YouTube. Les vues achetées peuvent être retardées ou supprimées par YouTube.
    </p>
    <br />
    <br />
    <br />
    <div className='border-t border-gray-800'>
      <div className='max-w-6xl mx-auto px-4 py-8 mt-8'>
        <h2 id="about" className='text-2xl lg:text-3xl mb-4 text-center font-bold'>À PROPOS</h2>
        <p className='text-2xl text-gray-200 text-center'>
          Avec DigiTube vous pouvez acheter des vues YouTube de haute qualité 100% réelles
        </p>
        <p className='text-lg text-gray-200 text-center mt-4'>
          Chez DigiTube, nous nous engageons à fournir des vues YouTube de haute qualité à nos clients. Nos vues sont 100% réelles et proviennent de comptes YouTube actifs. Nous ne proposons pas de vues de robots ou de faux comptes. Nous garantissons que les vues que vous achetez sont de la plus haute qualité et qu&apos;elles vous aideront à augmenter votre visibilité sur YouTube.
          <br /><br />Nos agents qualifiés sont disponibles 24h/24 et 7j/7 pour répondre à vos questions
        </p>
        <p className='text-xl lg:text-2xl mb-4 text-center mt-16 transition-transform duration-300 hover:scale-105 cursor-pointer bg-red-600 rounded-lg'>
          Pourquoi acheter des vues YouTube est-il important pour votre chaîne ? Explications !
        </p>
        <p className='text-lg text-gray-200 text-center transition-transform duration-300 hover:scale-105 cursor-pointer'>
          Si vous avez une chaîne YouTube, vous savez à quel point il est important d&apos;avoir un grand nombre de vues sur vos vidéos. Les vues YouTube sont un indicateur de popularité et de crédibilité. Plus vous avez de vues sur vos vidéos YouTube, plus vous avez de chances d&apos;attirer de nouveaux spectateurs et de les fidéliser. Les vues YouTube peuvent également vous aider à augmenter votre classement dans les résultats de recherche de YouTube et à atteindre un public plus large.
        </p>
        <p className='text-xl lg:text-2xl mb-4 text-center mt-16 transition-transform duration-300 hover:scale-105 cursor-pointer bg-red-600 rounded-lg'>
          Comment fonctionne l&apos;achat de vues YouTube sur DigiTube ?
        </p>
        <p className='text-lg text-gray-200 text-center mb-20 transition-transform duration-300 hover:scale-105 cursor-pointer'>
          L&apos;achat de vues YouTube sur DigiTube est simple et rapide. Il vous suffit de choisir le nombre de vues que vous souhaitez acheter, de saisir l&apos;URL de votre vidéo YouTube et de procéder au paiement. Une fois votre paiement effectué, nous commencerons à ajouter des vues à votre vidéo YouTube dans un delais de 24h/48h . Vous verrez les vues augmenter en temps réel et vous pourrez suivre l&apos;évolution de votre vidéo sur YouTube Analytics. Nos vues sont 100% réelles et proviennent de comptes YouTube actifs. Vous pouvez acheter des vues YouTube en toute confiance sur DigiTube.
        </p>

        <br />
        <div className='border-t border-gray-800'></div>
        <h2 id="about" className='text-2xl lg:text-3xl mb-4 text-center font-bold py-8 mt-8'>Quelques Témoignages</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
            <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 1</h3>
            </div>
            <p>Après avoir acheté des vues YouTube sur DigiTube, j&apos;ai bien reçu mes vues et j&apos;ai pu augmenter la visibilité de ma chaîne. Je recommande vivement DigiTube à tous ! </p>
            <p className='mt-4 text-sm text-gray-300'>- Sariel B.</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
            <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 2</h3>
            </div>
            <p>Un grand merci à DigiTube pour m&apos;avoir aidé à augmenter le nombre de vues sur ma chaîne YouTube. Les vues que j&apos;ai achetées étaient de haute qualité et ont vraiment aidé à augmenter ma visibilité sur YouTube.</p>
            <p className='mt-4 text-sm text-gray-300'>- Lucas M.</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 3</h3>
            </div>
            <p>Les vues YouTube que j&apos;ai achetées sur DigiTube ont vraiment aidé à augmenter la visibilité de ma chaîne. Je recommande vivement DigiTube à tous ceux qui veulent augmenter leur nombre de vues sur YouTube.</p>
            <p className='mt-4 text-sm text-gray-300'>- Joseph D.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Main />
      <Footer />
    </div>
  );
}
