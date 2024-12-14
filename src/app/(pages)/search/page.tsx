'use client'

import { useState } from 'react'
import SearchBar from '@/app/components/searchBar'
import BookGallery from '@/app/components/bookGallery'


export default function SearchPage() {

    const [searchResults, setSearchResults] = useState([]); // Pour stocker les résultats des livres
    const [bookCount, setBookCount] = useState(0); // Pour stocker le nombre total de livres trouvés
    const URL: string = "https://www.googleapis.com/books/v1/volumes?q=";
    
    const handleSearch = async (query: string) => {
      try {
        const response = await fetch(URL + query); // Effectuer la requête
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const searchBook = await response.json();
        setSearchResults(searchBook?.items || []); 
        setBookCount(searchBook?.totalItems || 0);
      } catch (error) {
        console.error("Erreur lors de la recherche:", error);
      }
    };
  console.log("searchddddddddddd",bookCount)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Recherche de Livres</h1>
      <SearchBar onSearch={handleSearch} />
      {bookCount > 0 &&  <p className='my-4'>Environ <span className='text-blue-400 font-semibold'>{bookCount}</span> livres trouvés</p>}
      {searchResults.length > 0 ? (
        
        <BookGallery books={searchResults} />
      ) : (
        <p className="text-center mt-8 text-gray-600">Aucun résultat. Essayez une nouvelle recherche !</p>
      )}
    </div>
  )
}

