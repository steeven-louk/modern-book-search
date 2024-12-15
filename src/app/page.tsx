"use client"

import Image from "next/image";
import Link from "next/link";
import { Search, BookOpen, Star } from 'lucide-react'
import FeatureCard from "./components/featureCard";
import TestimonialCard from "./components/testimonialCard";
import { ScrollToTop } from "./components/scrollToTop";
import { Heros } from "./components/heros";

export default function Home() {


  return (
    <div className="min-h-screen bg-gray-50 relative">
     {/* scroll to top */}
      <ScrollToTop/>

      {/* Hero section */}
      <Heros/>

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

            {/* Importance of Reading Section */}
            <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">L&apos;importance de la lecture</h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li>✨ Améliorez vos connaissances</li>
                <li>🧘 Réduisez votre stress</li>
                <li>🌈 Développez votre imagination</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src={"/assets/men.jpg"}
                alt="Personne lisant un livre dans un cadre paisible"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Ce que disent nos utilisateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Cette plateforme a complètement changé ma façon de découvrir de nouveaux livres !"
              author="Marie D."
            />
            <TestimonialCard
              quote="Je n'ai jamais trouvé mes lectures aussi facilement. C'est un vrai gain de temps !"
              author="Thomas L."
            />
            <TestimonialCard
              quote="La possibilité de télécharger en PDF est vraiment pratique. Je recommande !"
              author="Sophie M."
            />
          </div>
          <p className="text-center mt-12 text-xl font-semibold text-gray-700">Plus de <span className="text-green-500 font-bold">50 000</span> recherches effectuées chaque mois</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">À Propos</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre mission est de connecter les lecteurs avec les livres qu&apos;ils aiment. 
            Nous croyons que chaque livre a le pouvoir de transformer des vies.
          </p>
          <Link href="/about" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            En savoir plus
          </Link>
        </div>
      </section>

      {/* Download or Buy Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Téléchargez ou Achetez vos livres</h2>
              <p className="text-xl mb-8 text-gray-600">
                Accédez à vos livres préférés en un clic, que ce soit en PDF ou via nos partenaires de vente en ligne. 
                Lisez où vous voulez, quand vous voulez, sur n&apos;importe quel appareil.
              </p>
              <Link href="/search" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Découvrir les livres
              </Link>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <Image
                src={"/assets/lecture1.jpg"}
                alt="Personne utilisant un appareil pour accéder aux livres"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
