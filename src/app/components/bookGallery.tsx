import Image from 'next/image'
import Link from 'next/link'

type Book = {
  imageLinks: any
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
      {books.map((book) => (
        <Link href={`/book/${book.id}`} key={book.id} className="group ">
          <div className="bg-white h-full  overflow-hidden rounded-lg shadow-md hover:shadow-gray-500 transition-transform duration-300 group-hover:scale-105">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative w-[10rem] md:w-[15rem] h-[15rem]">
                <Image
                  src={book.volumeInfo.imageLinks?.smallThumbnail || "/placeholder"}
                  alt={book.volumeInfo.title}
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-lg object-cover"
                  sizes='250px'
                />
              </div>
              <div className="p-3 w-full">
                <h3 className="font-semibold text-lg mb-1  text-gray-900">{book.volumeInfo.title}</h3>
                <p className="text-gray-600 font-semibold capitalize">
                  <span className="font-semibold">Auteurs: </span>
                  {book.volumeInfo.authors}
                </p>
                <p className="text-gray-600 font-semibold capitalize my-3">
                  <span className="font-semibold">Date De Publication:<br /></span>
                  {book.volumeInfo?.publishedDate}
                </p>
                <p className="text-gray-600 font-semibold capitalize">
                  <span className="font-semibold">Editeur:<br /></span>
                  {book.volumeInfo?.publisher || "no publisher"}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
