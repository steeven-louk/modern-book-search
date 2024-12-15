import Image from 'next/image'
import Link from 'next/link'

type ImageLinks = {
  smallThumbnail?: string
  thumbnail?: string
}

type VolumeInfo = {
  title: string
  authors?: string[]
  publishedDate?: string
  publisher?: string
  imageLinks?: ImageLinks
}

type Book = {
  id: string
  volumeInfo: VolumeInfo
}

type BookGalleryProps = {
  books: Book[]
}

export default function BookGallery({ books }: BookGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
      {books.map((book) => (
        <Link href={`/book/${book.id}`} key={book.id} className="group">
          <div className="bg-white h-full overflow-hidden rounded-lg shadow-md hover:shadow-gray-500 transition-transform duration-300 group-hover:scale-105">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative w-[10rem] md:w-[15rem] h-[15rem]">
                <Image
                  src={book.volumeInfo.imageLinks?.smallThumbnail || "/assets/unknown1.png"}
                  alt={book.volumeInfo.title || "Titre inconnu"}
                  fill
                  className="rounded-lg object-cover"
                  sizes="250px"
                />
              </div>
              <div className="p-3 w-full">
                <h3 className="font-semibold text-lg mb-1 text-gray-900">
                  {book.volumeInfo.title || "Titre inconnu"}
                </h3>
                <p className="text-gray-600 font-semibold capitalize">
                  <span className="font-semibold">Auteurs: </span>
                  {book.volumeInfo.authors?.join(", ") || "Auteur inconnu"}
                </p>
                <p className="text-gray-600 font-semibold capitalize my-3">
                  <span className="font-semibold">Date de publication:<br /></span>
                  {book.volumeInfo.publishedDate || "Non spécifiée"}
                </p>
                <p className="text-gray-600 font-semibold capitalize">
                  <span className="font-semibold">Éditeur:<br /></span>
                  {book.volumeInfo.publisher || "Non spécifié"}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
