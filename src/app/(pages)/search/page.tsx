'use client'

import { useState } from 'react'
import SearchBar from '@/app/components/searchBar'
import BookGallery from '@/app/components/bookGallery'
import Image from 'next/image';


export default function SearchPage() {

    const [searchResults, setSearchResults] = useState([]);
    const [bookCount, setBookCount] = useState(0);

    
    const handleSearch = async (query: string) => {
      const URL: string = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;
      try {
        const response = await fetch(URL);
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

    return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Recherche de Livres</h1>
      <SearchBar onSearch={handleSearch} />
      {bookCount > 0 &&  <p className='my-4'>Environ <span className='text-blue-400 font-semibold'>{bookCount}</span> livres trouvés</p>}
      {searchResults.length > 0 ? (
        
        <BookGallery books={searchResults} />
      ) : (
        <div className="text-center mt-8 text-gray-600">
          <Image src={'/assets/loading/loading-2.gif'} alt={'loading'} width={250} height={250} className=' object-cover mx-auto'/>
          <p>Aucun résultat. Essayez une nouvelle recherche !</p>
        </div>
      )}
    </div>
  )
}

