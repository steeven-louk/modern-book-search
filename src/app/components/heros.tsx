import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const Heros = () => {
    return (
       <>
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
            <div className="md:w-1/2 md:pl-10">
            <Image
                src={"/assets/livre2.jpg"}
                alt="Pile de livres modernes"
                width={500}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
       </>
    )
}
