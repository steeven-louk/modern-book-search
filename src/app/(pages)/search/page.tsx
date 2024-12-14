'use client'

import { useState } from 'react'
import SearchBar from '@/app/components/searchBar'
import BookGallery from '@/app/components/bookGallery'

interface mockResultsType{
    id: string,
    title: string,
    author: string,
    coverImage: string
}
export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (query: string) => {
    // Implement API call to Google Books here
    // For now, we'll use mock data
    const mockResults:mockResultsType[] = [
      { id: '1', title: 'Book 1', author: 'Author 1', coverImage: '/placeholder.svg?height=200&width=150' },
      { id: '2', title: 'Book 2', author: 'Author 2', coverImage: '/placeholder.svg?height=200&width=150' },
      { id: '3', title: 'Book 3', author: 'Author 3', coverImage: '/placeholder.svg?height=200&width=150' },
    ]
    setSearchResults(mockResults)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Recherche de Livres</h1>
      <SearchBar onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        <BookGallery books={searchResults} />
      ) : (
        <p className="text-center mt-8 text-gray-600">Aucun résultat. Essayez une nouvelle recherche !</p>
      )}
    </div>
  )
}

