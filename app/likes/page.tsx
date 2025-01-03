'use client';
import { MessageCircleHeart, CheckCircle, Play } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../components/LikeModal';
import { useStripePaymentHandler } from '../../utils/usePaymentHandler';

// MainContent Component
const MainContent = ({ likes, price }: { likes: string; price: string }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { handlePayment } = useStripePaymentHandler();

  const handleSubmit = async (details: { url: string; email: string; likes: string; amount: string }) => {
    await handlePayment({ url: details.url, likes, type: 'likes' });
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
        selectedLikes={likes}
        selectedPrice={price}
      />
    </>
  );
};

export interface Pack {
  likes: string;
  prix: number;
  prixNormal: number;
}

export const packs: Pack[] = [
  { likes: "50", prix: 4.90, prixNormal: 5.90 },
  { likes: "100", prix: 7.90, prixNormal: 9.90 },
  { likes: "250", prix: 12.90, prixNormal: 15.00 },
  { likes: "500", prix: 15.90, prixNormal: 17.90 },
  { likes: "1,000", prix: 19.90, prixNormal: 25.00 },
  { likes: "2,500", prix: 39.90, prixNormal: 45.00 }
];

const Tab = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {packs.map((pack) => (
          <div key={pack.likes} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 p-4 text-center">
              <h3 className="text-xl flex items-center justify-center gap-2">
                <Play className="w-4 h-4" /> {pack.likes} Likes
              </h3>
            </div>
            <div className="p-6 text-center flex flex-col justify-center items-center">
              <div className="mb-4">
                <span className="text-4xl font-bold">{pack.prix.toFixed(2)}€</span>
                <div className="text-sm text-gray-300">Prix normal : <s>{pack.prixNormal.toFixed(2)}</s>€</div>
              </div>
              <ul className="text-center space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Likes 100% Réels
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
              <MainContent likes={pack.likes} price={pack.prix.toString()} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component
const Main = () => (
  <main className="min-h-screen text-white" style={{
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 1000"><rect fill="#330055" width="100" height="1000"/><g fill-opacity="1"><circle  fill="#1111" cx="50" cy="0" r="50"/><g fill="#3a015d" ><circle cx="0" cy="50" r="50"/><circle cx="100" cy="50" r="50"/></g><circle  fill="#410165" cx="50" cy="100" r="50"/><g fill="#48026e" ><circle cx="0" cy="150" r="50"/><circle cx="100" cy="150" r="50"/></g><circle  fill="#500376" cx="50" cy="200" r="50"/><g fill="#57047e" ><circle cx="0" cy="250" r="50"/><circle cx="100" cy="250" r="50"/></g><circle  fill="#5f0587" cx="50" cy="300" r="50"/><g fill="#67068f" ><circle cx="0" cy="350" r="50"/><circle cx="100" cy="350" r="50"/></g><circle  fill="#6f0798" cx="50" cy="400" r="50"/><g fill="#7707a0" ><circle cx="0" cy="450" r="50"/><circle cx="100" cy="450" r="50"/></g><circle  fill="#8008a9" cx="50" cy="500" r="50"/><g fill="#8909b1" ><circle cx="0" cy="550" r="50"/><circle cx="100" cy="550" r="50"/></g><circle  fill="#9109ba" cx="50" cy="600" r="50"/><g fill="#9a09c3" ><circle cx="0" cy="650" r="50"/><circle cx="100" cy="650" r="50"/></g><circle  fill="#a309cb" cx="50" cy="700" r="50"/><g fill="#ad09d4" ><circle cx="0" cy="750" r="50"/><circle cx="100" cy="750" r="50"/></g><circle  fill="#b608dc" cx="50" cy="800" r="50"/><g fill="#c007e5" ><circle cx="0" cy="850" r="50"/><circle cx="100" cy="850" r="50"/></g><circle  fill="#c905ee" cx="50" cy="900" r="50"/><g fill="#d303f6" ><circle cx="0" cy="950" r="50"/><circle cx="100" cy="950" r="50"/></g><circle  fill="#D0F" cx="50" cy="1000" r="50"/></g></svg>')}")`,
    backgroundRepeat: 'repeat',
    backgroundSize: '100px 1000px',
    backgroundAttachment: 'fixed',
  }}>
    <div className="max-w-6xl mx-auto px-4">
      <Header />
      <div className="flex flex-col items-center pb-8">
        <h2 className="text-3xl lg:text-5xl mb-4 font-bold flex justify-center mx-auto text-center">Acheter des Likes Youtube pour vos vidéos</h2>
        <p className="text-xl text-gray-200 text-center">
          Nous vous proposons d&apos;acheter des likes YouTube de haute qualité 100% réels et provenant d&apos;utilisateurs actifs.
          <br /> Augmentez votre engagement et votre crédibilité sur YouTube !
        </p>
      </div>
      <Tab />
      <Image
        src="/images/stripe.png"
        alt="Paiement sécurisé via Stripe"
        width={200}
        height={50}
        className="mx-auto my-2"
      />
      <p className='text-center'>Paiment CB sécurisé via Stripe</p>
    </div>
    <p className='text-center text-gray-300 text-sm mx-auto max-w-6xl px-4 py-8'>
      <strong>Attention :</strong> Nous ne garantissons pas que les likes achetés resteront de façon permanente sur votre vidéo YouTube.
      Les likes peuvent être filtrés ou supprimés par YouTube. L&apos;engagement peut varier en fonction de la qualité de votre contenu et de votre audience cible.
    </p>
    <br />
    <br />
    <br />
    <div className='border-t border-gray-800'>
      <div className='max-w-6xl mx-auto px-4 py-8 mt-8'>
        <Image src='/images/banner.png' alt='DigiTube | Acheter likes YouTube, vues, abonnés' width={1200} height={630} />
        <br /><br />
        <h2 id="about" className='text-2xl lg:text-3xl mb-4 text-center font-bold'>À PROPOS</h2>
        <p className='text-2xl text-gray-200 text-center'>
          Avec DigiTube vous pouvez acheter des likes YouTube de haute qualité 100% réels
        </p>
        <p className='text-lg text-gray-200 text-center mt-4'>
          Chez DigiTube, nous nous engageons à fournir des likes YouTube de haute qualité à nos clients. Nos likes proviennent de comptes YouTube actifs et réels.
          Nous ne proposons pas de likes automatisés ou de faux comptes. Nous garantissons que les likes que vous achetez sont authentiques et qu&apos;ils contribueront
          à améliorer l&apos;engagement de vos vidéos sur YouTube.
          <br /><br />Nos agents qualifiés sont disponibles 24h/24 et 7j/7 pour répondre à vos questions
        </p>
        <p className='text-xl lg:text-2xl mb-4 text-center mt-16 transition-transform duration-300 hover:scale-105 cursor-pointer bg-red-600 rounded-lg'>
          Pourquoi acheter des likes YouTube est-il important pour votre chaîne ? Explications !
        </p>
        <p className='text-lg text-gray-200 text-center transition-transform duration-300 hover:scale-105 cursor-pointer'>
          Les likes YouTube sont un indicateur crucial de l&apos;engagement et de la qualité de votre contenu. Plus vous avez de likes sur vos vidéos, plus elles apparaîtront
          comme pertinentes et appréciées par votre audience. Les likes peuvent améliorer votre visibilité dans l&apos;algorithme de YouTube, augmentant ainsi vos chances
          d&apos;apparaître dans les recommandations et les résultats de recherche.
        </p>
        <p className='text-xl lg:text-2xl mb-4 text-center mt-16 transition-transform duration-300 hover:scale-105 cursor-pointer bg-red-600 rounded-lg'>
          Comment fonctionne l&apos;achat de likes YouTube sur DigiTube ?
        </p>
        <p className='text-lg text-gray-200 text-center mb-20 transition-transform duration-300 hover:scale-105 cursor-pointer'>
          L&apos;achat de likes YouTube sur DigiTube est un processus simple et efficace. Sélectionnez le nombre de likes souhaité, entrez l&apos;URL de votre vidéo YouTube
          et procédez au paiement sécurisé. Après confirmation de votre paiement, nous commencerons à ajouter progressivement des likes à votre vidéo dans un délai de 24h à 48h.
          Vous pourrez suivre l&apos;évolution de l&apos;engagement de votre vidéo via YouTube Analytics.
        </p>
        <div className="space-y-4"></div>

        <br />
        <div className='border-t border-gray-800'></div>
        <h2 id="about" className='text-2xl lg:text-3xl mb-4 text-center font-bold py-8 mt-8'>Quelques avis de nos clients...</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 1</h3>
            </div>
            <p>Les likes ont été livrés rapidement et de manière progressive. Ça a vraiment donné un coup de pouce à ma vidéo et encouragé plus d&apos;engagement naturel. Service client au top !</p>
            <p className='mt-4 text-sm text-gray-300'>- Thomas R.</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 2</h3>
            </div>
            <p>Service fiable et professionnel. Les likes sont arrivés comme promis et ont contribué à améliorer la visibilité de mes vidéos. Je recommande vivement !</p>
            <p className='mt-4 text-sm text-gray-300'>- Marie D.</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 3</h3>
            </div>
            <p>Excellent rapport qualité-prix. Les likes ont boosté l&apos;engagement de ma chaîne et attiré plus d&apos;audience naturelle. Je n&apos;hésiterai pas à revenir !</p>
            <p className='mt-4 text-sm text-gray-300'>- Lucas M.</p>
          </div>
        </div>
        <div className="overflow-hidden relative"></div>
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
