import { Users, BookOpen, Search } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 ">
            <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 font-poppins text-center">À Propos de Modern Book Search</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-8 text-gray-600 font-roboto">
              Modern Book Search est votre compagnon littéraire numérique, conçu pour vous aider à découvrir votre prochaine lecture passionnante. Notre mission est de connecter les lecteurs avec les livres qu&apos;ils aimeront, en rendant la recherche et la découverte de livres aussi simple et agréable que possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 font-poppins text-center">Notre Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer text-center hover:shadow-md hover:transition-shadow hover:shadow-blue-400">
              <Search className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 font-poppins">Faciliter la Recherche</h3>
              <p className="text-gray-600 font-roboto">Nous simplifions la recherche de livres grâce à notre moteur de recherche puissant et intuitif.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer text-center hover:shadow-md hover:transition-shadow hover:shadow-blue-400">
              <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 font-poppins">Promouvoir la Lecture</h3>
              <p className="text-gray-600 font-roboto">Nous encourageons la lecture en rendant les livres plus accessibles et en mettant en avant des recommandations personnalisées.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer text-center hover:shadow-md hover:transition-shadow hover:shadow-blue-400">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 font-poppins">Connecter les Lecteurs</h3>
              <p className="text-gray-600 font-roboto">Nous créons une communauté de passionnés de lecture, permettant le partage de découvertes et de recommandations.</p>
            </div>
          </div>
        </div>
      </section>
  
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 font-poppins">Rejoignez-nous dans cette Aventure</h2>
          <p className="text-xl mb-8 text-gray-600 font-roboto max-w-2xl mx-auto">
            Que vous soyez un lecteur passionné, un auteur en herbe ou simplement curieux, Modern Book Search est là pour vous. Ensemble, continuons à explorer le monde merveilleux de la littérature.
          </p>
          <p className='text-xl mb-8 text-gray-600 font-roboto max-w-2xl mx-auto'>
          Nous croyons que la lecture est une porte ouverte vers l&apos;apprentissage, l&apos;inspiration et le divertissement. C&apos;est pourquoi nous nous efforçons d&apos;améliorer continuellement notre plateforme pour offrir une expérience utilisateur fluide, intuitive et agréable.
          </p>
          <a href="/search" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 font-inter text-lg">
            Commencez votre recherche
          </a>
        </div>
      </section>

    </div>
  );
}
