'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar(onSearch: (query: string) => void) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    onSearch(query);
    console.log('Searching for:', query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un livre, un auteur..."
        className="flex-grow px-4 py-2 rounded-l-full border-2 border-r-0 border-gray-300 focus:outline-none focus:border-blue-400 font-roboto"
      />
      <button
        type="submit"
        className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-r-full transition duration-300 font-inter"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  )
}

