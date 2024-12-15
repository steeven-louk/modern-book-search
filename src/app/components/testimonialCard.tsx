type TestimonialCardProps = {
    quote: string
    author: string
  }
  
  export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
    return (
      <div className="bg-white cursor-pointer p-6 rounded-lg shadow-md hover:shadow-md hover:shadow-black transition-shadow">
        <p className="text-gray-600 italic mb-4">&ldquo;{quote}&ldquo;</p>
        <p className="text-gray-900 font-semibold">- {author}</p>
      </div>
    )
  }
  
  