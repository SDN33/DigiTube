import React from 'react';
import { Youtube, Instagram, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/digitube__buzz/", color: "text-pink-500" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          {/* Section Logo et Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <Youtube className="w-10 h-10 text-red-500" />
              <h1 className="text-2xl font-bold">DigiTube</h1>
            </div>
            <address className="not-italic space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">
                  Still-Inov Agency<br />
                  Route de Madirac<br />
                  33880 Censot, France
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:stillinovagency@gmail.com"
                   className="text-sm hover:text-red-400 transition-colors">
                  stillinovagency@gmail.com
                </a>
              </div>
            </address>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map(({ Icon, href, color }) => (
                <a key={color} href={href} className={`${color} hover:opacity-80 transition-opacity flex items-center space-x-2`}><Icon className="w-6 h-6" /><span>Rejoignez nous sur Instagram</span></a>
              ))}
            </div>
          </div>

          {/* Section À Propos */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-red-400">À PROPOS</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Avec DigiTube vous pouvez acheter des vues YouTube de haute qualité
              100% réelles et propulsées par des utilisateurs réels.
            </p>
          </div>

          {/* Section FAQ */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-red-400">Nos FAQ</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white hover:underline transition-colors">
                  Pourquoi acheter des vues YouTube ?
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white hover:underline transition-colors">
                  Comment fonctionne DigiTube ?
                </a>
              </li>
            </ul>
          </div>

          {/* Section Services */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-red-400">NOS SERVICES</h2>
            <div className="space-y-2">
              <a href="https://digitube.buzz/"
                 className="block text-sm text-gray-300 hover:text-white hover:underline transition-colors">
                Achat de vues YouTube
              </a>
              <a href="https://digiload.online/"
                 className="block text-sm text-gray-300 hover:text-white hover:underline transition-colors">
                Canva Pro Gratuit
              </a>
            </div>
            <nav className="pt-2 space-y-2">
              <a href="#about" className="block text-sm text-gray-300 hover:text-white hover:underline transition-colors">
                À PROPOS
              </a>
              <a href="#contact" className="block text-sm text-gray-300 hover:text-white hover:underline transition-colors">
                CONTACT
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright section */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-sm text-center text-gray-400">
            © {currentYear} DigiTube. Tous droits réservés. Paiements sécurisés via Stripe.
          </p>
          <p className="text-sm text-center text-gray-400 mt-2">
            Site propulsé par{" "}
            <a href="https://stillinov.com"
               className="text-red-400 hover:underline">
              Still-inov Agency
            </a>
          </p>
          <Image
            src="/images/paiement-securise.png"
            alt="Paiement sécurisé via Stripe"
            width={250}
            height={50}
            className="mx-auto my-4"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
