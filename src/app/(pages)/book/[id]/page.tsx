'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bookmark, BookOpenCheck, Download, ShoppingCart, Star } from 'lucide-react'
import { useState, useEffect } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'




export default function BookPage({ params }: { params: Promise<{ id: string }> }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [book, setBook] = useState<any>(null) 

  const { id } = React.use(params) 
  const URL: string = `https://www.googleapis.com/books/v1/volumes/${id}`

  const navigation = useRouter()
  function goBack(){
    navigation.back();
  }

  useEffect(() => {

    const getBookById = async () => {
      try {
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const bookData = await response.json()
        setBook(bookData) // Stocker les données du livre dans l'état
      } catch (error) {
        console.error('Erreur lors de la récupération du livre', error)
      }
  }
    getBookById()
  }, [URL])

  // Affichage conditionnel si le livre n'est pas encore chargé
  if (!book) {
    return <div className="text-center text-gray-500">Chargement des informations du livre...</div>
  }

  // Vérification des champs optionnels dans les données du livre
  const coverImage = book.volumeInfo?.imageLinks?.thumbnail || '/placeholder.jpg'
  const title = book.volumeInfo?.title || 'Titre indisponible'
  const author = book.volumeInfo?.authors?.join(', ') || 'Auteur inconnu'
  const description = book.volumeInfo?.description || 'Aucune description disponible'
  const categories = book.volumeInfo?.categories || []
  const publishDate = book.volumeInfo?.publishedDate || 'Date non spécifiée'
  const pdfLink = book.accessInfo?.pdf?.acsTokenLink 
  const readLink = book.accessInfo?.webReaderLink || '#'
  const buyLink = book.saleInfo?.buyLink || '#'
  const published = book.volumeInfo?.publisher || "no publisher"
  // const isPdf =book.accessInfo?.pdf.isAvailable
  const dimension = book.volumeInfo?.dimensions?.height || 'Dimension non spécifier'
  const pageCount = book.volumeInfo?.pageCount || 'Nombre de page non spécifier'
  const rating = Math.floor(book.volumeInfo?.averageRating || 0) // Note moyenne arrondie


  // Parser la description en remplaçant les balises HTML par JSX
  const parseDescription = (description: string) => {
    const parts = description.split(/(<b>|<\/b>|<br>)/g) // Diviser selon les balises importantes
    return parts.map((part, index) => {
      if (part === '<b>') {
        return <b key={index}> {/* Rendre le texte gras */}</b>
      }
      if (part === '<br>') {
        return <br key={index} /> // Ajouter un saut de ligne
      }
      if (part === '</b>') {
        return null // Ignorer la fermeture de la balise
      }
      return part // Garder le texte brut
    })
  }

    // Générer les étoiles pleines avec une boucle
    const renderFullStars = (rating: number) => {
      const stars = []
      for (let i = 0; i < rating; i++) {
        stars.push(<Star key={i} className="text-yellow-500" />)
      }
      return stars
    }

  return (

    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="navigation items-baseline gap-2 flex mb-3">
        <button type='button' onClick={()=>goBack()} className='underline text-orange-400'>Recherche</button>/
        <span className='font-bold'>{title}</span>
      </div>
      <div className="flex flex-col md:flex-row gap-8">

        <div className="md:w-1/3">
          <Image
            src={coverImage}
            alt={title}
            width={300}
            height={300}
            className="rounded-lg object-cover shadow-md"
          />
          <p className=" font-semibold text-gray-700 capitalize my-2">
              <span className="font-semibold">Editeur: </span>
              {published}
          </p>
          <p className=" font-semibold text-gray-700 capitalize my-2">
              <span className="font-semibold">Nombre de page: </span>
              {pageCount}
          </p>
          <span>Dimension: {dimension}</span>
          <div className="flex items-center gap-1 mb-6">
            {renderFullStars(rating)}
           {rating > 0 && <span className="ml-2 text-gray-600">{rating} étoiles</span>}
          </div>

          <button
              type='button'
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              <Bookmark size={20} />
              Ajouter en Favorie
            </button>

        </div>

       
        {/* Détails du livre */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{title}</h1>
          <p className="text-xl text-gray-600 mb-4">{author}</p>
          <p className="text-gray-700 mb-6">{parseDescription(description)}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Catégories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category: string) => (
                <span key={category} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-6">Date de publication: {publishDate}</p>
          <div className="flex gap-4">
           {pdfLink &&
            <Link
              
              href={pdfLink}
              target="_blank"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              <Download size={20} />
              Télécharger en PDF
            </Link>
            }
            <Link
              href={buyLink}
              target="_blank"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              <ShoppingCart size={20} />
              Acheter le livre
            </Link>
            <Link
              href={readLink}
              target="_blank"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              <BookOpenCheck size={20} />
              Lire un extrait
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
