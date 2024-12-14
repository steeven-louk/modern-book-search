import Image from 'next/image'
import Link from 'next/link'

type Book = {
  id: string
  title: string
  author: string
  coverImage: string
}

type BookGalleryProps = {
  books: Book[]
}

export default function BookGallery({ books }: BookGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {books.map((book) => (
        <Link href={`/book/${book.id}`} key={book.id} className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <div className="relative h-64">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 truncate text-gray-900">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

