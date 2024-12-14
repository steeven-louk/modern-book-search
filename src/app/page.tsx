import Image from "next/image";
import Link from "next/link";
import { Search, BookOpen, Star, Users } from 'lucide-react'
import FeatureCard from "./components/featureCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-poppins">
                Trouvez votre prochain livre préféré
              </h1>
              <p className="text-xl mb-8 text-gray-600 font-roboto">
                Explorez des millions de livres, des best-sellers aux classiques, avec un moteur de recherche rapide et intuitif.
              </p>
              <Link href="/search" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 font-inter text-lg">
                Commencer votre recherche
              </Link>
            </div>
            <div className="md:w-1/2">
            <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Pile de livres modernes"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nos Fonctionnalités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Search className="w-12 h-12 text-orange-400" />}
              title="Recherche rapide"
              description="Trouvez instantanément les livres que vous recherchez"
            />
            <FeatureCard
              icon={<BookOpen className="w-12 h-12 text-orange-400" />}
              title="Détails précis des livres"
              description="Accédez à des informations complètes sur chaque ouvrage"
            />
            <FeatureCard
              icon={<Star className="w-12 h-12 text-orange-400" />}
              title="Favoris personnalisés"
              description="Créez et gérez votre liste de livres préférés"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
