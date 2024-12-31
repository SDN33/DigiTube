import { useState } from 'react';
import { Lock } from 'lucide-react';

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

export default Modal;
