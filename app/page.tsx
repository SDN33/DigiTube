'use client';
import { TrendingUp, CheckCircle, AlertCircle, Youtube, Lock } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (url: string) => void;
}

const Modal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(url);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full">
        <h2 className="text-xl mb-4">Entrez l&apos;URL de votre vidéo YouTube</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="border p-2 w-full mb-4"
            required
          />
          <input
            type="email"
            placeholder="Votre email"
            className="border p-2 w-full mb-4"
            required
          />
          <div className="flex flex-col gap-2 items-center">
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded flex items-center gap-2 justify-center w-48">
              <span>Acheter</span> <Lock className="w-4 h-4" />
            </button>
            <button type="button" onClick={onClose} className="py-2 px-4 rounded bg-gray-300 hover:bg-gray-400 w-48">
              Annuler
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-4 mt-4">
            Nous avons besoin de l&apos;URL de votre vidéo pour ajouter les vues
          </p>
        </form>
      </div>
    </div>
  );
};

// Main Content Component
const MainContent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePayment = (url: string) => {
    console.log("URL soumise :", url);
    // Logique PayPal à ajouter ici
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full transition-colors"
      >
        Acheter maintenant
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handlePayment} />
    </>
  );
};

// Données des packs
const packs = [
  { vues: "100", prix: "2", prixNormal: "5" },
  { vues: "1,000", prix: "15", prixNormal: "18" },
  { vues: "10,000", prix: "80", prixNormal: "99" },
  { vues: "100,000", prix: "800", prixNormal: "999" },
];
// Header Component
const Header = () => (
  <header className="text-center py-16">
    <div className="flex items-center justify-center mb-6">
      <Youtube className="w-12 h-12 text-red-500 mr-2" />
      <h1 className="text-5xl font-bold">DigiTube</h1>
    </div>
    <nav>
      <a href="#about" className="mr-4 hover:underline">À PROPOS</a>
      <a href="#contact" className="hover:underline">CONTACT</a>
    </nav>
  </header>
);

// Main Component
const Main = () => (
  <main className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-600 text-white">
    <div className="max-w-6xl mx-auto px-4">
      <Header />
      <div className="flex flex-col items-center pb-8">
        <h2 className="text-3xl lg:text-5xl mb-4 font-bold">Acheter des Vues Youtube pour vos vidéos</h2>
        <p className="text-xl text-gray-200 text-center">
          Avec plus de 3 milliards de requêtes traitées chaque mois,<br />Youtube est devenu le 2ème moteur de recherche.
          <br /><br /> Explosez votre compteur !
        </p>
        <div className='flex justify-center'>
          <Image src="/Images/paypal.png" alt="Paypal" width={200} height={100} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {packs.map((pack) => (
          <div key={pack.vues} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 p-4 text-center">
              <h3 className="text-xl">{pack.vues} Vues</h3>
            </div>
            <div className="p-6 text-center">
              <div className="mb-4">
                <span className="text-4xl font-bold">{pack.prix}€</span>
                <div className="text-sm text-gray-300">Prix normal : {pack.prixNormal}€</div>
              </div>
              <ul className="text-left space-y-3 mb-6">
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
              <MainContent />
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <TrendingUp className="mr-2" />
            <h3 className="text-xl font-semibold">Vues Réelles</h3>
          </div>
          <p>Des vues de haute qualité provenant d&apos;utilisateurs réels</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <CheckCircle className="mr-2" />
            <h3 className="text-xl font-semibold">Sûr & Sécurisé</h3>
          </div>
          <p>100% conforme aux politiques YouTube pour protéger votre chaîne</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <AlertCircle className="mr-2" />
            <h3 className="text-xl font-semibold">Support 24/7</h3>
          </div>
          <p>Une assistance clientèle disponible 24h/24 et 7j/7</p>
        </div>
      </div>
    </div>
    <p className='text-center text-gray-300 text-sm'>
      <strong>Attention :</strong> Nous ne garantissons pas que les vues achetées augmenteront le nombre de vues
      affichées sur votre vidéo YouTube. Les vues achetées peuvent être retardées ou supprimées par YouTube.
    </p>
    <br />
    <br /><br />

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
          L&apos;achat de vues YouTube sur DigiTube est simple et rapide. Il vous suffit de choisir le nombre de vues que vous souhaitez acheter, de saisir l&apos;URL de votre vidéo YouTube et de procéder au paiement. Une fois votre paiement effectué, nous commencerons à ajouter des vues à votre vidéo YouTube. Vous verrez les vues augmenter en temps réel et vous pourrez suivre l&apos;évolution de votre vidéo sur YouTube Analytics. Nos vues sont 100% réelles et proviennent de comptes YouTube actifs. Vous pouvez acheter des vues YouTube en toute confiance sur DigiTube.
        </p>
      </div>
    </div>
  </main>
);

//Footer Component
const Footer = () => (
  <footer className="p-6 bg-gray-800 text-white">
    <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 my-10">
      <div>
        <div className="flex items-center mb-4">
          <Youtube className="w-10 h-10 text-red-500 mr-2" />
          <h1 className="text-2xl font-bold">DigiTube</h1>
        </div>
        <address className="not-italic text-sm">
          Still-Inov Agency<br />
          Route de Madirac<br />
          33880 Censot, France<br />
          <a href="mailto:stillinovagency@gmail.com" className="underline">Email</a>
        </address>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">À PROPOS</h2>
        <p className="text-sm">
          Avec DigiTube vous pouvez acheter des vues YouTube de haute qualité 100% réelles et propulsées par des utilisateurs réels.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Nos FAQ</h2>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:underline">Pourquoi acheter des vues YouTube ?</a></li>
          <li><a href="#" className="hover:underline">Comment fonctionne DigiTube ?</a></li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">NOS SERVICES</h2>
        <p className="text-sm">ACHAT VUES 100% RÉEL YOUTUBE</p>
        <nav className="mt-4 space-x-4 text-sm">
          <a href="#about" className="hover:underline">À PROPOS</a>
          <a href="#contact" className="hover:underline">CONTACT</a>
        </nav>
      </div>
      <p className="mt-4 text-sm text-center flex align-center justify-center col-span-4">
        © 2021 DigiTube. Tous droits réservés. Paiements sécurisés via PayPal.
      </p>
      <p className="text-sm text-center flex align-center justify-center col-span-4">
          Site propulsé par &nbsp;<a href="https://stillinov.com" className="underline">Still-Inov Agency</a>
      </p>
    </div>
  </footer>
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
