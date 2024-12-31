// Header Component
import { Instagram, Youtube } from 'lucide-react';
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
      <a href="https://intagram.com/digitube" className="ml-4 hover:underline inline-flex items-center">INSTAGRAM&nbsp; <Instagram className="w-5 h-5 ml-1" /></a>
    </nav>
  </header>
);

export default Header;
