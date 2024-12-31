import { Youtube } from 'lucide-react';

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

export default Footer;