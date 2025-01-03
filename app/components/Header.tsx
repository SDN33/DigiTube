// Header Component
import { Youtube, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';

const Header = () => (
  <header className="text-center py-14">
    <Link href="/" className="flex justify-center mb-6">
      <Youtube className="w-12 h-12 text-red-500 mr-2" />
      <h1 className="text-5xl font-bold">DigiTube</h1>
    </Link>
    <nav>
      <Link href="#about" className="mr-4 hover:underline">À PROPOS</Link>
      <Link href="/" className="mr-4 hover:underline">VUES YOUTUBE</Link>
      <Link href="/likes" className="mr-4 hover:underline">LIKES YOUTUBE</Link>
      <Link href="https://digiload.online" className="mr-4 hover:underline">CANVA PRO GRATUIT</Link>
      <Link href="/contact" className="hover:underline group">CONTACT<span className='inline-flex ml-1'><MessageCircleQuestion className='group-hover:rotate-12 transition-transform duration-300' /></span></Link>
    </nav>
  </header>
);

export default Header;
