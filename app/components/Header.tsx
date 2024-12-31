// Header Component
import { Youtube } from 'lucide-react';
import Link from 'next/link';

const Header = () => (
  <header className="text-center py-16">
    <Link href="/" className="flex justify-center mb-6">
      <Youtube className="w-12 h-12 text-red-500 mr-2" />
      <h1 className="text-5xl font-bold">DigiTube</h1>
    </Link>
    <nav>
      <a href="#about" className="mr-4 hover:underline">À PROPOS</a>
      <a href="/contact" className="hover:underline">CONTACT</a>
      <a href="https://digiload.online" className="ml-4 hover:underline inline-flex items-center">CANVA PRO GRATUIT</a>
    </nav>
  </header>
);

export default Header;
