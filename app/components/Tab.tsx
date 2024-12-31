// MainContent.tsx
import { CheckCircle} from 'lucide-react';
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

  { vues: "100", prix: 2, prixNormal: 4 },
  { vues: "1,000", prix: 15, prixNormal: 30 },
  { vues: "10,000", prix: 79, prixNormal: 150 },
  { vues: "100,000", prix: 599, prixNormal: 799 },

];

export default function Tab() {
  return (
    <div>
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
              <MainContent views={pack.vues} price={pack.prix.toString()} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
