// MainContent.tsx
import { CheckCircle, Play} from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';
import { useStripePaymentHandler } from '../../utils/usePaymentHandler';

const MainContent = ({ views, price }: { views: string; price: string }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { handlePayment } = useStripePaymentHandler();

  const handleSubmit = async (details: { url: string; email: string; views: string }) => {
    await handlePayment(details.url, views);
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


export interface Pack {

  vues: string;

  prix: number;

  prixNormal: number;

}



export const packs: Pack[] = [
  { vues: "1,000", prix: 7, prixNormal: 9 },
  { vues: "2,500", prix: 17.50, prixNormal: 19 },
  { vues: "5,000", prix: 32.50, prixNormal: 45 },
  { vues: "10,000", prix: 54.50, prixNormal: 75 },
  { vues: "25,000", prix: 115, prixNormal: 159 },
  { vues: "100,000", prix: 298.50, prixNormal: 399 },
  { vues: "250,000", prix: 823.50, prixNormal: 823.50 },
  { vues: "500,000", prix: 1298.50, prixNormal: 1598.50 },
];

export default function Tab() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {packs.map((pack) => (
          <div key={pack.vues} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden">
            <div className="bg-red-600 p-4 text-center">
                <h3 className="text-xl flex items-center justify-center gap-2"><Play className="w-4 h-4" /> {pack.vues} Vues</h3>
            </div>
            <div className="p-6 text-center flex flex-col justify-center items-center">
              <div className="mb-4">
                <span className="text-4xl font-bold">{pack.prix.toFixed(2)}€</span>
                <div className="text-sm text-gray-300">Prix normal : <s>{pack.prixNormal.toFixed(2)}</s>€</div>
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
              <MainContent views={pack.vues} price={pack.prix.toString()} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
