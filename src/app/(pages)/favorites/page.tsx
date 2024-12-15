'use client'

import BookGallery from '@/app/components/bookGallery'
import { useState, useEffect } from 'react'

type Book = {
  id: string
  title: string
  author: string
  coverImage: string
  imageLinks:string
}

// Fonction utilitaire pour récupérer les favoris depuis localStorage
function fetchFavorites(): Book[] {
  if (typeof window === 'undefined') return [];
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<Book[]>([]);

  useEffect(() => {
    // Charger les favoris uniquement côté client
    setFavorites(fetchFavorites());
  }, []);

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((book) => book.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Vos Favoris</h1>
      {favorites.length > 0 ? (
        <>
          <BookGallery books={favorites} />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((book) => (
              <div key={book.id} className="flex flex-col items-center gap-4">
                <h2 className="text-gray-800 font-semibold">{book.title}</h2>
                <button
                  onClick={() => removeFavorite(book.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">Vous n&apos;avez pas encore de livres favoris.</p>
      )}
    </div>
  )
}
