'use client';
import { MessageCircleHeart } from 'lucide-react';
import Footer from './components/Footer';
import Header from './components/Header';
import Image from 'next/image';
import Tab from './components/Tab';


// Main Component
const Main = () => (
  <main className="min-h-screen bg-gradient-to-t from-purple-900 to-[#5e17eb] text-white">
    <div className="max-w-6xl mx-auto px-4">
      <Header />
      <div className="flex flex-col items-center pb-8">
        <h2 className="text-3xl lg:text-5xl mb-4 font-bold flex justify-center mx-auto text-center">Acheter des Vues Youtube pour vos vidéos</h2>
        <p className="text-xl text-gray-200 text-center">
          Nous vous proposons d&apos;acheter des vues YouTube de haute qualité 100% réelles et propulsées par des utilisateurs réels.
          <br /> Augmentez votre visibilité sur YouTube et gagnez en popularité !
        </p>
      </div>
      <Tab />
      <Image
        src="/images/stripe.png"
        alt="Paiement sécurisé via Stripe"
        width={200}
        height={50}
        className="mx-auto my-2"
      />
      <p className='text-center'>Paiment sécurisé via Stripe</p>
    </div>
    <p className='text-center text-gray-300 text-sm mx-auto max-w-6xl px-4 py-8'>
      <strong>Attention :</strong> Nous ne garantissons pas que les vues achetées augmenteront le nombre de vues
      affichées sur votre vidéo YouTube. Les vues achetées peuvent être retardées ou supprimées par YouTube.
    </p>
    <br />
    <br />
    <br />
    <div className='border-t border-gray-800'>
      <div className='max-w-6xl mx-auto px-4 py-8 mt-8'>
        <Image src='/images/banner.png' alt='DigiTube | Acheter vues YouTube, likes, abonnés' width={1200} height={630} />
        <br /><br />
        <h2 id="about" className='text-2xl lg:text-3xl mb-4 text-center font-bold'>À PROPOS</h2>
        <p className='text-2xl text-gray-200 text-center'>
          Avec DigiTube vous pouvez acheter des vues YouTube de haute qualité 100% réelles
        </p>
        <p className='text-lg text-gray-200 text-center mt-4'>
          Chez DigiTube, nous nous engageons à fournir des vues YouTube de haute qualité à nos clients. Nos vues sont 100% réelles et proviennent de comptes YouTube actifs. Nous ne proposons pas de vues de robots ou de faux comptes. Nous garantissons que les vues que vous achetez sont de la plus haute qualité et qu&apos;elles vous aideront à augmenter votre visibilité sur YouTube.
          <br /><br />Nos agents qualifiés sont disponibles 24h/24 et 7j/7 pour répondre à vos questions
        </p>
        <p className='text-xl lg:text-2xl mb-4 text-center mt-16 transition-transform duration-300 hover:scale-105 cursor-pointer bg-red-600 rounded-lg'>
          Pourquoi acheter des vues YouTube est-il important pour votre chaîne ? Explications !
        </p>
        <p className='text-lg text-gray-200 text-center transition-transform duration-300 hover:scale-105 cursor-pointer'>
          Si vous avez une chaîne YouTube, vous savez à quel point il est important d&apos;avoir un grand nombre de vues sur vos vidéos. Les vues YouTube sont un indicateur de popularité et de crédibilité. Plus vous avez de vues sur vos vidéos YouTube, plus vous avez de chances d&apos;attirer de nouveaux spectateurs et de les fidéliser. Les vues YouTube peuvent également vous aider à augmenter votre classement dans les résultats de recherche de YouTube et à atteindre un public plus large.
        </p>
        <p className='text-xl lg:text-2xl mb-4 text-center mt-16 transition-transform duration-300 hover:scale-105 cursor-pointer bg-red-600 rounded-lg'>
          Comment fonctionne l&apos;achat de vues YouTube sur DigiTube ?
        </p>
        <p className='text-lg text-gray-200 text-center mb-20 transition-transform duration-300 hover:scale-105 cursor-pointer'>
          L&apos;achat de vues YouTube sur DigiTube est simple et rapide. Il vous suffit de choisir le nombre de vues que vous souhaitez acheter, de saisir l&apos;URL de votre vidéo YouTube et de procéder au paiement. Une fois votre paiement effectué, nous commencerons à ajouter des vues à votre vidéo YouTube dans un delais de 24h/48h . Vous verrez les vues augmenter en temps réel et vous pourrez suivre l&apos;évolution de votre vidéo sur YouTube Analytics. Nos vues sont 100% réelles et proviennent de comptes YouTube actifs. Vous pouvez acheter des vues YouTube en toute confiance sur DigiTube.
        </p>

        <br />
        <div className='border-t border-gray-800'></div>
        <h2 id="about" className='text-2xl lg:text-3xl mb-4 text-center font-bold py-8 mt-8'>Quelques Témoignages</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 1</h3>
            </div>
            <p>Je ne savais pas trop à quoi m’attendre en achetant des vues, mais DigiTube a vraiment livré. Les vues sont arrivées rapidement et ma vidéo a gagné en popularité. Ça m’a donné un coup de pouce pour lancer ma chaîne. Merci !</p>
            <p className='mt-4 text-sm text-gray-300'>- Claire L.</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 2</h3>
            </div>
            <p>Honnêtement, j’étais sceptique au début, mais après avoir vu ma vidéo passer de 200 à 10 000 vues, je suis convaincu ! Le service est simple et rapide, et les vues semblent vraiment authentiques. Une très bonne expérience.</p>
            <p className='mt-4 text-sm text-gray-300'>- Yann P.</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 3</h3>
            </div>
            <p>J’ai utilisé DigiTube pour booster une de mes vidéos avant un lancement important. Les résultats ont dépassé mes attentes ! Ça m’a permis d’attirer un public plus large. Je referai appel à eux, c’est sûr.</p>
            <p className='mt-4 text-sm text-gray-300'>- Sonia T.</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 4</h3>
            </div>
            <p>Je gère une petite chaîne de musique et grâce à DigiTube, mes morceaux ont enfin obtenu la visibilité qu’ils méritent. Le service client est super réactif aussi, ce qui est un plus. Je recommande sans hésiter !</p>
            <p className='mt-4 text-sm text-gray-300'>- Maxime R.</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 5</h3>
            </div>
            <p>Pour ma chaîne culinaire, je cherchais à obtenir plus d’engagement sur mes vidéos. DigiTube m’a beaucoup aidée : non seulement mes vues ont augmenté, mais j’ai aussi remarqué plus de commentaires et de likes. Super !</p>
            <p className='mt-4 text-sm text-gray-300'>- Élodie G.</p>
          </div>
          <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MessageCircleHeart className='w-8 h-8 mr-2' />
              <h3 className='text-xl font-semibold'>Témoignage 6</h3>
            </div>
            <p>Au départ, je ne voulais pas payer pour des vues, mais DigiTube m’a vraiment fait changer d’avis. Mes vidéos semblent plus professionnelles et je gagne maintenant des abonnés de manière organique. Très satisfait !</p>
            <p className='mt-4 text-sm text-gray-300'>- Julien F.</p>
          </div>
        </div>        

      </div>
    </div>
  </main>
);

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Main />
      <Footer />
    </div>
  );
}
