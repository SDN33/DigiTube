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
      <Link href="#about" className="mr-4 hover:underline">À PROPOS</Link>
      <Link href="/likes" className="mr-4 hover:underline">ACHETER LIKES YOUTUBE</Link>
      <Link href="https://digiload.online" className="mr-4 hover:underline">CANVA PRO GRATUIT</Link>
      <Link href="/contact" className="hover:underline">CONTACT</Link>
    </nav>
  </header>
);

export default Header;
