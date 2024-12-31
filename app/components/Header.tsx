// Header Component
import { Youtube } from 'lucide-react';

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

export default Header;
